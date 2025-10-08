// src/lib/notifications.ts
export type NotificationType =
  | "system"
  | "market"
  | "compliance"
  | "announcements"
  | "security";

export type NotificationItem = {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
  };
  type: NotificationType;
  description: string;
  createdAt: string; // ISO string
};

const names = [
  "Brian Cumin",
  "Marianne Floyd",
  "Valerie Nelson",
  "Ben Castro",
  "Nadia Henry",
  "Gayle Homes",
  "Sylvia Hoffman",
  "Camille Sullivan",
  "Khaled A.",
  "Maya Noor",
  "Faisal Rahman",
  "Lea Hart",
  "Omar N.",
  "Grace L.",
  "Yara Khalil",
  "Hend Saad",
  "Lucas Weber",
  "Noah Brown",
  "Sara M.",
  "Dina K."
];

const actions: NotificationType[] = [
  "system",
  "market",
  "compliance",
  "announcements",
  "security",
];

const lorem =
  "Platform maintenance scheduled for tonight. Expected downtime: 2 hours. All trading pairs will be temporarily unavailable.";

const now = Date.now();
const daysAgo = (d: number) => new Date(now - d * 24 * 60 * 60 * 1000).toISOString();

/** Create 20 demo notifications */
export const notificationsSeed: NotificationItem[] = Array.from({ length: 20 }).map(
  (_, i) => {
    const n = names[i % names.length];
    const t = actions[i % actions.length];
    const avatar = `https://i.pravatar.cc/150?img=${(i % 70) + 1}`;
    const when = daysAgo((i % 9) + 1);

    const actionText: Record<NotificationType, string> = {
      system: "System maintenance notification",
      market: "Market update - BTC/USDT",
      compliance: "Compliance verification required",
      announcements: "New feature announcement",
      security: "Security alert - Login from new device",
    };

    return {
      id: `ntf-${i + 1}`,
      user: { name: "DHS Platform", avatarUrl: avatar },
      type: t,
      description: actionText[t],
      createdAt: when,
    };
  }
);
