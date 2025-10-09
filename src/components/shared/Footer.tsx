import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { footerMenuColumns } from "@/data/menuColumns";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const isArabic = locale === "ar";
  
  return (
    <footer className="bg-gradient-to-br border-t border-white/10 from-slate-900 via-blue-900 to-slate-800 w-full relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div className="relative z-10 xl:max-w-[85%] px-4 xl:px-0 mx-auto">
        {/* Top Section: Logo, Newsletter & Social */}
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Logo Section */}
            <div className="w-full md:items-start items-center flex flex-col gap-2">
              <div className="relative w-32 mb-6">
                <Image
                  src="/images/dhs_logo_transparent_bg.png"
                  alt="DHS Logo"
                  width={128}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-white/80 text-sm leading-relaxed text-center lg:text-left max-w-xs">
                Direct, Honest, Safe cryptocurrency exchange based in Dubai.
              </p>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
              <div className="w-full max-w-md">
                <h3 className="text-white font-bold text-xl mb-3 text-center lg:text-left font-roboto">
                  {t("join_newsletter")}
                </h3>
                <p className="text-white/70 text-sm mb-6 text-center lg:text-left leading-relaxed">
                  {t("newsletter_desc")}
                </p>
                <form className="space-y-3">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-elf-green focus:bg-white/15 transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-elf-green to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-elf-green/90 hover:to-green-500/90 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-elf-green/25"
                  >
                    {t("subscribe")}
                  </button>
                </form>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-end">
              <h3 className="text-white font-bold text-lg mb-4 text-center lg:text-right font-roboto">
                Follow Us
              </h3>
              <div className="flex justify-center lg:justify-end">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Menu Columns Section */}
        <div className="pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6">
            {footerMenuColumns.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-white font-bold text-base mb-4 font-roboto relative">
                  <span className="relative z-10">{t(col.title)}</span>
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-elf-green rounded-full"></div>
                </h4>
                <ul className="space-y-3">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <Link 
                        href={item.link} 
                        className="text-white/70 text-sm font-roboto hover:text-elf-green block py-1 hover:translate-x-1 transform transition-all duration-200"
                      >
                        {t(item.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <span className="text-white/60 text-sm">{t("copyright")}</span>
              <div className="hidden md:block w-px h-4 bg-white/20"></div>
              <div className="flex items-center gap-4 text-sm text-white/60">
                <span>Licensed in Dubai</span>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <span>Regulated Exchange</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
