import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const menuColumns = [
  {
    title: "resources",
    items: [
      { label: "conflict_of_interest", link: "/conflict-of-interest" },
      { label: "privacy_policy", link: "/privacy-policy" },
      { label: "risk_disclosure", link: "/risk-disclosure" },
      { label: "terms_and_conditions", link: "/terms-and-conditions" },
      { label: "whistleblowing_policy", link: "/whistleblowing-policy" },
    ],
  },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <footer className="bg-blue-whale w-full pt-8 pb-2">
      <div className="xl:max-w-[70%] px-4 xl:px-0 mx-auto">
        <div className="border-t border-b border-white/20 py-8 flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          {/* Left: Logo and Newsletter */}
          <div className="md:w-3/5 flex flex-col md:gap-4 justify-between">
            <div className="relative min-w-[100px] h-[60px] mx-auto md:mx-0">
              {/* Placeholder logo */}
              <Image
                src="/images/dhs_logo.png"
                alt="Logo"
                width={100}
                height={80}
              />
            </div>
            <div>
              <h3
                className={`text-white font-bold text-lg mb-1 ${
                  isArabic ? "md:text-right" : "md:text-left"
                }  text-center font-roboto`}
              >
                {t("join_newsletter")}
              </h3>
              <p
                className={`text-white/70 text-sm mb-4 ${
                  isArabic ? "md:text-right" : "md:text-left"
                }   text-center font-roboto`}
              >
                {t("newsletter_desc")}
              </p>
              <form className="flex sm:flex-row flex-col gap-2 justify-center md:justify-start mx-auto sm:mx-0 w-[90%] sm:w-full ">
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="rounded-full px-4 py-2 bg-transparent border border-white/50 text-white placeholder-white/60 focus:outline-none focus:border-elf-green min-w-0"
                />
                <button
                  type="submit"
                  className="bg-elf-green text-white px-6 py-2 rounded-full font-semibold hover:bg-elf-green/80 transition-colors duration-200"
                >
                  {t("subscribe")}
                </button>
              </form>
            </div>
          </div>
          <div className="md:w-1/5 gap-8 justify-items-center md:justify-items-start">
            {menuColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold text-base mb-2 font-roboto text-center">
                  {t(col.title)}
                </h4>
                <ul className="space-y-3">
                  {col.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-white/70 text-sm font-roboto space-y-2 text-center"
                    >
                      <Link href={item.link} className="hover:underline">
                        {t(item.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom: Copyright and Policy Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          <span className="text-white/60 text-xs">{t("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
