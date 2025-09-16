"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Header");

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
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

        {/* User Avatar + Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-3">
          <UserAvatar />
          <LanguageSwitcher />

          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle navigation"
            className="rounded-md p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          ref={menuRef}
          className={`absolute right-4 top-full w-56 origin-top overflow-hidden z-40 rounded-lg bg-[#07153b] shadow-xl ring-1 ring-white/10 transition-all duration-300 md:hidden ${
            open
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-white transition-colors hover:bg-[#e47a5a]"
                >
                  {t(link.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
