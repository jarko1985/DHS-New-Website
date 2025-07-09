import ContactForm from "@/components/forms/ContactForm";
import Header from "@/components/shared/Header";
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("contactPage");
  return (
    <section className="bg-blue-whale">
      <section className="mx-auto xl:w-[70%] pt-12">
        <h1 className="text-[#e2dedc] lg:text-4xl text-xl text-center pb-4">
          {t("title")}
        </h1>
        <p className="text-[#e2dedc] text-center lg:text-xl text-lg pb-12">
          {t("description")}
        </p>
        <ContactForm />
        <div className="full mt-12 relative h-[600px]">
          <Image
            fill
            src="/images/contact_image.webp"
            alt="Patten Image"
            className="object-contain w-full"
          />
        </div>
      </section>
    </section>
  );
};

export default page;
