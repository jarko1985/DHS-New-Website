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
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function LoginDeviceHistoryTab() {
  const [devices, setDevices] = React.useState<DeviceLog[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [actionLoading, setActionLoading] = React.useState<string | null>(null);
  const router = useRouter();

  // Fetch devices on component mount
  React.useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/devices');
      const data = await response.json();

      if (response.ok && data.success) {
        setDevices(data.devices || []);
      } else {
        toast.error(data.error || 'Failed to fetch devices');
      }
    } catch (error) {
      console.error('Fetch devices error:', error);
      toast.error('Failed to fetch devices');
    } finally {
      setLoading(false);
    }
  };

  const handleDeviceAction = async (deviceId: string, action: 'logout' | 'remove') => {
    try {
      setActionLoading(deviceId);
      
      if (action === 'logout') {
        const response = await fetch('/api/devices/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deviceId })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
          toast.success('Device logged out successfully');
          await fetchDevices(); // Refresh the list
        } else {
          toast.error(data.error || 'Failed to logout device');
        }
      } else if (action === 'remove') {
        const response = await fetch('/api/devices', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ deviceId })
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
          toast.success('Device removed successfully');
          await fetchDevices(); // Refresh the list
        } else {
          toast.error(data.error || 'Failed to remove device');
        }
      }
    } catch (error) {
      console.error('Device action error:', error);
      toast.error('Failed to perform action');
    } finally {
      setActionLoading(null);
    }
  };

  const handleLogoutAllDevices = async () => {
    try {
      setActionLoading('logout-all');
      
      const response = await fetch('/api/devices/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logoutAll: true })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        toast.success('All devices logged out successfully');
        // Redirect to login page
        router.push('/en/login');
      } else {
        toast.error(data.error || 'Failed to logout all devices');
      }
    } catch (error) {
      console.error('Logout all devices error:', error);
      toast.error('Failed to logout all devices');
    } finally {
      setActionLoading(null);
    }
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full"
      >
        <div className="flex flex-col items-center justify-center py-8 sm:py-12">
          <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-[var(--color-elf-green)]" />
          <span className="ml-2 text-white text-sm sm:text-base mt-2">Loading devices...</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full"
    >
      {/* Header Section */}
      <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4 md:mb-5">
        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white">Login Device History</h3>
        <p className="text-white text-[10px] xs:text-xs sm:text-sm leading-relaxed">Monitor all devices that have accessed your account. If you notice any suspicious activity, contact support immediately.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-5">
        <div className="rounded-md sm:rounded-lg lg:rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3 lg:p-4">
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3">
            <div className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 rounded-full bg-[var(--color-elf-green)]/20 flex items-center justify-center shrink-0">
              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 rounded-full bg-[var(--color-elf-green)]"></div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 truncate">Active Devices</p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white">{devices.filter(d => d.active).length}</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-md sm:rounded-lg lg:rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3 lg:p-4">
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3">
            <div className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 rounded-full bg-[#e47a5a]/20 flex items-center justify-center shrink-0">
              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 rounded-full bg-[#e47a5a]"></div>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 truncate">Inactive Devices</p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white">{devices.filter(d => !d.active).length}</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-md sm:rounded-lg lg:rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3 lg:p-4 xs:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3">
            <div className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <span className="text-white text-[10px] sm:text-xs lg:text-sm font-bold">T</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs lg:text-sm text-white/90 truncate">Total Logins</p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white">{devices.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Device History Table */}
      <div className="overflow-hidden rounded-md sm:rounded-lg lg:rounded-xl border border-white/10 bg-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.2)] sm:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <Table className="min-w-[600px]">
              <TableHeader className="bg-[var(--color-blue)]/60">
                <TableRow className="hover:bg-transparent border-b border-white/10">
                  <TableHead className="text-[var(--color-mercury)] font-medium py-2 sm:py-3 lg:py-4 text-[10px] sm:text-xs lg:text-sm px-2 sm:px-4">Date/Time</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-2 sm:py-3 lg:py-4 text-[10px] sm:text-xs lg:text-sm px-2 sm:px-4">Device</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-2 sm:py-3 lg:py-4 text-[10px] sm:text-xs lg:text-sm px-2 sm:px-4 hidden md:table-cell">Location</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-2 sm:py-3 lg:py-4 text-[10px] sm:text-xs lg:text-sm px-2 sm:px-4 hidden lg:table-cell">IP Address</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-2 sm:py-3 lg:py-4 text-[10px] sm:text-xs lg:text-sm px-2 sm:px-4">Status</TableHead>
                  <TableHead className="text-[var(--color-mercury)] font-medium py-2 sm:py-3 lg:py-4 text-[10px] sm:text-xs lg:text-sm px-2 sm:px-4 text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6 sm:py-8">
                      <div className="text-[var(--color-mercury)]">
                        <p className="text-xs sm:text-sm">No devices found</p>
                        <p className="text-[10px] sm:text-xs opacity-70 mt-1">Your device history will appear here after you log in</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  devices.map((device) => (
                    <TableRow
                      key={device.id}
                      className="bg-transparent hover:bg-white/[0.03] data-[state=selected]:bg-white/[0.03] border-b border-white/5"
                    >
                      <TableCell className="text-[var(--color-mercury)] py-2 sm:py-3 lg:py-4 px-2 sm:px-4">
                        <div className="text-[10px] sm:text-xs lg:text-sm font-medium">{device.when}</div>
                        {device.isCurrentDevice && (
                          <div className="text-[8px] sm:text-[10px] text-[var(--color-elf-green)] font-medium mt-0.5">Current</div>
                        )}
                      </TableCell>
                      <TableCell className="text-[var(--color-mercury)] py-2 sm:py-3 lg:py-4 px-2 sm:px-4">
                        <div className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                          <div className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-md sm:rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <span className="text-[10px] sm:text-xs font-bold text-white">
                              {device.device.charAt(0)}
                            </span>
                          </div>
                          <span className="font-medium text-[10px] sm:text-xs lg:text-sm truncate max-w-[80px] sm:max-w-none">{device.device}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-[var(--color-mercury)] py-2 sm:py-3 lg:py-4 px-2 sm:px-4 hidden md:table-cell">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[var(--color-elf-green)]/20 flex items-center justify-center shrink-0">
                            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[var(--color-elf-green)]"></div>
                          </div>
                          <span className="text-[10px] sm:text-xs lg:text-sm truncate">{device.location}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-[var(--color-mercury)] py-2 sm:py-3 lg:py-4 px-2 sm:px-4 hidden lg:table-cell">
                        <code className="bg-white/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">{device.ip}</code>
                      </TableCell>
                      <TableCell className="py-2 sm:py-3 lg:py-4 px-2 sm:px-4">
                        <span
                          className={`inline-flex items-center gap-1 sm:gap-1.5 rounded-full px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 lg:py-1.5 text-[8px] sm:text-[10px] lg:text-xs font-medium whitespace-nowrap ${
                            device.active
                              ? 'bg-[var(--color-elf-green)]/15 text-[var(--color-elf-green)] border border-[var(--color-elf-green)]/20'
                              : 'bg-[#e47a5a]/15 text-[#e47a5a] border border-[#e47a5a]/20'
                          }`}
                        >
                          <span
                            className={`h-1 w-1 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2 rounded-full ${
                              device.active ? 'bg-[var(--color-elf-green)]' : 'bg-[#e47a5a]'
                            }`}
                          />
                          <span className="hidden sm:inline">{device.active ? 'Active' : 'Inactive'}</span>
                        </span>
                      </TableCell>
                      <TableCell className="py-2 sm:py-3 lg:py-4 px-2 sm:px-4 text-center">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="btn-outline text-[8px] sm:text-[10px] lg:text-xs px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 h-6 sm:h-7 lg:h-auto min-w-[50px] sm:min-w-[60px]"
                          onClick={() => handleDeviceAction(device.id, device.active ? 'logout' : 'remove')}
                          disabled={actionLoading === device.id}
                        >
                          {actionLoading === device.id ? (
                            <Loader2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-spin" />
                          ) : (
                            device.active ? 'Logout' : 'Remove'
                          )}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 md:pt-5 lg:pt-6 mt-3 sm:mt-4 md:mt-5 border-t border-white/10">
        <Button 
          className="btn-primary w-full xs:w-auto text-[10px] xs:text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 h-auto"
          onClick={fetchDevices}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin mr-1.5 sm:mr-2" />
              <span>Refreshing...</span>
            </>
          ) : (
            'Refresh Device List'
          )}
        </Button>
        <Button 
          type="button"
          variant="secondary"
          className="btn-secondary w-full xs:w-auto text-[10px] xs:text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 h-auto"
          onClick={handleLogoutAllDevices}
          disabled={actionLoading === 'logout-all'}
        >
          {actionLoading === 'logout-all' ? (
            <>
              <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin mr-1.5 sm:mr-2" />
              <span>Logging out...</span>
            </>
          ) : (
            'Logout All Devices'
          )}
        </Button>
      </div>
    </motion.div>
  );
}
