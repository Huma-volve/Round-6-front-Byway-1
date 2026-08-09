import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import noNotifications from "@/assets/images/no-notifications.png";
import type { INotification } from "@/types";
import NotificationCard from "./components/NotificationCard";
import { useEffect, useState } from "react";
import { handleGetNotifications } from "@/api/notifications/notification";
import { Loader } from "@/components/common/Loader";
import React from "react";

const links = [
  { href: "/", label: "Browse Course" },
  { href: "/notifications", label: "Notifications" },
];

export default function Notifications() {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState<INotification[]>([]);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const notifications = await handleGetNotifications();
      setNotifications(notifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };
  console.log(notifications);

  useEffect(() => {
    fetchNotifications();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh)]">
        <Loader size="xxxl" />
      </div>
    );
  }

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <Link
                  to={link.href}
                  className={
                    index === links.length - 1 ? "text-primary-600" : ""
                  }
                >
                  {link.label}
                </Link>
              </BreadcrumbItem>
              {index < links.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {notifications.length > 0 ? (
        <div className="flex flex-col items-center justify-center mt-4">
          {notifications.map((notification: INotification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] text-center">
            <img src={noNotifications} alt="No Notifications" />
            <h1 className="text-lg md:text-2xl font-bold my-2">
              You are all up to date
            </h1>
            <p className="text-md md:text-lg text-gray-400 font-medium">
              No new notifications - come back soon
            </p>
          </div>
        </>
      )}
    </>
  );
}
