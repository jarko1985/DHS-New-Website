"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { footerMenuColumns } from "@/data/menuColumns";
import LanguageSwitcher from "./LanguageSwitcher";
import UserAvatar from "./UserAvatar";
import { useTranslations } from "next-intl";

const navLinks = [
  { name: "home", href: "/" },
  // { name: "About", href: "/about" },
  // { name: "FAQ", href: "#" },
  { name: "contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Header");
  const tFooter = useTranslations("Footer");

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
        
        if (xAbs > 120 || yAbs > 120) { // 120 - SWIPE WIDTH
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
        setIsMenuOpen(prev => !prev);
        return;
      }
      
      // Check if click is outside menu and trigger
      if (isMenuOpen && !menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClick);
    }
    
    return () => document.removeEventListener("click", handleClick);
  }, [isMenuOpen]);

  // Smooth scroll function
  const smoothScrollTo = (element: Element) => {
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Handle anchor link clicks
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      if (href.length > 1) {
        const scrollToNode = document.querySelector(href);
        if (scrollToNode) {
          smoothScrollTo(scrollToNode);
          setIsMenuOpen(false);
        }
      }
    }
  };

  return (
    <>
      <header className="bg-blue-whale">
        <div className="relative xl:max-w-[70%] mx-auto flex items-center justify-between px-4 xl:px-0 py-4 z-40">
          {/* Logo */}
          <Link
            href="/"
            className="relative md:min-w-[150px] md:h-[60px] min-w-[100px] h-[50px]"
          >
            <Image
              src="/images/dhs_logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex gap-8 text-white font-roboto text-base">
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
            </ul>
          </nav>

          {/* User Avatar + Language Switcher + Mobile Menu Button */}
          <div className="hidden md:flex items-center gap-3">
            <UserAvatar />
            <LanguageSwitcher />
            
            {/* Mobile Menu Button in Header */}
            {/* <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="md:block hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors group"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
              
                <span className="block w-5 h-0.5 bg-white" />
                
                <span className="absolute left-0 w-full h-0.5 bg-white top-[-7px] origin-left transition-all duration-300 group-hover:w-1/2 group-hover:top-[-3px] group-hover:rotate-[-30deg]" />
               
                <span className="absolute left-0 w-full h-0.5 bg-white top-[7px] origin-left transition-all duration-300 group-hover:w-1/2 group-hover:top-[3px] group-hover:rotate-[30deg]" />
              </div>
            </button> */}
          </div>
        </div>
      </header>

      {/* Mobile Menu Trigger - Always Visible */}
      <div 
        ref={triggerRef}
        onClick={() => setIsMenuOpen(prev => !prev)}
        className="fixed cursor-pointer z-[50] w-12 h-12 rounded-full top-5 right-4 bg-[#e47a5a] flex justify-center items-center hover:scale-110 transition-transform duration-200 md:hidden group"
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
        className={`fixed top-0 left-0 w-[100%]  h-full z-[45] bg-[#0b132b] flex flex-col gap-2 p-4 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Logo and Auth CTA */}
        <div className="pt-16 pb-3 w-full flex flex-col items-center">
          <div className="flex flex-row justify-center items-center gap-8">
          <div className="relative w-40 h-20 mb-3">
            <Image src="/images/dhs_logo.png" alt="DHS Logo" fill className="object-contain" />
          </div>
          <h1 className="text-white text-2xl font-bold">Direct Honest Safe</h1>
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
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-white/10">
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
                          className="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 transition-colors hover:translate-x-1 transform transition-transform"
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
        <div 
          className="fixed w-full h-full z-[40] top-0 left-0 bg-black/50 transition-all duration-300 md:hidden"
        />
      )}
    </>
  );
}
