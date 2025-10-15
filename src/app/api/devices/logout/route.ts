import { NextRequest, NextResponse } from 'next/server';
import { auth, signOut } from '@/auth';
import { Device } from '@/lib/models/Device';
import mongoose from 'mongoose';
import { Types } from 'mongoose';

export async function POST(request: NextRequest) {
  try {
    // Get the current session
    const session = await auth();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { deviceId, logoutAll } = await request.json();

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

    if (logoutAll) {
      // Logout all devices - mark all as inactive
      await Device.updateMany(
        { userId: user._id },
        { 
          active: false,
          sessionToken: null // Clear session tokens
        }
      );

      // Sign out the current session
      await signOut({ redirect: false });

      return NextResponse.json({ 
        success: true, 
        message: 'All devices logged out successfully' 
      });
    } else {
      // Logout specific device
      if (!deviceId || !Types.ObjectId.isValid(deviceId)) {
        return NextResponse.json({ error: 'Invalid device ID' }, { status: 400 });
      }

      const device = await Device.findOneAndUpdate(
        { 
          _id: deviceId, 
          userId: user._id 
        },
        { 
          active: false,
          sessionToken: null // Clear session token
        }
      );

      if (!device) {
        return NextResponse.json({ error: 'Device not found' }, { status: 404 });
      }

      // If this is the current device, sign out the session
      if (device.isCurrentDevice) {
        await signOut({ redirect: false });
      }

      return NextResponse.json({ 
        success: true, 
        message: 'Device logged out successfully' 
      });
    }

  } catch (error) {
    console.error('Logout device error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

