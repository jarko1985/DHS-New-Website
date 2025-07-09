import Image from "next/image";
import React from "react";
import CryptoConverter from "../custom/CryptoConverter";
import { useTranslations } from "next-intl";

const CalculatorSection = () => {
  const t = useTranslations("homepage.calculator");
  return (
    <section className="mx-auto xl:max-w-[70%] px-4 xl:px-0">
      <h1
        className="text-[#FFF] md:text-4xl text-lg px-6 text-center mb-6 font-bold"
        data-aos="fade-down"
      >
        {t("calculator_title")}
      </h1>
      <div className="flex flex-col md:flex-row md:items-center justify-around mt-12 gap-6">
        <div className="relative h-[250px] md:h-[390px] md:flex-[1.2] animate-float">
          <Image
            src="/images/crypto_calculator.webp"
            alt="crypto calculator image"
            fill
            objectFit="contain"
            data-aos="fade-right"
          />
        </div>
        <CryptoConverter />
      </div>
    </section>
  );
};

export default CalculatorSection;
