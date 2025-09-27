import type { INotification } from "@/types";

type NotificationCardProps = {
  notification: INotification;
};

function formatTime(created_at: string) {
  const createdDate = new Date(created_at);
  const now = new Date();
  const diffMs = now.getTime() - createdDate.getTime();
  const diffMinutes = Math.floor(diffMs / 1000 / 60);

  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60)
    return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
}

export default function NotificationCard({
  notification,
}: NotificationCardProps) {
  return (
    <div
      className={`flex items-center justify-between my-4 ${
        notification.read_at === null && "bg-gray-50"
      } w-full p-4 pb-10 border rounded-md`}
    >
      <p
        className={`${
          notification.read_at === null && "text-primary-main"
        } font-semibold`}
      >
        {notification.details.message}
      </p>
      <p className="text-gray-400 font-medium">
        {formatTime(notification.created_at)}
      </p>
    </div>
  );
}
