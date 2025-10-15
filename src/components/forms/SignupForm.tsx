"use client";
import { useSearchParams,useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import toast from 'react-hot-toast';
import { Button } from "../ui/button";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import PasswordRequirements from "../custom/PasswordRequirements";
import TwoFASignupModal from "./TwoFASignupModal";
import { Switch } from "../ui/switch";

const createSignUpSchema = (t: any) =>
  z
    .object({
      name: z.string().min(2, t("validations.name_min")),
      email: z.string().email(t("validations.email_invalid")),
      password: z
        .string()
        .min(8, t("validations.password_min"))
        .regex(/[A-Z]/, t("validations.password_uppercase"))
        .regex(/[0-9]/, t("validations.password_number"))
        .regex(
          /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          t("validations.password_special")
        ),
      confirmPassword: z.string(),
      enable2FA: z.boolean().refine((val) => val === true, {
        message: t("validations.2fa_required"),
      }),
      acceptTerms: z.boolean().refine((val) => val === true, {
        message: t("validations.terms_required"),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("validations.passwords_match"),
      path: ["confirmPassword"],
    });

const SignupForm = () => {
  const t = useTranslations("signUp");
  const router = useRouter();
   const isArabic = useLocale() === 'ar';
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPasswordRequirements, setShowPasswordRequirements] =
    useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showVerificationPending, setShowVerificationPending] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [countdown, setCountdown] = useState(60); // 1 minute countdown
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isResending, setIsResending] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(true); // Mandatory, so default to true
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [twoFASecret, setTwoFASecret] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({ resolver: zodResolver(createSignUpSchema(t)) });

  // Initialize 2FA value in the form
  React.useEffect(() => {
    setValue('enable2FA', true);
  }, [setValue]);

  // Countdown timer effect
  React.useEffect(() => {
    if (countdown > 0 && showVerificationPending) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
  }, [countdown, showVerificationPending]);

   const handleResendVerification = async () => {
    if (isResendDisabled || !userEmail) return;

    setIsResending(true);
    try {
      const res = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(t('resend_success') || 'Verification email sent successfully');
        // Reset countdown timer
        setCountdown(60);
        setIsResendDisabled(true);
      } else {
        toast.error(data.message || t('resend_error') || 'Failed to send verification email');
      }
    } catch (error) {
      console.error('Resend verification error:', error);
      toast.error(t('resend_error') || 'Failed to send verification email');
    } finally {
      setIsResending(false);
    }
  };

   const onSignUp = async (data: any) => {
    // Check if password meets all requirements
    if (!isPasswordValid) {
      toast.error(t('validations.password_requirements_not_met'));
      return;
    }

    // Check if 2FA is enabled (it's mandatory)
    if (!is2FAEnabled) {
      toast.error('Two-Factor Authentication is mandatory for signup');
      return;
    }

    try {
      setLoading(true);
      
      // Show 2FA setup modal first
      setShow2FAModal(true);
      setLoading(false);
    } catch (err: any) {
      console.error('Signup error:', err);
      toast.error(err.message || t('signup_failed') || 'Signup failed. Please try again.');
      setLoading(false);
    }
  };

  const handle2FASuccess = async (secret: string) => {
    setTwoFASecret(secret);
    setShow2FAModal(false);
    setLoading(true);

    try {
      const formData = watch();
      
      // Create user account with 2FA enabled
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          twoFactorSecret: secret,
          twoFactorEnabled: true,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Signup failed');
      }

      if (result.success) {
        if (result.requiresVerification) {
          // Show verification pending UI instead of redirecting
          setUserEmail(formData.email);
          setShowVerificationPending(true);
          setCountdown(60);
          setIsResendDisabled(true);

          toast.success(
            t('verification_email_sent') || 'Please check your email to verify your account',
          );
        } else {
          // Fallback for accounts that don't require verification
          toast.success(t('signup_success') || 'Account created successfully!');
          const locale = isArabic ? 'ar' : 'en';
          router.push(`/${locale}/login`);
        }
      } else {
        throw new Error(result.message || 'Signup failed');
      }
    } catch (err: any) {
      console.error('Signup error:', err);

      // Handle specific error cases
      if (err.message?.includes('email') || err.message?.includes('exists')) {
        toast.error(t('email_exists') || 'An account with this email already exists');
      } else if (err.message?.includes('password')) {
        toast.error(t('password_weak') || 'Password does not meet requirements');
      } else if (err.message?.includes('name')) {
        toast.error(t('name_invalid') || 'Name is required and must be valid');
      } else {
        toast.error(err.message || t('signup_failed') || 'Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  // if (status === 'loading') {
  //   return <div className="text-white text-center py-10">Loading...</div>;
  // }
  return   <div className="min-h-screen flex md:flex-row flex-col items-center md:items-start md:pt-8 pt-4 justify-center bg-[#07153B] text-white px-3 sm:px-4">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full max-w-sm sm:max-w-md lg:max-w-lg min-h-[500px] sm:min-h-[600px] md:h-[900px] lg:h-[1040px] p-4 sm:p-6 space-y-4 sm:space-y-6 shadow-2xl backdrop-blur-sm"
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
            {t('back') || 'Back'}
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
            {t('back') || 'Back'}
          </Link>
        )}

        {/* Headings */}
        <div className="space-y-1 sm:space-y-2">
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0f1415] tracking-wider leading-6 sm:leading-7 md:leading-8 lg:leading-10 text-center ${
              isArabic ? 'md:text-right' : 'md:text-left'
            }`}
          >
            {t('headline1')}
          </h1>
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#0f1415] leading-6 sm:leading-7 md:leading-8 lg:leading-10 text-center ${
              isArabic ? 'md:text-right' : 'md:text-left'
            }`}
          >
            {t('headline2')}
          </h1>
          <h1
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#e2dedc] leading-6 sm:leading-7 md:leading-8 lg:leading-10 text-center ${
              isArabic ? 'md:text-right' : 'md:text-left'
            }`}
          >
            {t('headline3')}
          </h1>
          <p
            className={`text-xs sm:text-sm text-[#e2dedc] mt-3 sm:mt-4 md:mt-6 text-center ${
              isArabic ? 'md:text-right' : 'md:text-left'
            }`}
          >
            {t('tagline')}
          </p>
        </div>
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[250px] lg:h-[400px] mt-2 sm:mt-4">
        <Image src={"/images/dhs_bg_5.png"} alt="logo" className="mx-auto" fill style={{ objectFit: 'contain' }} />
        </div>
      </motion.div>

      {showVerificationPending ? (
        /* Verification Pending UI */
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full max-w-sm sm:max-w-md min-h-[700px] sm:h-[800px] lg:h-[900px] pt-6 sm:pt-8 px-4 sm:px-6 pb-6 space-y-4 sm:space-y-6 bg-[#050E27] shadow-xl"
        >
          <div className="text-center space-y-4 sm:space-y-6 flex flex-col justify-center h-full px-2">
            {/* Email sent icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-4 bg-[#EC3B3B] bg-opacity-20 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#EC3B3B]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Title and description */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
                {t('verification_pending_title') || 'Check Your Email'}
              </h2>
              <p className="text-gray-400 mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">
                {t('verification_pending_desc') || `We've sent a verification link to`}
              </p>
              <p className="text-[#EC3B3B] font-medium mb-4 sm:mb-6 text-sm sm:text-base break-all px-2">{userEmail}</p>
            </div>

            {/* Countdown and resend button */}
            <div className="space-y-3 sm:space-y-4">
              {countdown > 0 ? (
                <div className="text-center">
                  <p className="text-gray-400 mb-2 text-xs sm:text-sm">
                    {t('resend_countdown_text') || 'Resend verification email in'}
                  </p>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-green-400 mb-2 text-xs sm:text-sm">
                    {t('resend_available') || 'You can now resend the verification email'}
                  </p>
                </div>
              )}

              <Button
                onClick={handleResendVerification}
                disabled={isResendDisabled || isResending}
                className="w-full bg-[#EC3B3B] hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed h-10 sm:h-11 text-sm sm:text-base"
              >
                {isResending ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    <span className="text-xs sm:text-sm md:text-base">{t('resending') || 'Resending...'}</span>
                  </div>
                ) : (
                  <span className="text-xs sm:text-sm md:text-base">{t('resend_email') || 'Resend Verification Email'}</span>
                )}
              </Button>

              {/* Login redirect */}
              <div className="text-center pt-2 sm:pt-4">
                <p className="text-gray-400 text-xs sm:text-sm mb-2">
                  {t('already_verified_question') || 'Already verified your email?'}
                </p>
                <Link
                  href={`/${isArabic ? 'ar' : 'en'}/login`}
                  className="text-[#EC3B3B] hover:text-red-400 transition-colors text-sm sm:text-base"
                >
                  {t('go_to_login') || 'Go to Login'}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Regular Signup Form */
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg pt-4 sm:pt-6 min-h-[900px] sm:h-[950px] lg:h-[1040px] px-4 sm:px-6 pb-6 space-y-4 sm:space-y-5 lg:space-y-6 bg-[#e2dedc] shadow-xl"
        >
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center md:justify-start">
              <Image src="/images/dhs_icon1.png" alt="logo" width={30} height={30} className="sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px]" />
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#117f60]">{t('title1')}</h2>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#117f60]">
                <span className="text-[#e47a5a]">{t('title2')}</span> {t('title3')}
              </h2>
            </div>
            <p className="text-[#e47a5a] mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base italic pl-0 sm:pl-2 text-center md:text-left">{t('subtitle')}</p>
          </div>

          <form onSubmit={handleSubmit(onSignUp)} className="space-y-3 sm:space-y-4 md:space-y-5">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[#117f60] text-xs sm:text-sm md:text-base text-center md:text-left">{t('name') || 'Full Name'}</label>
              <Input {...register('name')} placeholder={t('name') || 'Full Name'} className="px-3 py-2 sm:p-3 md:p-4 lg:p-6 text-sm sm:text-base text-[#117f60] outline-none border border-[#0f1415] placeholder:italic placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base h-10 sm:h-11 md:h-auto" />
              {errors.name && <p className="text-[#e47a5a] text-xs sm:text-sm font-semibold">{errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[#117f60] text-xs sm:text-sm md:text-base text-center md:text-left">{t('email')}</label>
              <Input {...register('email')} placeholder={t('email')} className="px-3 py-2 sm:p-3 md:p-4 lg:p-6 text-sm sm:text-base border border-[#0f1415] placeholder:italic placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base text-[#117f60] h-10 sm:h-11 md:h-auto" />
              {errors.email && <p className="text-[#e47a5a] text-xs sm:text-sm font-semibold">{errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[#117f60] text-xs sm:text-sm md:text-base text-center md:text-left">{t('password')}</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t('password')}
                  {...register('password')}
                  className="px-3 py-2 sm:p-3 md:p-4 lg:p-6 text-sm sm:text-base text-[#117f60] border border-[#0f1415] placeholder:italic placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base h-10 sm:h-11 md:h-auto"
                  onFocus={() => setShowPasswordRequirements(true)}
                  onBlur={() => {
                    // Keep requirements visible if password is not valid
                    if (isPasswordValid) {
                      setShowPasswordRequirements(false);
                    }
                  }}
                />
                <div
                  className={`absolute ${
                    isArabic ? 'left-2 sm:left-3' : 'right-2 sm:right-3'
                  } top-2 sm:top-2.5 md:top-3.5 cursor-pointer text-[#e47a5a]`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} className="sm:w-5 sm:h-5" /> : <Eye size={18} className="sm:w-5 sm:h-5" />}
                </div>
              </div>

              {/* Password Requirements Component */}
              <PasswordRequirements
                password={watch('password') || ''}
                isVisible={showPasswordRequirements}
                onValidationChange={setIsPasswordValid}
              />

              {errors.password && <p className="text-[#e47a5a] text-xs sm:text-sm font-semibold">{errors.password.message}</p>}
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-[#117f60] text-xs sm:text-sm md:text-base text-center md:text-left">{t('repeatPassword')}</label>
              <div className="relative">
                <Input
                  type={showConfirm ? 'text' : 'password'}
                  placeholder={t('repeatPassword')}
                  {...register('confirmPassword')}
                  className="px-3 py-2 sm:p-3 md:p-4 lg:p-6 text-sm sm:text-base text-[#117f60] border border-[#0f1415] placeholder:italic placeholder:text-xs sm:placeholder:text-sm md:placeholder:text-base h-10 sm:h-11 md:h-auto"
                />
                <div
                  className={`absolute ${
                    isArabic ? 'left-2 sm:left-3' : 'right-2 sm:right-3'
                  } top-2 sm:top-2.5 md:top-3.5 cursor-pointer text-[#e47a5a]`}
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff size={18} className="sm:w-5 sm:h-5" /> : <Eye size={18} className="sm:w-5 sm:h-5" />}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-[#e47a5a] text-xs sm:text-sm font-semibold">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Two-Factor Authentication Switch (Mandatory) */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex items-center justify-between p-2.5 sm:p-3 md:p-4 bg-[#117f60] bg-opacity-10 border border-[#117f60] rounded-md">
                <div className="flex-1 pr-2">
                  <label htmlFor="enable2FA" className="text-[#117f60] font-medium cursor-pointer text-xs sm:text-sm md:text-base">
                    Enable Two-Factor Authentication (Required)
                  </label>
                  <p className="text-[10px] sm:text-xs text-[#117f60] opacity-80 mt-0.5 sm:mt-1">
                    Protect your account with an extra layer of security
                  </p>
                </div>
                <Switch
                  id="enable2FA"
                  checked={is2FAEnabled}
                  onCheckedChange={(checked) => {
                    setIs2FAEnabled(checked);
                    setValue('enable2FA', checked);
                  }}
                  className="data-[state=checked]:bg-[#e47a5a] shrink-0"
                />
              </div>
              {errors.enable2FA && (
                <p className="text-[#e47a5a] text-xs sm:text-sm font-semibold">{errors.enable2FA.message}</p>
              )}
            </div>

            {/* <div className="flex flex-col gap-2">
            <div className="w-full flex justify-center">
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token: string | null) => {
                  setRecaptchaToken(token);
                  setRecaptchaError(null);
                }}
                onExpired={() => setRecaptchaToken(null)}
              />
            </div>
            {recaptchaError && <span className="text-red-500 text-xs">{recaptchaError}</span>}
          </div> */}

            {/* Terms and Conditions Checkbox */}
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="relative flex items-center mt-0.5">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    {...register('acceptTerms')}
                    className="sr-only"
                    onChange={(e) => {
                      setIsTermsAccepted(e.target.checked);
                      setValue('acceptTerms', e.target.checked);
                    }}
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="flex items-center cursor-pointer"
                  >
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 rounded-sm flex items-center justify-center transition-all duration-200 hover:border-[#117f60] ${
                      isTermsAccepted 
                        ? 'bg-[#e47a5a] border-[#e47a5a]' 
                        : 'bg-transparent border-[#117f60]'
                    }`}>
                      <svg
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-white transition-opacity duration-200 ${
                          isTermsAccepted ? 'opacity-100' : 'opacity-0'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </label>
                </div>
                <div className="flex-1 text-[10px] sm:text-xs md:text-sm text-[#DAE6EA] leading-relaxed">
                  <span className="text-[#117f60]">{t('terms.accept')}</span>{' '}
                  <Link
                    href={`/${isArabic ? 'ar' : 'en'}/terms-and-conditions`}
                    className="text-[#e47a5a] underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('terms.terms_link')}
                  </Link>{' '}
                  <span className="text-[#117f60]">{t('terms.and')}</span>{' '}
                  <Link
                    href={`/${isArabic ? 'ar' : 'en'}/privacy-policy`}
                    className="text-[#e47a5a] underline transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('terms.privacy_link')}
                  </Link>
                  . <span className="text-[#117f60]" >{t('terms.disclaimer')}</span>
                </div>
              </div>
              {errors.acceptTerms && (
                <p className="text-red-400 text-xs sm:text-sm ml-6 sm:ml-8">{errors.acceptTerms.message}</p>
              )}
            </div>

            <Button
              className="w-full bg-[#e47a5a] hover:bg-[#e47a5a] transition-all duration-200 px-4 py-2 sm:p-4 md:p-6 cursor-pointer h-10 sm:h-11 md:h-auto text-sm sm:text-base"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                  <span className="text-xs sm:text-sm md:text-base">{t('signingUp') || 'Creating Account...'}</span>
                </div>
              ) : (
                <span className="text-xs sm:text-sm md:text-base">{t('button') || 'Create Account'}</span>
              )}
            </Button>

            <p className="text-center text-xs sm:text-sm text-[#117f60]">
              {t('haveAccount') || 'Already have an account?'}{' '}
              <Link href={`/${isArabic ? 'ar' : 'en'}/login`} className="text-[#e47a5a] underline">
                {t('login') || 'Sign in'}
              </Link>
            </p>

          </form>
        </motion.div>
      )}

      {/* 2FA Setup Modal */}
      <TwoFASignupModal
        isOpen={show2FAModal}
        onClose={() => setShow2FAModal(false)}
        onSuccess={handle2FASuccess}
        email={watch('email') || ''}
        name={watch('name') || ''}
      />
    </div>;
};

export default SignupForm;
