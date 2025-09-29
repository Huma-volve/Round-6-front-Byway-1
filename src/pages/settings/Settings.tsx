import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "/", label: "Browse Course" },
  { href: "/settings", label: "settings" },
];

export default function Settings() {
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

      <div className="md:p-10 p-5">
        <Link
          to="/payment-methods"
          className="flex justify-between items-center md:w-1/2 text-xl"
        >
          Payment Methods
          <ChevronRight />
        </Link>
      </div>
    </>
  );
}
