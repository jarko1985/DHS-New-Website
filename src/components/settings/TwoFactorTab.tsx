'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';

export default function TwoFactorTab() {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="settings-section"
    >
      {/* Header Section */}
      <div className="space-y-1.5 sm:space-y-2 mb-6 sm:mb-7 md:mb-8">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">Two-Factor Authentication</h3>
        <p className="form-description text-xs sm:text-sm">Add an extra layer of security to your account with two-factor authentication.</p>
      </div>

      {/* 2FA Status Card */}
      <div className="rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`h-3 w-3 rounded-full ${enabled ? 'bg-[var(--color-elf-green)]' : 'bg-[#e47a5a]'}`}></div>
              <Label className="text-lg font-medium text-white">Two-Factor Authentication</Label>
            </div>
            <p className="text-sm text-white mb-3">
              {enabled 
                ? 'Your account is protected with two-factor authentication. You\'ll need to enter a verification code when signing in.'
                : 'Enable two-factor authentication to add an extra layer of security to your account.'
              }
            </p>
            <div className="flex items-center gap-4">
              <Switch
                checked={enabled}
                onCheckedChange={setEnabled}
                className="data-[state=checked]:bg-[var(--color-elf-green)] data-[state=checked]:border-[var(--color-elf-green)]"
              />
              <span className="text-sm font-medium text-[var(--color-mercury)]">
                {enabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Setup Instructions */}
      {!enabled && (
        <div className="rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
          <h4 className="text-sm sm:text-base font-medium text-white mb-3 sm:mb-4">How to Set Up 2FA:</h4>
          <ol className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[var(--color-mercury)]/80">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--color-elf-green)] text-white text-xs flex items-center justify-center font-medium">1</span>
              <span className='text-white'>Download an authenticator app like Google Authenticator or Authy on your mobile device.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--color-elf-green)] text-white text-xs flex items-center justify-center font-medium">2</span>
              <span className='text-white'>Scan the QR code that will appear when you enable 2FA.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--color-elf-green)] text-white text-xs flex items-center justify-center font-medium">3</span>
              <span className='text-white'>Enter the 6-digit code from your authenticator app to verify setup.</span>
            </li>
          </ol>
        </div>
      )}

      {/* Backup Codes */}
      {enabled && (
        <div className="rounded-lg sm:rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
          <h4 className="text-sm sm:text-base font-medium text-white mb-2.5 sm:mb-3">Backup Codes</h4>
          <p className="text-xs sm:text-sm text-white mb-3 sm:mb-4">
            Save these backup codes in a secure location. You can use them to access your account if you lose your authenticator device.
          </p>
          <Button variant="outline" className="btn-outline text-sm sm:text-base">
            View Backup Codes
          </Button>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-white/10">
        <Button className="btn-primary w-full sm:w-auto text-sm sm:text-base">
          {enabled ? 'Update 2FA Settings' : 'Enable 2FA'}
        </Button>
        <Button 
          type="button"
          variant="secondary"
          className="btn-secondary w-full sm:w-auto text-sm sm:text-base"
        >
          Cancel
        </Button>
      </div>
    </motion.div>
  );
}
