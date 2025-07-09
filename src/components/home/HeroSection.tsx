"use client";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const locale = useLocale();

  const t = useTranslations("homepage");
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you!");
    setEmail("");
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
          {t("herosection.title1_1")}
          <span className="text-[#e47a5a]">{t("herosection.title1_3")}</span>
          <span className="inline">{t("herosection.title1_2")}</span>
        </h1>
        <p className="text-white/80 mb-8 font-roboto text-center md:text-left max-w-md">
          What looked like a small patch of purple grass, above five feet
          square, was moving across the sand in their direction.
        </p>
        <form
          className="flex sm:flex-row flex-col gap-4 justify-center md:justify-start mx-auto sm:mx-0 w-[90%] sm:w-full "
          onSubmit={handleSubscribe}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@email.com"
            className="rounded-full px-4 py-2 bg-transparent border border-white/50 text-white placeholder-white/60 focus:outline-none focus:border-elf-green min-w-0"
          />
          <button
            type="submit"
            className="text-white ramp-shine-bg px-6 py-2 rounded-full font-semibold transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
      {/* Right: Blended Image */}
      <div
        data-aos="fade-left"
        className="md:flex-[2] relative md:h-[650px] h-[490px] w-full md:block"
      >
        <Image
          src="/images/home_bg.png"
          alt="Hero Background"
          fill
          className="object-contain mix-blend-lighten opacity-90"
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
