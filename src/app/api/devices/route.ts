import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { Device } from '@/lib/models/Device';
import mongoose from 'mongoose';
import { Types } from 'mongoose';

export async function GET(request: NextRequest) {
  try {
    // Get the current session
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    // Get user from session (email is the user ID in our system)
    const userEmail = session.user.email;

    // Find user by email to get ObjectId
    const { User } = await import('@/lib/models/User');
    const user = await User.findOne({ email: userEmail });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Get all devices for this user, sorted by lastSeen descending
    const devices = await Device.find({ userId: user._id })
      .sort({ lastSeen: -1 })
      .select('-sessionToken') // Never return session token
      .lean();

    // Transform devices to match frontend format
    const deviceLogs = devices.map((device: any) => ({
      id: device._id.toString(),
      deviceId: device.deviceId,
      when: formatDate(device.lastSeen),
      device: device.label,
      location: device.location,
      ip: device.ipAddress,
      active: device.active,
      lastSeen: device.lastSeen.toISOString(),
      firstSeen: device.firstSeen.toISOString(),
      isCurrentDevice: device.isCurrentDevice
    }));

    return NextResponse.json({ 
      success: true, 
      devices: deviceLogs 
    });

  } catch (error) {
    console.error('Get devices error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Get the current session
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { deviceId } = await request.json();

    if (!deviceId || !Types.ObjectId.isValid(deviceId)) {
      return NextResponse.json({ error: 'Invalid device ID' }, { status: 400 });
    }

    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI!);
    }

    // Find user by email to get ObjectId
    const { User } = await import('@/lib/models/User');
    const user = await User.findOne({ email: session.user.email });
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Find and delete the device (only if it belongs to the current user)
    const device = await Device.findOneAndDelete({ 
      _id: deviceId, 
      userId: user._id 
    });

    if (!device) {
      return NextResponse.json({ error: 'Device not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Device removed successfully' 
    });

  } catch (error) {
    console.error('Delete device error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Helper function to format date
function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  // Less than 1 minute
  if (diff < 60000) {
    return 'Just now';
  }
  
  // Less than 1 hour
  if (diff < 3600000) {
    const minutes = Math.floor(diff / 60000);
    return `${minutes}m ago`;
  }
  
  // Less than 24 hours
  if (diff < 86400000) {
    const hours = Math.floor(diff / 3600000);
    return `${hours}h ago`;
  }
  
  // Less than 7 days
  if (diff < 604800000) {
    const days = Math.floor(diff / 86400000);
    return `${days}d ago`;
  }
  
  // More than 7 days - show actual date
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

