"use client";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import TextType from "../custom/TextType";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const t = useTranslations("homepage.herosection");
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error(t("subscribe_error_empty"));
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(t("subscribe_error_invalid"));
      return;
    }
    toast.success(t("subscribe_success"));
    setEmail("");
  };
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section className="relative flex flex-col xl:max-w-[70%] px-4 xl:px-0 mx-auto md:flex-row items-center justify-between min-h-[85vh] bg-blue-whale w-full overflow-hidden">
      <div
        data-aos="fade-right"
        className="md:flex-1 flex flex-col md:justify-center md:items-start z-10 mt-6 md:mt-0"
      >
        <h1
          className={`${
            locale === "ar" ? "leading-[55px]" : ""
          } text-2xl md:text-5xl font-bold text-white mb-4 font-roboto ${
            locale === "ar" ? "md:text-right" : "md:text-left"
          }  text-center`}
        >
          {t("title1_1")}
        </h1>
        
        <TextType
          className="text-2xl font-semibold p-0 m-0 text-center md:text-left -ml-2 mb-4"
          text={t("title1_3")}
          typingSpeed={200}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={true}
          textColors={["#e47a5a"]}
          deletingSpeed={100}
          cursorClassName="text-[#e47a5a]"
        />
        <div
          className={`text-white/80 text-normal mb-8 font-roboto text-center ${
            isArabic ? "md:text-right" : "md:text-left"
          } max-w-md`}
        >
          <p>{t("crypto_with_clarity")}</p>
          <p>{t("dhs_safe_honest")}</p>
        </div>
        <form
          className="flex sm:flex-row flex-col gap-4 justify-center md:justify-start mx-auto sm:mx-0 w-[90%] sm:w-full "
          onSubmit={handleSubscribe}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={t("email_placeholder")}
            className="rounded-full px-4 py-2 bg-transparent border border-white/50 text-white placeholder-white/60 focus:outline-none focus:border-elf-green min-w-0"
          />
          <button
            type="submit"
            className="text-white ramp-shine-bg px-6 py-2 rounded-full font-semibold transition-colors duration-200"
          >
            {t("subscribe")}
          </button>
        </form>
      </div>
      {/* Right: Blended Image */}
      <div
        data-aos="fade-left"
        className="md:flex-[2] relative md:h-[650px] sm:h-[500px] h-[350px] w-full md:block"
      >
        <Image
          src="/images/home_bg.png"
          alt="Hero Background"
          fill
          className="object-contain mix-blend-lighten opacity-90 md:h-[650px]! h-auto!"
          priority
        />
      </div>
      {/* Scroll indicator (centered at bottom) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <svg
          width="32"
          height="48"
          viewBox="0 0 32 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="8"
            y="8"
            width="16"
            height="32"
            rx="8"
            stroke="#fff"
            strokeWidth="2"
          />
          <circle
            cx="16"
            cy="20"
            r="3"
            fill="#fff"
            className="animate-bounce-dot"
          />
        </svg>
      </div>
    </section>
  );
}
