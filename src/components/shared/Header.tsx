"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { footerMenuColumns } from "@/data/menuColumns";
import LanguageSwitcher from "./LanguageSwitcher";
import CurrencySwitcher from "./CurrencySwitcher";
import UserAvatar from "./UserAvatar";
import { useLocale, useTranslations } from "next-intl";

const navLinks = [{ name: "home", href: "/" }];

interface MegaMenuItem {
  id: string;
  title: string;
  href: string;
  image?: string;
}

interface MegaMenuSection {
  id: string;
  title: string;
  defaultImage: string;
  items: MegaMenuItem[];
}

const megaMenuSections: MegaMenuSection[] = [
  {
    id: "resources",
    title: "Resources",
    defaultImage: "/images/trading_preview.png",
    items: [
      {
        id: "risk_disclosure",
        title: "Risk Disclosure",
        href: "/risk-disclosure",
        image: "/images/menu-icons/risk_disclosure.png",
      },
      {
        id: "privacy",
        title: "Privacy Policy",
        href: "/privacy-policy",
        image: "/images/menu-icons/privacy.png",
      },
      {
        id: "terms",
        title: "Terms & Conditions",
        href: "/terms-and-conditions",
        image: "/images/menu-icons/terms.png",
      },
      {
        id: "conflict",
        title: "Conflict of Interest Policy",
        href: "/conflict-of-interest",
      },
      {
        id: "whistle",
        title: "Whistleblowing Policy",
        href: "/whistleblowing-policy",
        image: "/images/menu-icons/whistle.png",
      },
      {
        id: "complaint",
        title: "Complaints Handling Policy",
        href: "/complaint-policy",
        image: "/images/menu-icons/complaint.png",
      },
      {
        id: "aml",
        title: "AML/CTF Policy",
        href: "/ctf-policy",
        image: "/images/menu-icons/aml.png",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    defaultImage: "/images/trading_preview.png",
    items: [
      {
        id: "contact",
        title: "Contact",
        href: "/contact",
      },
      {
        id: "faq",
        title: "FAQ",
        href: "/faq",
      },
      {
        id: "support_tickets",
        title: "Support Tickets",
        href: "/support-tickets",
      },
      {
        id: "newsletter",
        title: "Newsletter / Blog",
        href: "/newsletter",
      },
    ],
  },
];

export default function Header() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenuId, setActiveMegaMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Header");
  const tFooter = useTranslations("Footer");
  const locale = useLocale();
  const isArabic = locale === "ar";

  // State for each mega menu section
  const [megaMenuStates, setMegaMenuStates] = useState<
    Record<string, { currentPreviewSrc: string; hoveredItemId: string | null }>
  >(
    megaMenuSections.reduce((acc, section) => {
      acc[section.id] = {
        currentPreviewSrc: section.defaultImage,
        hoveredItemId: null,
      };
      return acc;
    }, {} as Record<string, { currentPreviewSrc: string; hoveredItemId: string | null }>)
  );

  // Refs for each mega menu
  const megaMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const megaTriggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Helper to split items into columns
  const splitIntoColumns = (items: MegaMenuItem[]) => {
    const mid = Math.ceil(items.length / 2);
    return {
      firstColumn: items.slice(0, mid),
      secondColumn: items.slice(mid),
    };
  };

  const handleMenuItemHover = (sectionId: string, item: MegaMenuItem) => {
    setMegaMenuStates((prev) => ({
      ...prev,
      [sectionId]: {
        hoveredItemId: item.id,
        currentPreviewSrc: item.image || prev[sectionId].currentPreviewSrc,
      },
    }));
  };

  const handleMenuLeave = (sectionId: string) => {
    setMegaMenuStates((prev) => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        hoveredItemId: null,
      },
    }));
  };

  // Touch gesture handling
  useEffect(() => {
    let initialPoint: Touch | null = null;
    let finalPoint: Touch | null = null;

    const handleTouchStart = (event: TouchEvent) => {
      initialPoint = event.changedTouches[0];
    };

    const handleTouchEnd = (event: TouchEvent) => {
      finalPoint = event.changedTouches[0];

      if (initialPoint && finalPoint) {
        const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
        const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

        if (xAbs > 120 || yAbs > 120) {
          // 120 - SWIPE WIDTH
          if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
              // SWIPE LEFT - Close menu
              setIsMenuOpen(false);
            } else {
              // SWIPE RIGHT - Open menu
              setIsMenuOpen(true);
            }
          }
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Click handling
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;

      // Check if click is on trigger button
      if (triggerRef.current && triggerRef.current.contains(target)) {
        setIsMenuOpen((prev) => !prev);
        return;
      }

      // Check if click is outside menu and trigger
      if (
        isMenuOpen &&
        !menuRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClick);
    }

    return () => document.removeEventListener("click", handleClick);
  }, [isMenuOpen]);

  // Close mega menu on outside click or Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (activeMegaMenuId) {
        const megaRef = megaMenuRefs.current[activeMegaMenuId];
        const triggerRef = megaTriggerRefs.current[activeMegaMenuId];
        if (
          megaRef &&
          !megaRef.contains(target) &&
          triggerRef &&
          !triggerRef.contains(target)
        ) {
          setActiveMegaMenuId(null);
        }
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMegaMenuId(null);
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [activeMegaMenuId]);

  // Smooth scroll function
  const smoothScrollTo = (element: Element) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="bg-blue-whale">
        <div className="relative xl:max-w-[70%] mx-auto flex items-center justify-between px-4 xl:px-0 py-2 z-40">
          {/* Logo */}
          <Link
            href="/"
            className="relative md:min-w-[150px] md:h-[100px] min-w-[100px] h-[50px]"
          >
            <Image
              src="/images/dhs_logo_transparent_bg.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="relative flex items-center gap-8 text-white font-roboto text-base">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-elf-green"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}

              {/* Dynamic Mega Menus */}
              {megaMenuSections.map((section) => {
                const { firstColumn, secondColumn } = splitIntoColumns(
                  section.items
                );
                const isActive = activeMegaMenuId === section.id;
                const currentState = megaMenuStates[section.id];

                return (
                  <li
                    key={section.id}
                    onMouseEnter={() => setActiveMegaMenuId(section.id)}
                    onMouseLeave={() => setActiveMegaMenuId(null)}
                  >
                    <button
                      ref={(el) => {
                        megaTriggerRefs.current[section.id] = el;
                      }}
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isActive}
                      className="transition-colors duration-200 hover:text-elf-green"
                      onClick={() =>
                        setActiveMegaMenuId(isActive ? null : section.id)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveMegaMenuId(isActive ? null : section.id);
                        }
                      }}
                    >
                      {section.title}
                    </button>

                    {/* Panel */}
                    <div
                      ref={(el) => {
                        megaMenuRefs.current[section.id] = el;
                      }}
                      className={`absolute left-1/2 top-full z-40 w-[min(900px,95vw)] -translate-x-1/2 pt-3 ${
                        isActive ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                    >
                      <div
                        className={`rounded-xl border border-white/10 bg-[#1b232e] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur transition-all duration-200 ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-1"
                        }`}
                        role="menu"
                        aria-label={`${section.title} Mega Menu`}
                      >
                        <div className="grid grid-cols-12 gap-6">
                          {/* Left visual */}
                          <div className="col-span-12 md:col-span-4">
                            <div className="relative h-40 w-full overflow-hidden rounded-lg md:h-full">
                              <Image
                                src={currentState.currentPreviewSrc}
                                alt={`${section.title} visual`}
                                fill
                                className="object-contain transition-opacity duration-200"
                                sizes="(min-width: 768px) 33vw, 100vw"
                                priority={false}
                              />
                            </div>
                          </div>

                          {/* Columns */}
                          <div
                            className="col-span-12 grid grid-cols-1 gap-6 md:col-span-8 md:grid-cols-2 border-l border-white/10 pl-5"
                            onMouseLeave={() => handleMenuLeave(section.id)}
                          >
                            {/* First Column */}
                            <div className="border-white/10 md:pr-6">
                              <ul className="space-y-6 text-[14px] text-white/90">
                                {firstColumn.map((item) => (
                                  <li
                                    key={item.id}
                                    className="group"
                                    onMouseEnter={() =>
                                      handleMenuItemHover(section.id, item)
                                    }
                                  >
                                    <Link
                                      href={item.href}
                                      className="block rounded-md px-1 transition"
                                    >
                                      <span className="group-hover:text-[#e47a5a] group-hover:font-semibold transition-all duration-300">
                                        {item.title}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Second Column */}
                            <div className="border-white/10 md:pr-6">
                              <ul className="space-y-6 text-[14px] text-white/90">
                                {secondColumn.map((item) => (
                                  <li
                                    key={item.id}
                                    className="group"
                                    onMouseEnter={() =>
                                      handleMenuItemHover(section.id, item)
                                    }
                                  >
                                    <Link
                                      href={item.href}
                                      className="block rounded-md px-1 transition"
                                    >
                                      <span className="group-hover:text-[#e47a5a] group-hover:font-semibold transition-all duration-300">
                                        {item.title}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Avatar + Currency Switcher + Language Switcher + Mobile Menu Button */}
          <div className="hidden md:flex items-center gap-3">
            <UserAvatar />
            <CurrencySwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Mobile Menu Trigger - Always Visible */}
      <div
        ref={triggerRef}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={`absolute cursor-pointer z-[50] w-12 h-12 rounded-full top-2 ${
          isArabic ? "left-4" : "right-4"
        } bg-[#e47a5a] flex justify-center items-center hover:scale-110 transition-transform duration-200 md:hidden group`}
      >
        {/* middle line */}
        <span className="block w-1/2 h-0.5 bg-white relative">
          {/* top line */}
          <span className="absolute left-0 w-full h-0.5 bg-white top-[-7px] origin-left transition-all duration-300 group-hover:w-1/2 group-hover:top-[0px] group-hover:rotate-[-35deg]" />
          {/* bottom line */}
          <span className="absolute left-0 w-full h-0.5 bg-white top-[7px] origin-left transition-all duration-300 group-hover:w-1/2 group-hover:top-[0px] group-hover:rotate-[35deg]" />
        </span>
      </div>

      {/* Mobile Menu */}
      <nav
        ref={menuRef}
        className={`fixed top-0 w-[100%] ${
          isArabic ? "left-0" : "right-0"
        } h-full z-[45] bg-[#0b132b] flex flex-col gap-2 p-4 transform transition-transform duration-300 md:hidden ${
          isMenuOpen
            ? "translate-x-0 shadow-2xl"
            : isArabic
            ? "-translate-x-full"
            : "translate-x-full"
        }`}
      >
        {/* Logo and Auth CTA */}
        <div className="pt-16 pb-3 w-full flex flex-col items-center">
          <div className="flex flex-row justify-center items-center gap-8">
            <div className="relative w-40 h-20 mb-3">
              <Image
                src="/images/dhs_logo.png"
                alt="DHS Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-white text-2xl font-bold">
              Direct Honest Safe
            </h1>
          </div>
          <div className="flex gap-2 w-full px-1">
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="flex-1 text-center rounded-full bg-elf-green text-white py-2 font-semibold hover:bg-elf-green/90 transition-colors"
            >
              {tFooter("signup")}
            </Link>
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="flex-1 text-center rounded-full border border-white/30 text-white py-2 font-semibold hover:border-white hover:bg-white/10 transition-colors"
            >
              {tFooter("signin")}
            </Link>
          </div>
        </div>

        <div className="w-full overflow-y-auto">
          <Accordion type="single" collapsible className="w-full">
            {footerMenuColumns.map((col, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border-b border-white/10"
              >
                <AccordionTrigger className="text-white font-roboto text-base hover:text-elf-green transition-colors">
                  {tFooter(col.title)}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 pl-2">
                    {col.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.link}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition hover:translate-x-1"
                        >
                          {tFooter(item.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed w-full h-full z-[40] top-0 left-0 bg-black/50 transition-all duration-300 md:hidden" />
      )}
    </>
  );
}
