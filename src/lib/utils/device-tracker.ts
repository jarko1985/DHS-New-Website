import { Device } from '@/lib/models/Device';
import { User } from '@/lib/models/User';
import { getDeviceInfo, DeviceInfo } from './device-utils';

export interface DeviceTrackingResult {
  deviceId: string;
  isNewDevice: boolean;
  isCurrentDevice: boolean;
}

export async function trackDeviceSession(
  userEmail: string,
  sessionToken?: string
): Promise<DeviceTrackingResult> {
  try {
    // Dynamically import mongoose
    const mongoose = (await import('mongoose')).default;
    
    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    // Get device info
    const deviceInfo = await getDeviceInfo();
    
    // Find user by email
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      throw new Error('User not found');
    }

    // Check if device already exists
    let device = await Device.findOne({
      userId: user._id,
      deviceId: deviceInfo.deviceId
    });

    const isNewDevice = !device;

    if (isNewDevice) {
      // Create new device record
      device = new Device({
        userId: user._id,
        deviceId: deviceInfo.deviceId,
        label: deviceInfo.label,
        userAgent: deviceInfo.userAgent,
        ipAddress: deviceInfo.ipAddress,
        location: deviceInfo.location,
        active: true,
        lastSeen: new Date(),
        firstSeen: new Date(),
        sessionToken: sessionToken || null,
        isCurrentDevice: true
      });
      
      await device.save();
    } else {
      // Update existing device
      device.lastSeen = new Date();
      device.active = true;
      device.sessionToken = sessionToken || device.sessionToken;
      device.isCurrentDevice = true;
      
      // Update device info if it has changed
      if (device.ipAddress !== deviceInfo.ipAddress) {
        device.ipAddress = deviceInfo.ipAddress;
      }
      if (device.userAgent !== deviceInfo.userAgent) {
        device.userAgent = deviceInfo.userAgent;
        device.label = deviceInfo.label;
      }
      
      await device.save();
    }

    // Mark all other devices as not current device
    await Device.updateMany(
      {
        userId: user._id,
        _id: { $ne: device._id }
      },
      {
        isCurrentDevice: false
      }
    );

    return {
      deviceId: device.deviceId,
      isNewDevice,
      isCurrentDevice: true
    };

  } catch (error) {
    console.error('Device tracking error:', error);
    throw error;
  }
}

// Note: updateDeviceLastSeen removed - device tracking happens only on login
// to prevent duplicate entries and MongoDB connection issues

