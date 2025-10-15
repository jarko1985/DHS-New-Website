"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, ArrowUp, Eye, EyeOff, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

const createFormSchema = (t: any) =>
  z.object({
    email: z.string().email(t("validations.email_invalid")),
    password: z.string().min(1, t("validations.password_required")),
  });

export default function LoginPage() {
  const t = useTranslations("signIn");
  const twoFA = useTranslations("twoFactor");
  const isArabic = useLocale() === "ar";
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [show2FAInput, setShow2FAInput] = useState(false);
  const [twoFAToken, setTwoFAToken] = useState('');
  const [loginCredentials, setLoginCredentials] = useState({ email: '', password: '' });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(createFormSchema(t)) });
  useEffect(() => {
    const error = searchParams?.get('error');
    if (error) {
      console.log('NextAuth error detected:', error);
      switch (error) {
        case 'Configuration':
          toast.error(t('errors.auth_service_error'));
          break;
        case 'AccessDenied':
          toast.error(t('errors.access_denied'));
          break;
        case 'Verification':
          toast.error(t('errors.verification_required'));
          break;
        default:
          toast.error(t('errors.auth_error_generic'));
      }
    }

    // Pre-fill email from URL parameter
    const emailParam = searchParams?.get('email');
    if (emailParam) {
      setValue('email', emailParam);
    }
  }, [searchParams, setValue]);
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      // First check user status to see if 2FA is required
      const statusResponse = await fetch('/api/check-user-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      const statusData = await statusResponse.json();

      if (statusResponse.ok && statusData.needs2FA) {
        // User has 2FA enabled, show 2FA input field
        setLoginCredentials({ email: data.email, password: data.password });
        setShow2FAInput(true);
        setLoading(false);
        return;
      }

      // Use NextAuth signIn - validation will be handled in the authorize callback
      const result = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      console.log('NextAuth signIn result:', {
        ok: result?.ok,
        error: result?.error,
        status: result?.status,
        url: result?.url,
        allProperties: Object.keys(result || {}),
      });

      if (result?.error) {
        console.error('NextAuth error:', result.error);

        // Check what specific error occurred to provide better messaging
        if (result.error === 'CredentialsSignin') {
          // Try to get more specific error info
          try {
            const statusResponse = await fetch('/api/check-user-status', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: data.email, password: data.password }),
            });

            const statusData = await statusResponse.json();

            if (statusData.error === 'email_not_verified') {
              toast.error(t('email_not_verified'));

              setTimeout(() => {
                toast.success(t('resend_verification_hint'));
              }, 3000);
            } else {
              toast.error(t('invalid_credentials'));
            }
          } catch (statusError) {
            toast.error(t('invalid_credentials'));
          }
        } else {
          toast.error(t('errors.auth_service_error_generic'));
        }
      } else if (result?.ok) {
        // Success
        toast.success(t('login_success'));
        const locale = isArabic ? 'ar' : 'en';
        router.push(`/${locale}`);
      } else {
        toast.error(t('login_failed'));
      }
    } catch (err: any) {
      console.error('Login error:', err);
      toast.error(err.message || t('login_failed'));
    } finally {
      setLoading(false);
    }
  };

  const handle2FAVerification = async () => {
    if (!twoFAToken || twoFAToken.length !== 6) {
      toast.error(twoFA('enter_token_error'));
      return;
    }

    try {
      setLoading(true);

      // Verify 2FA token
      const verifyResponse = await fetch('/api/2fa/verify-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginCredentials.email,
          password: loginCredentials.password,
          token: twoFAToken,
        }),
      });

      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok) {
        if (verifyData.error === 'invalid_2fa_token') {
          toast.error(twoFA('invalid_token'));
        } else {
          toast.error(verifyData.message || twoFA('verify_error'));
        }
        return;
      }

      // 2FA verified, proceed with normal login
      const result = await signIn('credentials', {
        email: loginCredentials.email,
        password: loginCredentials.password,
        redirect: false,
      });

      if (result?.error) {
        toast.error(t('invalid_credentials'));
      } else if (result?.ok) {
        toast.success(t('login_success'));
        const locale = isArabic ? 'ar' : 'en';
        router.push(`/${locale}`);
      } else {
        toast.error(t('login_failed'));
      }
    } catch (err: any) {
      console.error('2FA verification error:', err);
      toast.error(err.message || twoFA('verify_error'));
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return <div className="text-white text-center py-10">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center md:items-start md:pt-8 pt-4 justify-center bg-[#07153B] text-white px-3 sm:px-4">
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="w-full max-w-sm sm:max-w-md min-h-[450px] sm:min-h-[500px] md:h-[600px] p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-2xl backdrop-blur-sm"
    style={{
        background: 'linear-gradient(90deg, #b22f26, #e47a5a, #b22f26)',
      boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(149, 117, 205, 0.15)',
    }}
  >
    {/* Back button */}
    {isArabic ? (
      <Link
        href={`/${isArabic ? 'ar' : 'en'}`}
        className="flex items-center text-xs sm:text-sm text-[#e2dedc] hover:text-white transition-colors"
        style={{
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        <FaArrowRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
        {t('back')}
      </Link>
    ) : (
      <Link
        href={`/${isArabic ? 'ar' : 'en'}`}
        className="flex items-center text-xs sm:text-sm text-[#e2dedc] hover:text-white transition-colors"
        style={{
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        <FaArrowLeft className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
        {t('back')}
      </Link>
    )}

    {/* Headings */}
    <div className="space-y-1 sm:space-y-2">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0d1635] leading-tight text-center md:text-left">
        {t('title4_1')} McC<span className="text-[#e2dedc]">o</span>in
      </h1>
      <p className="text-xs sm:text-sm text-[#e2dedc] text-center md:text-left">{t('title5')}</p>
    </div>
    <div className="relative h-[300px] w-full sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px] mx-auto">
      <Image src="/images/login_pic.png" alt="logo" fill className="object-contain" />
    </div>
  </motion.div>
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="w-full max-w-sm sm:max-w-md min-h-[500px] sm:h-[600px] pt-6 sm:pt-8 md:pt-12 px-4 sm:px-6 pb-6 sm:pb-8 space-y-4 sm:space-y-6 bg-[#e2dedc] shadow-xl"
  >
    <div>
      <h2 className="text-lg sm:text-xl md:text-2xl mt-1 sm:mt-2 text-[#117f60] leading-tight text-center md:text-left">
        {t('title1')} <span className="text-[#e47a5a]">{t('title2')}</span>
      </h2>
    </div>

    {!show2FAInput ? (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4 md:space-y-5">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="text-[#117f60] text-xs sm:text-sm md:text-base text-center md:text-left">{t('email_label')}</label>
          <Input className="placeholder:italic placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base placeholder:border border-[#4b4f51] h-10 sm:h-11 text-sm sm:text-base px-3"  type="email" placeholder={t('email')} {...register('email')} />
          {errors.email && <p className="text-[#e47a5a] text-xs sm:text-sm">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="text-[#117f60] text-xs sm:text-sm md:text-base text-center md:text-left">{t('password_label')}</label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder={t('password')}
              {...register('password')}
              className="placeholder:italic placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base placeholder:border border-[#4b4f51] h-10 sm:h-11 text-sm sm:text-base px-3"
            />
            <div
              className={`absolute ${
                isArabic ? 'left-2 sm:left-3' : 'right-2 sm:right-3'
              } top-2 sm:top-2.5 cursor-pointer text-white`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff color="#e47a5a" size={18} className="sm:w-5 sm:h-5" /> : <Eye color="#e47a5a" size={18} className="sm:w-5 sm:h-5" />}
            </div>
          </div>
          {errors.password && <p className="text-[#e47a5a] text-xs sm:text-sm">{errors.password.message}</p>}
        </div>

        <div
          className={`flex flex-wrap gap-x-1 text-xs justify-center sm:text-sm ${isArabic ? 'md:justify-start' : 'md:justify-start'}`}
          style={{
            direction: isArabic ? 'rtl' : 'ltr',
          }}
        >
          <p className="text-[#117f60]">{t('forgotPassword1_1')}</p>
          <p className="text-[#117f60]">{t('forgotPassword1_2')}</p>
          <Link
            href={`/${isArabic ? 'ar' : 'en'}/forgot-password`}
            className="text-[#e47a5a] underline"
          >
             {t('forgotPassword1_3')}
          </Link>
        </div>
        <Button
          className="w-full bg-[#e47a5a] hover:bg-[#e47a5a] transition-all duration-200 cursor-pointer h-10 sm:h-11 text-sm sm:text-base"
          type="submit"
          disabled={loading}
        >
          {loading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" /> : t('button')}
        </Button>

        <p className="text-center text-xs sm:text-sm text-[#DAE6EA]">
          <Link href={`/${isArabic ? 'ar' : 'en'}/signup`} className="text-[#e47a5a] underline">
            {t('registerNow')}
          </Link>
        </p>
      </form>
    ) : (
      <div className="space-y-3 sm:space-y-4 md:space-y-5">
        <div className="bg-[#117f60] bg-opacity-10 border border-[#117f60] rounded-md p-3 sm:p-4">
          <p className="text-[#117f60] text-xs sm:text-sm font-medium">
            🔒 {twoFA('enter_code_instruction')}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label className="text-[#117f60] text-xs sm:text-sm md:text-base font-medium">{twoFA('verification_code_label')}</label>
          <Input
            type="text"
            placeholder={twoFA('verification_code_placeholder')}
            value={twoFAToken}
            onChange={(e) => setTwoFAToken(e.target.value.replace(/\D/g, '').slice(0, 6))}
            maxLength={6}
            className="text-center text-base sm:text-lg tracking-widest border-[#117f60] placeholder:italic placeholder:text-sm sm:placeholder:text-base text-[#0f1415] bg-[#e2dedc] h-12 sm:h-14"
          />
        </div>

        <div className="flex flex-col xs:flex-row gap-2">
          <Button
            onClick={handle2FAVerification}
            disabled={loading || twoFAToken.length !== 6}
            className="flex-1 bg-[#e47a5a] hover:bg-[#e47a5a] transition-all duration-200 h-10 sm:h-11 text-sm sm:text-base"
          >
            {loading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" /> : twoFA('verify_button')}
          </Button>
          <Button
            onClick={() => {
              setShow2FAInput(false);
              setTwoFAToken('');
              setLoginCredentials({ email: '', password: '' });
            }}
            variant="outline"
            className="flex-1 border-[#117f60] text-[#117f60] hover:bg-[#117f60] hover:bg-opacity-10 h-10 sm:h-11 text-sm sm:text-base"
          >
            {twoFA('back_button')}
          </Button>
        </div>
      </div>
    )}
  </motion.div>
</div>
  );
}
