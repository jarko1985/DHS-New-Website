import RoadMap from "@/components/how-to/RoadMap";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("howTo");

  const items = [
    { label: "1", title: t("step1_title"), text: t("step1_text") },
    { label: "2", title: t("step2_title"), text: t("step2_text") },
    { label: "3", title: t("step3_title"), text: t("step3_text") },
    { label: "4", title: t("step4_title"), text: t("step4_text") },
    { label: "5", title: t("step5_title"), text: t("step5_text") },
    { label: "6", title: t("step6_title"), text: t("step6_text") },
    { label: "7", title: t("step7_title"), text: t("step7_text") },
  ];

  return (
    <div className="bg-blue-whale">
      <div className="px-4 md:px-6 xl:max-w-[70%] mx-auto pt-10 md:pt-14">
        {/* Page Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            {t("title")}
          </h1>
          <div className="mt-3 md:mt-4">
            <span className="inline-block bg-gradient-to-r from-[#b22f26] via-[#e47a5a] to-[#b22f26] bg-clip-text text-transparent text-base md:text-lg font-semibold">
              {t("tagline")}
            </span>
          </div>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-5 flex justify-center">
            <span className="h-1 w-24 rounded-full bg-gradient-to-r from-[#117f60] to-[#e47a5a]" />
          </div>
        </div>
      </div>
      <RoadMap items={items} />
    </div>
  );
}