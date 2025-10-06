'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ChangePasswordTab() {
  const [show, setShow] = React.useState({
    current: false,
    next: false,
    confirm: false,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="settings-section"
    >
      {/* Header Section */}
      <div className="space-y-2 mb-8">
        <h3 className="text-lg font-semibold text-white">Change Password</h3>
        <p className="form-description">Update your password to keep your account secure. Use a strong password with at least 8 characters.</p>
      </div>

      {/* Current Password */}
      <div className="form-field relative">
        <Label className="form-label">Current Password</Label>
        <Input 
          type={show.current ? 'text' : 'password'} 
          placeholder="Enter your current password"
          className="form-input pr-12 placeholder:text-white" 
        />
        <button
          type="button"
          onClick={() => setShow((s) => ({ ...s, current: !s.current }))}
          className="absolute right-3 top-[42px] grid h-8 w-8 place-items-center rounded-md text-[var(--color-mercury)]/70 hover:bg-white/5 hover:text-white transition-colors"
          aria-label="Toggle current password visibility"
        >
          {show.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>

      {/* New Password Fields */}
      <div className="settings-grid">
        <div className="form-field relative">
          <Label className="form-label">New Password</Label>
          <Input 
            type={show.next ? 'text' : 'password'} 
            placeholder="Enter your new password"
            className="form-input pr-12 placeholder:text-white" 
          />
          <button
            type="button"
            onClick={() => setShow((s) => ({ ...s, next: !s.next }))}
            className="absolute right-3 top-[42px] grid h-8 w-8 place-items-center rounded-md text-[var(--color-mercury)]/70 hover:bg-white/5 hover:text-white transition-colors"
            aria-label="Toggle new password visibility"
          >
            {show.next ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          <p className="form-description">Must be at least 8 characters long</p>
        </div>

        <div className="form-field relative">
          <Label className="form-label">Confirm New Password</Label>
          <Input 
            type={show.confirm ? 'text' : 'password'} 
            placeholder="Confirm your new password"
            className="form-input pr-12 placeholder:text-white" 
          />
          <button
            type="button"
            onClick={() => setShow((s) => ({ ...s, confirm: !s.confirm }))}
            className="absolute right-3 top-[42px] grid h-8 w-8 place-items-center rounded-md text-[var(--color-mercury)]/70 hover:bg-white/5 hover:text-white transition-colors"
            aria-label="Toggle confirm password visibility"
          >
            {show.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          <p className="form-description">Must match your new password</p>
        </div>
      </div>

      {/* Password Requirements */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h4 className="text-sm font-medium text-white mb-3">Password Requirements:</h4>
        <ul className="space-y-2 text-sm text-[var(--color-mercury)]/80">
          <li className="flex items-center gap-2 text-white">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-elf-green)]"></div>
            At least 8 characters long
          </li>
          <li className="flex items-center gap-2 text-white">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-elf-green)]"></div>
            Contains uppercase and lowercase letters
          </li>
          <li className="flex items-center gap-2 text-white">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-elf-green)]"></div>
            Contains at least one number
          </li>
          <li className="flex items-center gap-2 text-white">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-elf-green)]"></div>
            Contains at least one special character
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row pt-6 border-t border-white/10">
        <Button className="btn-primary">
          Update Password
        </Button>
        <Button 
          type="button"
          variant="secondary"
          className="btn-secondary"
        >
          Cancel
        </Button>
      </div>
    </motion.div>
  );
}
