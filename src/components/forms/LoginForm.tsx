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
  const isArabic = useLocale() === "ar";
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
        // User has 2FA enabled, redirect to 2FA verification page
        const locale = isArabic ? 'ar' : 'en';
        const params = new URLSearchParams({
          email: data.email,
          password: data.password,
        });
        router.push(`/${locale}/verify-2fa?${params.toString()}`);
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
  if (status === 'loading') {
    return <div className="text-white text-center py-10">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen flex md:flex-row flex-col items-center justify-center bg-[#07153B] text-white px-4">
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="w-full max-w-md md:h-[600px] p-6 space-y-6 shadow-2xl backdrop-blur-sm"
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
        className="flex items-center text-sm text-[#e2dedc] hover:text-white transition-colors"
        style={{
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        <FaArrowRight className="ml-1 w-4 h-4" />
        {t('back')}
      </Link>
    ) : (
      <Link
        href={`/${isArabic ? 'ar' : 'en'}`}
        className="flex items-center text-sm text-[#e2dedc] hover:text-white transition-colors"
        style={{
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        <FaArrowLeft className="mr-1 w-4 h-4" />
        {t('back')}
      </Link>
    )}

    {/* Headings */}
    <div className="space-y-2">
      <h1 className="text-3xl font-bold text-white text-[#0d1635]">
        {t('title4_1')} McC<span className="text-[#e2dedc]">o</span>in
      </h1>
      {/* <h1 className="text-3xl font-bold text-white">{t('title6')}</h1> */}
      <p className="text-sm text-[#e2dedc]">{t('title5')}</p>
    </div>
    <div className="relative h-[400px] w-[400px]">
      <Image src="/images/login_pic.png" alt="logo" fill />
    </div>
  </motion.div>
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="w-full h-[600px] max-w-md pt-12 px-6 space-y-6 bg-[#e2dedc] shadow-xl"
  >
    <div>
      {/* <Image src="/images/login_pic.svg" alt="logo" width={40} height={40} /> */}
      <h2 className="text-2xl mt-2 text-[#117f60]">
        {t('title1')} <span className="text-[#e47a5a]">{t('title2')}</span>
      </h2>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex flex-col gap-2">
        <label className="text-[#117f60]">{t('email_label')}</label>
        <Input className="placeholder:italic placeholder:border border-[#4b4f51]"  type="email" placeholder={t('email')} {...register('email')} />
        {errors.email && <p className="text-[#e47a5a] text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[#117f60]">{t('password_label')}</label>
        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder={t('password')}
            {...register('password')}
            className="placeholder:italic placeholder:border border-[#4b4f51]"
          />
          <div
            className={`absolute ${
              isArabic ? 'left-3' : 'right-3'
            } top-2.5 cursor-pointer text-white`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff color="#e47a5a" size={20} /> : <Eye color="#e47a5a" size={20} />}
          </div>
        </div>
        {errors.password && <p className="text-[#e47a5a] text-sm">{errors.password.message}</p>}
      </div>

      <div
        className={`flex gap-x-1 ${isArabic ? 'justify-start' : 'justify-start'}`}
        style={{
          direction: isArabic ? 'rtl' : 'ltr',
        }}
      >
        <p className="text-[#117f60]">{t('forgotPassword1_1')}</p>
        <p className="text-[#117f60]">{t('forgotPassword1_2')}</p>
        <Link
          href={`/${isArabic ? 'ar' : 'en'}/forgot-password`}
          className="text-[#e47a5a] text-sm underline"
        >
           {t('forgotPassword1_3')}
        </Link>
      </div>
      <Button
        className="w-full bg-[#e47a5a] hover:bg-[#e47a5a] transition-all duration-200 cursor-pointer"
        type="submit"
        disabled={loading}
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : t('button')}
      </Button>

      <p className="text-center text-sm text-[#DAE6EA]">
        {/* {t('noAccount')} */}
        <Link href={`/${isArabic ? 'ar' : 'en'}/signup`} className="text-[#e47a5a] underline">
          {t('registerNow')}
        </Link>
      </p>
    </form>
  </motion.div>
</div>
  );
}
