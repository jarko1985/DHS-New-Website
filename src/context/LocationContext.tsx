// context/LocationContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { LocationData } from "@/lib/location";
import { getLocation } from "@/lib/location";

const LocationContext = createContext<LocationData | null>(null);

export function LocationProvider({
  children,
  serverLocation,
}: {
  children: React.ReactNode;
  serverLocation: LocationData | null;
}) {
  const [location, setLocation] = useState<LocationData | null>(serverLocation);

  useEffect(() => {
    // Always fetch fresh location client-side after mount
    getLocation().then((loc) => {
      if (loc) setLocation(loc);
    });
  }, []);

  return (
    <LocationContext.Provider value={location}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocation = () => useContext(LocationContext);
