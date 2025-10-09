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
      className="min-h-[calc(100vh-64px)] w-full bg-[var(--color-blue-whale)] px-3 py-4 sm:px-4 sm:py-5 md:px-6 md:py-6"
    >
      <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-[0.3fr_0.7fr] xl:grid-cols-[0.25fr_0.75fr]">
        {/* Left column */}
        <LeftProfileCard user={mockUser} />

        {/* Right column */}
        <Card className="border-0 bg-[var(--color-blue)]/40 p-0 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur rounded-xl sm:rounded-2xl">
          <Tabs defaultValue="profile" className="w-full">
            <div className="sticky flex sm:justify-start justify-center top-0 z-10 rounded-t-xl sm:rounded-t-2xl bg-[var(--color-blue)]/40 p-2.5 sm:p-3 md:p-4 backdrop-blur-sm">
              <TabsList className="grid h-auto grid-cols-2 gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-transparent p-0 md:grid-cols-4">
                <TabsTrigger value="profile" className="tab-chip text-xs sm:text-sm">
                  <span className="hidden sm:inline">Profile</span>
                  <span className="sm:hidden">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="password" className="tab-chip text-xs sm:text-sm">
                  <span className="hidden sm:inline">Change Password</span>
                  <span className="sm:hidden">Password</span>
                </TabsTrigger>
                <TabsTrigger value="twofactor" className="tab-chip text-xs sm:text-sm">
                  <span className="hidden sm:inline">Two-factor</span>
                  <span className="sm:hidden">2FA</span>
                </TabsTrigger>
                <TabsTrigger value="logins" className="tab-chip text-xs sm:text-sm">
                  <span className="hidden md:inline">Login Device History</span>
                  <span className="md:hidden">Devices</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="p-3 sm:p-4 md:p-5 lg:p-6">
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
