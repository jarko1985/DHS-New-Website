// src/lib/notifications.ts
export type NotificationType =
  | "commented"
  | "posted"
  | "liked"
  | "mentioned"
  | "followed"
  | "added";

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
  "commented",
  "posted",
  "liked",
  "mentioned",
  "followed",
  "added",
];

const lorem =
  "Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, lectus in blandit sagittis, mi tortor ullamcorper mi.";

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
      commented: "commented on your post",
      posted: "posted a new update",
      liked: "liked your post",
      mentioned: "mentioned you",
      followed: "started following you",
      added: "added you to a list",
    };

    return {
      id: `ntf-${i + 1}`,
      user: { name: n, avatarUrl: avatar },
      type: t,
      description: lorem,
      createdAt: when,
    };
  }
);
