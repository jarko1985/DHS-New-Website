'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import LeftProfileCard from '@/components/settings/LeftProfileCard';
import ProfileTab from '@/components/settings/ProfileTab';
import ChangePasswordTab from '@/components/settings/ChangePasswordTab';
import TwoFactorTab from '@/components/settings/TwoFactorTab';
import LoginDeviceHistoryTab from '@/components/settings/LoginDeviceHistoryTab';
import type { UserProfile } from '@/types/settings';

const mockUser: UserProfile = {
  id: 'u_001',
  fullName: 'Kim Griffith',
  firstName: 'Kim',
  lastName: 'Griffith',
  email: 'kim.griffith@example.com',
  phone: '+1 987 555 0199',
  city: 'Austin',
  country: 'United States',
  zipCode: '73301',
  joiningDate: '2024-12-02',
  bio: 'Amet minim Developer',
  about:
    'Fusce quis tempor augue, congue mollis lorem. Donec et tristique massa, a consectetur risus',
  avatarUrl: '/images/avatar-kim.png', // replace with real path
  socials: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
  },
  depositAssets: 'disabled',
  depositTags: { promotions: false, exchange: false, withdrawals: false },
  description: '',
};

export default function SettingsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-[calc(100vh-64px)] w-full bg-[var(--color-blue-whale)] px-4 py-6 md:px-6"
    >
      <div className="grid gap-6 md:grid-cols-[0.25fr_0.75fr]">
        {/* Left column */}
        <LeftProfileCard user={mockUser} />

        {/* Right column */}
        <Card className="border-0 bg-[var(--color-blue)]/40 p-0 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur">
          <Tabs defaultValue="profile" className="w-full">
            <div className="sticky top-0 z-10 rounded-t-xl bg-[var(--color-blue)]/40 p-3 md:p-4">
              <TabsList className="grid h-auto grid-cols-2 gap-2 rounded-xl bg-transparent p-0 md:grid-cols-4">
                <TabsTrigger value="profile" className="tab-chip">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="password" className="tab-chip">
                  Change Password
                </TabsTrigger>
                <TabsTrigger value="twofactor" className="tab-chip">
                  Two-factor
                </TabsTrigger>
                <TabsTrigger value="logins" className="tab-chip">
                  Login Device History
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-4 md:p-6">
              <TabsContent value="profile">
                <ProfileTab user={mockUser} />
              </TabsContent>

              <TabsContent value="password">
                <ChangePasswordTab />
              </TabsContent>

              <TabsContent value="twofactor">
                <TwoFactorTab />
              </TabsContent>

              <TabsContent value="logins">
                <LoginDeviceHistoryTab />
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>
    </motion.main>
  );
}

/**
 * Tailwind helpers (global, but placing here if you prefer module-level first)
 * Add these classes to your global CSS (optional):
 *
 * .tab-chip {
 *   @apply rounded-lg border border-white/5 bg-[var(--color-blue)]/50 px-3 py-2 text-[var(--color-mercury)]
 *          transition hover:shadow-lg hover:shadow-black/20 data-[state=active]:bg-[var(--color-elf-green)]
 *          data-[state=active]:text-white data-[state=active]:border-[var(--color-elf-green)];
 * }
 */
