'use client';

import * as React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Input,
} from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import type { UserProfile } from '@/types/settings';

const profileSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(5),
  joiningDate: z.string(), // yyyy-mm-dd
  city: z.string().min(1),
  country: z.string().min(1),
  zipCode: z.string().min(2),
  depositAssets: z.enum(['enabled', 'disabled']),
  description: z.string().optional(),
      depositTags: z.object({
    promotions: z.boolean(),
    exchange: z.boolean(),
    withdrawals: z.boolean(),
  }),
});

type FormValues = z.infer<typeof profileSchema>;

export default function ProfileTab({ user }: { user: UserProfile }) {
  const form = useForm<FormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      joiningDate: user.joiningDate,
      city: user.city,
      country: user.country,
      zipCode: user.zipCode,
      depositAssets: user.depositAssets,
      description: user.description,
      depositTags: {
        promotions: user.depositTags?.promotions ?? false,
        exchange: user.depositTags?.exchange ?? false,
        withdrawals: user.depositTags?.withdrawals ?? false,
      },
    },
    mode: 'onBlur',
  });

  const onSubmit = (values: FormValues) => {
    // TODO: wire up to API
    console.log('Save profile:', values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="settings-section"
    >
      {/* Personal Information Section */}
      <div className="rounded-lg sm:rounded-xl bg-white/[0.02] p-4 sm:p-5 md:p-6 border border-[#39FF14]/10 shadow-sm mb-4 sm:mb-5 md:mb-6">
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Personal Information</h3>
          <p className="form-description text-xs sm:text-sm">Update your personal details and contact information.</p>
        </div>
        <div className="h-px w-full bg-[#39FF14]/20 mb-4 sm:mb-5 md:mb-6" />

      <div className="settings-grid">
        <div className="form-field">
          <Label className="form-label">First Name</Label>
          <Input
            {...form.register('firstName')}
            placeholder="Enter your first name"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <Label className="form-label">Last Name</Label>
          <Input
            {...form.register('lastName')}
            placeholder="Enter your last name"
            className="form-input"
          />
        </div>
      </div>

      <div className="settings-grid">
        <div className="form-field">
          <Label className="form-label">Email Address</Label>
          <Input
            type="email"
            {...form.register('email')}
            placeholder="Enter your email address"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <Label className="form-label">Phone Number</Label>
          <Input
            {...form.register('phone')}
            placeholder="+1 (555) 123-4567"
            className="form-input"
          />
        </div>
      </div>
      </div>

      {/* Location Information Section */}
      <div className="rounded-lg sm:rounded-xl bg-white/[0.02] p-4 sm:p-5 md:p-6 border border-[#39FF14]/10 shadow-sm mb-4 sm:mb-5 md:mb-6">
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Location Information</h3>
          <p className="form-description text-xs sm:text-sm">Your address and location details.</p>
        </div>
        <div className="h-px w-full bg-[#39FF14]/20 mb-4 sm:mb-5 md:mb-6" />

      <div className="settings-grid">
        <div className="form-field">
          <Label className="form-label">City</Label>
          <Input 
            {...form.register('city')} 
            placeholder="Enter your city" 
            className="form-input" 
          />
        </div>

        <div className="form-field">
          <Label className="form-label">Country</Label>
          <Input
            {...form.register('country')}
            placeholder="Enter your country"
            className="form-input"
          />
        </div>
      </div>

      <div className="settings-grid">
        <div className="form-field">
          <Label className="form-label">Zip Code</Label>
          <Input
            {...form.register('zipCode')}
            placeholder="Enter zip code"
            className="form-input"
          />
        </div>

        <div className="form-field">
          <Label className="form-label">Joining Date</Label>
          <Input
            type="date"
            {...form.register('joiningDate')}
            className="form-input"
          />
        </div>
      </div>
      </div>

      {/* Account Settings Section */}
      <div className="rounded-lg sm:rounded-xl bg-white/[0.02] p-4 sm:p-5 md:p-6 border border-[#39FF14]/10 shadow-sm mb-4 sm:mb-5 md:mb-6">
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Account Settings</h3>
          <p className="form-description text-xs sm:text-sm">Manage your account preferences and settings.</p>
        </div>
        <div className="h-px w-full bg-[#39FF14]/20 mb-4 sm:mb-5 md:mb-6" />

      <div className="form-field">
        <Label className="form-label">Deposit Assets</Label>
        <Select
          defaultValue={form.getValues('depositAssets')}
          onValueChange={(v: 'enabled' | 'disabled') => form.setValue('depositAssets', v)}
        >
          <SelectTrigger className="form-input">
            <SelectValue placeholder="Select deposit preference..." />
          </SelectTrigger>
          <SelectContent className="bg-[var(--color-blue)] text-[var(--color-mercury)] border-white/10">
            <SelectItem value="enabled">Enabled</SelectItem>
            <SelectItem value="disabled">Disabled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="form-field">
        <Label className="form-label">Description</Label>
        <Textarea
          {...form.register('description')}
          placeholder="Tell us about yourself..."
          className="form-input min-h-32 resize-none placeholder:text-white"
        />
        <p className="form-description">Optional: Share a brief description about yourself.</p>
      </div>
      </div>

      {/* Notification Preferences Section */}
      <div className="rounded-lg sm:rounded-xl bg-white/[0.02] p-4 sm:p-5 md:p-6 border border-[#39FF14]/10 shadow-sm mb-4 sm:mb-5 md:mb-6">
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Notification Preferences</h3>
          <p className="form-description text-xs sm:text-sm">Choose which notifications you'd like to receive.</p>
        </div>
        <div className="h-px w-full bg-[#39FF14]/20 mb-4 sm:mb-5 md:mb-6" />

      <div className="form-field">
        <div className="flex flex-wrap gap-4 sm:gap-5 md:gap-6 rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6">
          {(['promotions', 'exchange', 'withdrawals'] as const).map((k) => (
            <label key={k} className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group">
              <Checkbox
                checked={form.watch(`depositTags.${k}`)}
                onCheckedChange={(checked) =>
                  form.setValue(`depositTags.${k}`, Boolean(checked))
                }
                className="data-[state=checked]:bg-[var(--color-elf-green)] data-[state=checked]:border-[var(--color-elf-green)] 
                          border-white/20 group-hover:border-[var(--color-elf-green)]/50 transition-colors"
              />
              <span className="capitalize text-xs sm:text-sm text-[var(--color-mercury)] font-medium group-hover:text-white transition-colors">
                {k}
              </span>
            </label>
          ))}
        </div>
        <p className="form-description text-xs sm:text-sm">Select the types of notifications you want to receive via email.</p>
      </div>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-[#39FF14]/20">
        <Button
          onClick={form.handleSubmit(onSubmit)}
          className="btn-primary w-full sm:w-auto text-sm sm:text-base"
        >
          Save & Update Profile
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => form.reset()}
          className="btn-secondary w-full sm:w-auto text-sm sm:text-base"
        >
          Cancel Changes
        </Button>
      </div>
    </motion.div>
  );
}

/** Tailwind shortcuts used here:
 * .form-field { @apply space-y-2; }
 * .form-input  { @apply bg-[var(--color-blue)]/40 border-white/10 text-[var(--color-mercury)]
 *                placeholder:text-[var(--color-mercury)]/40 focus-visible:ring-[var(--color-elf-green)]
 *                focus-visible:ring-2; }
 */
