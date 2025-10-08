'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import type { UserProfile } from '@/types/settings';

type Props = { user: UserProfile };

export default function LeftProfileCard({ user }: Props) {
  const initials = user.fullName
    .split(' ')
    .map((p) => p[0])
    .slice(0, 2)
    .join('');

  const IconLink = ({
    href,
    children,
    label,
  }: {
    href?: string;
    children: React.ReactNode;
    label: string;
  }) =>
    href ? (
      <Link
        href={href}
        aria-label={label}
        className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[var(--color-mercury)] transition hover:-translate-y-0.5 hover:border-[var(--color-elf-green)] hover:bg-[var(--color-elf-green)] hover:text-white"
      >
        {children}
      </Link>
    ) : null;

  return (
    <motion.aside
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="sticky top-4 border-0 bg-[var(--color-blue)]/40 p-6 text-[var(--color-mercury)] shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur overflow-hidden">
        {/* DHS Visual Elements - Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Soft gradient lines */}
          <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />
          <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#39FF14]/10 to-transparent" />
          
          {/* Orange circles */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FFA500]/5 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[#39FF14]/5 blur-3xl" />
        </div>

        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="relative">
            <Avatar className="h-28 w-28 ring-2 ring-white/10 transition hover:ring-[var(--color-elf-green)]">
              <AvatarImage src={user.avatarUrl} alt={user.fullName} />
              <AvatarFallback className="bg-[var(--color-blue)] text-xl">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-white">{user.fullName}</h2>
            <p className="mt-0.5 text-sm text-[var(--color-mercury)]/70">
              {user.bio}
            </p>
          </div>

          {user.about && (
            <>
              <div className="h-px w-full bg-white/10" />
              <p className="text-xs leading-relaxed text-[var(--color-mercury)]/80">
                {user.about}
              </p>
            </>
          )}

          <div className="h-px w-full bg-white/10" />
          <div className="flex items-center gap-3">
            <IconLink href={user.socials.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </IconLink>
            <IconLink href={user.socials.twitter} label="Twitter">
              <Twitter className="h-4 w-4" />
            </IconLink>
            <IconLink href={user.socials.instagram} label="Instagram">
              <Instagram className="h-4 w-4" />
            </IconLink>
            <IconLink href={user.socials.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </IconLink>
          </div>

          {/* Trust and Transparency Section */}
          <div className="h-px w-full bg-[#39FF14]/20" />
          <div className="rounded-lg bg-[#39FF14]/5 border border-[#39FF14]/10 p-4 text-center">
            <p className="text-xs leading-relaxed text-[var(--color-mercury)]/90">
              🔒 Your personal information is encrypted and securely stored in compliance with{' '}
              <span className="font-semibold text-[#39FF14]">VARA</span> and{' '}
              <span className="font-semibold text-[#39FF14]">AML</span> standards.
            </p>
          </div>
        </div>
      </Card>
    </motion.aside>
  );
}

/* Note:
 * If you prefer ReactBits equivalents (already installed in your project),
 * you can replace Avatar/Card here with their ReactBits counterparts.
 */
