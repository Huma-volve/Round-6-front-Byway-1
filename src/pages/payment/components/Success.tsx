import success from "../../../assets/images/Successpng.png";
import { Link } from "react-router-dom";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Rocket } from "lucide-react";

const links = [
  { href: "/", label: "Browse Course" },
  { href: "/course-details", label: "details Courses" },
  { href: "/payment", label: "payment" },
];

export default function Success() {
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
      <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] text-center">
        <img
          src={success}
          alt="Success"
          className="w-20 h-20 md:w-60 md:h-60"
        />
        <h1 className="text-lg md:text-2xl font-bold my-2 mt-10">
          You have successfully subscribed to the course: UI/UX Design
        </h1>
        <p className="text-md md:text-lg text-gray-400 font-semibold my-2">
          You Will Receive a confirmation email soon!
        </p>
        <Link to="/my-courses" className="font-semibold">
          <Rocket className="inline" /> Go to My Courses
        </Link>
      </div>
    </>
  );
}
