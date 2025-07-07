import { LocationProvider } from "@/context/LocationContext";

export async function Providers({ children }: { children: React.ReactNode }) {
  return <LocationProvider serverLocation={null}>{children}</LocationProvider>;
}
