import mongoose from 'mongoose';

const DeviceSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true,
      index: true 
    },
    deviceId: { 
      type: String, 
      required: true,
      index: true 
    },
    label: { 
      type: String, 
      required: true,
      trim: true 
    },
    userAgent: { 
      type: String, 
      required: true 
    },
    ipAddress: { 
      type: String, 
      required: true,
      index: true 
    },
    location: { 
      type: String, 
      default: 'Unknown' 
    },
    active: { 
      type: Boolean, 
      default: true,
      index: true 
    },
    lastSeen: { 
      type: Date, 
      default: Date.now,
      index: true 
    },
    firstSeen: { 
      type: Date, 
      default: Date.now 
    },
    sessionToken: { 
      type: String, 
      required: false // Will be set if device has active session
    },
    isCurrentDevice: { 
      type: Boolean, 
      default: false 
    }
  },
  { 
    timestamps: true 
  }
);

// Compound indexes for efficient queries
DeviceSchema.index({ userId: 1, active: 1 });
DeviceSchema.index({ userId: 1, lastSeen: -1 });
DeviceSchema.index({ deviceId: 1, userId: 1 }, { unique: true });

export const Device = mongoose.models?.Device || mongoose.model('Device', DeviceSchema);

