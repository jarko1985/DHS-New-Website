import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const locale = useLocale();

  const t = useTranslations("homepage");
  return (
    <section className="relative flex flex-col xl:max-w-[70%] mx-auto md:flex-row items-center justify-between min-h-[85vh] bg-blue-whale w-full overflow-hidden">
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
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 md:mb-12 mt-12 md:mt-0 mx-auto md:mx-0 w-[80%] md:w-auto">
          <button className="px-6 py-2 md:text-lg text-xs bg-transparent border border-white text-white rounded-md font-semibold hover:bg-elf-green hover:border-elf-green transition-colors duration-200">
            Button
          </button>
          <button className="px-6 py-2 bg-elf-green text-white md:text-lg text-xs rounded-md font-semibold hover:bg-elf-green/80 transition-colors duration-200">
            Another Button
          </button>
        </div>
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
