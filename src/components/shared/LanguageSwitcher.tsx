"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { Globe } from "lucide-react";
import clsx from "clsx";

const languages = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params?.locale || "en";

  const handleSwitch = (lang: string) => {
    if (lang === currentLocale) return;
    router.push(pathname, { locale: lang });
  };

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-2 shadow-md border border-white/20">
      <Globe className="w-5 h-5 text-elf-green mr-1" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSwitch(lang.code)}
          className={clsx(
            "px-2 py-1 rounded-full font-bold text-xs transition-all duration-200 focus:outline-none cursor-pointer",
            lang.code === currentLocale
              ? "bg-[#e47a5a] text-white shadow"
              : "text-elf-green hover:bg-elf-green/20"
          )}
          aria-current={lang.code === currentLocale ? "true" : undefined}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
