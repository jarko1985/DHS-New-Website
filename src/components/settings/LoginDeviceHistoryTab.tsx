'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { DeviceLog } from '@/types/settings';

function genDummy(): DeviceLog[] {
  const base: Omit<DeviceLog, 'id'>[] = [
    { when: 'Dec 2, 1:30pm', device: 'iMac Pro', location: 'United States', ip: '179.122.37.231', active: true },
    { when: 'Dec 2, 1:14pm', device: 'Mobile', location: 'United States', ip: '36.30.196.15', active: false },
    { when: 'Dec 2, 1:12pm', device: 'iMac Pro', location: 'United States', ip: '214.27109.20', active: true },
    { when: 'Dec 2, 1:00pm', device: 'Tablet', location: 'United States', ip: '104.134.29.3', active: false },
    { when: 'Dec 2, 12:22pm', device: 'Laptop', location: 'United States', ip: '179.122.37.31', active: false },
    { when: 'Dec 2, 1:16pm', device: 'Desktop', location: 'United States', ip: '115.543.33.171', active: true },
    { when: 'Dec 2, 1:10pm', device: 'iPhone X', location: 'United States', ip: '179.122.37.231', active: false },
  ];
  // repeat to 20 entries with light variations
  const list: DeviceLog[] = [];
  for (let i = 0; i < 20; i++) {
    const t = base[i % base.length];
    list.push({
      id: `d_${i}`,
      when: t.when,
      device: t.device,
      location: t.location,
      ip: t.ip,
      active: (i % 3) === 0 ? true : t.active,
    });
  }
  return list;
}

const rows = genDummy();

export default function LoginDeviceHistoryTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="settings-section"
    >
      {/* Header Section */}
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold text-white">Login Device History</h3>
        <p className="form-description">Monitor all devices that have accessed your account. If you notice any suspicious activity, contact support immediately.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[var(--color-elf-green)]/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-[var(--color-elf-green)]"></div>
            </div>
            <div>
              <p className="text-sm text-white">Active Devices</p>
              <p className="text-lg font-semibold text-white">{rows.filter(r => r.active).length}</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#e47a5a]/20 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-[#e47a5a]"></div>
            </div>
            <div>
              <p className="text-sm text-white">Inactive Devices</p>
              <p className="text-lg font-semibold text-white">{rows.filter(r => !r.active).length}</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white text-sm font-bold">T</span>
            </div>
            <div>
              <p className="text-sm text-white">Total Logins</p>
              <p className="text-lg font-semibold text-white">{rows.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Device History Table */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <Table>
          <TableHeader className="bg-[var(--color-blue)]/60">
            <TableRow className="hover:bg-transparent border-b border-white/10">
              <TableHead className="text-[var(--color-mercury)] font-medium py-4">Date/Time</TableHead>
              <TableHead className="text-[var(--color-mercury)] font-medium py-4">Device</TableHead>
              <TableHead className="text-[var(--color-mercury)] font-medium py-4">Location</TableHead>
              <TableHead className="text-[var(--color-mercury)] font-medium py-4">IP Address</TableHead>
              <TableHead className="text-[var(--color-mercury)] font-medium py-4">Status</TableHead>
              <TableHead className="text-[var(--color-mercury)] font-medium py-4 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r, idx) => (
              <TableRow
                key={r.id}
                className="bg-transparent hover:bg-white/[0.03] data-[state=selected]:bg-white/[0.03] border-b border-white/5"
              >
                <TableCell className="text-[var(--color-mercury)] py-4">
                  <div className="text-sm font-medium">{r.when}</div>
                </TableCell>
                <TableCell className="text-[var(--color-mercury)] py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">
                        {r.device.charAt(0)}
                      </span>
                    </div>
                    <span className="font-medium">{r.device}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[var(--color-mercury)] py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-[var(--color-elf-green)]/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[var(--color-elf-green)]"></div>
                    </div>
                    <span>{r.location}</span>
                  </div>
                </TableCell>
                <TableCell className="text-[var(--color-mercury)] py-4">
                  <code className="bg-white/5 px-2 py-1 rounded text-xs">{r.ip}</code>
                </TableCell>
                <TableCell className="py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
                      r.active
                        ? 'bg-[var(--color-elf-green)]/15 text-[var(--color-elf-green)] border border-[var(--color-elf-green)]/20'
                        : 'bg-[#e47a5a]/15 text-[#e47a5a] border border-[#e47a5a]/20'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        r.active ? 'bg-[var(--color-elf-green)]' : 'bg-[#e47a5a]'
                      }`}
                    />
                    {r.active ? 'Active' : 'Inactive'}
                  </span>
                </TableCell>
                <TableCell className="py-4 text-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="btn-outline text-xs px-3 py-1"
                  >
                    {r.active ? 'Logout' : 'Remove'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row pt-6 border-t border-white/10">
        <Button className="btn-primary">
          Refresh Device List
        </Button>
        <Button 
          type="button"
          variant="secondary"
          className="btn-secondary"
        >
          Logout All Devices
        </Button>
      </div>
    </motion.div>
  );
}
