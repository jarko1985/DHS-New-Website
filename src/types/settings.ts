export type SocialLinks = {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  
  export type DepositStatus = 'enabled' | 'disabled';
  
  export type UserProfile = {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    country: string;
    zipCode: string;
    joiningDate: string; // ISO yyyy-mm-dd
    bio: string;
    about?: string;
    avatarUrl?: string;
    socials: SocialLinks;
    depositAssets: DepositStatus;
    depositTags: { promotions: boolean; exchange: boolean; withdrawals: boolean };
    description: string;
  };
  
  export type DeviceLog = {
    id: string;
    when: string; // e.g., "Dec 2, 1:30pm"
    device: string; // e.g., "iMac Pro"
    location: string; // e.g., "United States"
    ip: string;
    active: boolean;
  };
  