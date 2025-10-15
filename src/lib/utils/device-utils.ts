import { headers } from 'next/headers';

export interface DeviceInfo {
  deviceId: string;
  label: string;
  userAgent: string;
  ipAddress: string;
  location: string;
}

export function generateDeviceId(userAgent: string, ipAddress: string): string {
  // Generate a consistent device identifier based on user agent and IP
  // This ensures the same device gets the same ID
  const deviceString = `${userAgent}_${ipAddress}`;
  
  // Simple hash function to create a consistent ID
  let hash = 0;
  for (let i = 0; i < deviceString.length; i++) {
    const char = deviceString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return `device_${Math.abs(hash).toString(36)}`;
}

export function parseUserAgent(userAgent: string): string {
  // Parse user agent to get device name
  if (userAgent.includes('iPhone')) {
    return 'iPhone';
  } else if (userAgent.includes('iPad')) {
    return 'iPad';
  } else if (userAgent.includes('Android')) {
    if (userAgent.includes('Mobile')) {
      return 'Android Phone';
    } else {
      return 'Android Tablet';
    }
  } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) {
    if (userAgent.includes('Intel')) {
      return 'MacBook';
    } else {
      return 'Mac';
    }
  } else if (userAgent.includes('Windows')) {
    if (userAgent.includes('Touch')) {
      return 'Windows Tablet';
    } else {
      return 'Windows PC';
    }
  } else if (userAgent.includes('Linux')) {
    return 'Linux PC';
  } else if (userAgent.includes('Chrome')) {
    return 'Chrome Browser';
  } else if (userAgent.includes('Firefox')) {
    return 'Firefox Browser';
  } else if (userAgent.includes('Safari')) {
    return 'Safari Browser';
  } else if (userAgent.includes('Edge')) {
    return 'Edge Browser';
  }
  
  return 'Unknown Device';
}

export async function getDeviceInfo(): Promise<DeviceInfo> {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const forwardedFor = headersList.get('x-forwarded-for');
  const realIp = headersList.get('x-real-ip');
  const cfConnectingIp = headersList.get('cf-connecting-ip');
  
  // Get IP address with fallbacks
  const ipAddress = cfConnectingIp || realIp || forwardedFor?.split(',')[0] || 'Unknown';
  
  // Parse user agent to get device label
  const label = parseUserAgent(userAgent);
  
  // Generate consistent device ID based on user agent and IP
  const deviceId = generateDeviceId(userAgent, ipAddress);
  
  // Get location from IP address
  const location = await getLocationFromIP(ipAddress.trim());

  return {
    deviceId,
    label,
    userAgent,
    ipAddress: ipAddress.trim(),
    location
  };
}

export async function getLocationFromIP(ipAddress: string): Promise<string> {
  // For local/private IPs, try to get location from browser timezone or default
  if (!ipAddress || ipAddress === 'Unknown' || ipAddress.startsWith('127.') || ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.')) {
    // Try to infer location from timezone (rough estimate)
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone) {
        // Extract country/city from timezone (e.g., "America/New_York" -> "New York, USA")
        const parts = timezone.split('/');
        if (parts.length >= 2) {
          const city = parts[parts.length - 1].replace(/_/g, ' ');
          return city;
        }
      }
    } catch (e) {
      // Ignore timezone errors
    }
    return 'Local Network';
  }

  try {
    // Try multiple geolocation services for better reliability
    
    // Service 1: ipapi.co (more reliable, 1000 req/day free)
    try {
      const response1 = await fetch(`https://ipapi.co/${ipAddress}/json/`, {
        signal: AbortSignal.timeout(3000), // 3 second timeout
        cache: 'force-cache',
        next: { revalidate: 3600 }
      });
      
      if (response1.ok) {
        const data = await response1.json();
        if (data.country_name) {
          return data.city ? `${data.city}, ${data.country_name}` : data.country_name;
        }
      }
    } catch (e1) {
      console.log('ipapi.co failed, trying fallback...');
    }
    
    // Service 2: ip-api.com (fallback, 45 req/min free)
    const response2 = await fetch(`http://ip-api.com/json/${ipAddress}?fields=country,city`, {
      signal: AbortSignal.timeout(3000),
      cache: 'force-cache',
      next: { revalidate: 3600 }
    });
    
    if (response2.ok) {
      const data = await response2.json();
      if (data.country) {
        return data.city ? `${data.city}, ${data.country}` : data.country;
      }
    }
  } catch (error) {
    console.error('IP geolocation error:', error);
  }
  
  // If all services fail, return IP-based location indicator
  return `IP: ${ipAddress}`;
}

