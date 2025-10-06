export const formatTxDate = (iso: string) => {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(d);
  };
  
  export type DateRangeKey = "this_week" | "this_month" | "all";
  
  const startOfWeek = (date = new Date()) => {
    const d = new Date(date);
    const day = d.getDay(); // 0 Sun..6 Sat
    const diff = (day + 6) % 7; // make Monday start
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - diff);
    return d;
  };
  
  const startOfMonth = (date = new Date()) => {
    const d = new Date(date.getFullYear(), date.getMonth(), 1);
    d.setHours(0, 0, 0, 0);
    return d;
  };
  
  export const inRange = (iso: string, key: DateRangeKey) => {
    if (key === "all") return true;
    const d = new Date(iso);
    const now = new Date();
    if (key === "this_week") {
      return d >= startOfWeek(now);
    }
    if (key === "this_month") {
      return d >= startOfMonth(now);
    }
    return true;
  };

export function timeAgo(iso: string) {
  const sec = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  const mins = Math.floor(sec / 60);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);
  if (days > 0) return `${days} day${days === 1 ? "" : "s"} ago`;
  if (hrs > 0) return `${hrs} hour${hrs === 1 ? "" : "s"} ago`;
  if (mins > 0) return `${mins} min${mins === 1 ? "" : "s"} ago`;
  return "just now";
}

  