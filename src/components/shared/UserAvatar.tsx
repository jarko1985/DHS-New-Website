"use client";

import { useState, useRef, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { User, LogOut, UserPlus, LogIn, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function UserAvatar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const t = useTranslations("UserAvatar");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut({ 
        callbackUrl: `/${locale}`,
        redirect: true 
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleProfileClick = () => {
    setIsOpen(false);
    router.push(`/${locale}/profile`);
  };

  const handleSignupClick = () => {
    setIsOpen(false);
    router.push(`/${locale}/signup`);
  };

  const handleLoginClick = () => {
    setIsOpen(false);
    router.push(`/${locale}/login`);
  };

  if (status === "loading") {
    return (
      <div className="w-8 h-8 rounded-full bg-mercury/20 animate-pulse flex items-center justify-center">
        <User className="w-5 h-5 text-mercury" />
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 shadow-md border border-white/20 hover:bg-white/20 transition-all duration-200 group"
        aria-label={session ? "User menu" : "Account menu"}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-elf-green to-[#e47a5a] flex items-center justify-center shadow-lg">
          {session?.user?.image ? (
            <img
              src={session.user.image}
              alt="User avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <User className="w-4 h-4 text-white" />
          )}
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-mercury transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2 w-48 bg-blue-whale rounded-lg shadow-xl border border-white/20 overflow-hidden z-50"
          >
            {session ? (
              // Authenticated User Menu
              <>
                {/* User Info */}
                <div className="px-4 py-3 border-b border-white/10">
                  <p className="text-sm font-medium text-white truncate">
                    {session.user?.name || session.user?.email}
                  </p>
                  <p className="text-xs text-mercury truncate">
                    {session.user?.email}
                  </p>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  <button
                    onClick={handleProfileClick}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-mercury hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    <User className="w-4 h-4" />
                    {t("profile")}
                  </button>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-mercury hover:bg-white/10 hover:text-white transition-colors duration-200"
                  >
                    <LogOut className="w-4 h-4" />
                    {t("logout")}
                  </button>
                </div>
              </>
            ) : (
              // Guest User Menu
              <div className="py-2">
                <button
                  onClick={handleSignupClick}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-mercury hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  <UserPlus className="w-4 h-4" />
                  {t("signup")}
                </button>
                
                <button
                  onClick={handleLoginClick}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-mercury hover:bg-white/10 hover:text-white transition-colors duration-200"
                >
                  <LogIn className="w-4 h-4" />
                  {t("login")}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
