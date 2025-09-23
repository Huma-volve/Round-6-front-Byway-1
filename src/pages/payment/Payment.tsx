import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import VisaInputs from "./components/VisaInputs";
import { useState } from "react";
import Success from "./components/Success";


const links = [
  { href: "/", label: "Browse Course" },
  { href: "/course-details", label: "details Courses" },
  { href: "/payment", label: "payment" },
];

const methods = [
  {
    id: 1,
    name: "Fawry",
  },
  {
    id: 2,
    name: "E-Wallet",
  },
  {
    id: 3,
    name: "Credit/Debit Card",
  },
];

export default function Payment() {
  const [success, setSuccess] = useState(false);

  if (success) {
    return <Success />;
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

      <div className="md:p-10 p-5 border my-10">
        <h1 className="text-lg md:text-2xl font-semibold">
          Course: <span className="text-primary-600">Graphic Design</span>
        </h1>
        <p className="text-lg md:text-2xl font-semibold my-2">
          Price: <span className="text-primary-main font-semibold">400EGP</span>
        </p>

        <div className="py-10">
          <h1 className="text-lg md:text-2xl font-semibold my-2 text-[#2C3F6A]">
            Choose your payment method:
          </h1>
          {methods.map((method) => (
            <div key={method.id} className="flex items-center gap-4 my-6">
              <div className="">
                <Input type="checkbox" className="w-4 h-4 md:w-8 md:h-8" />
              </div>
              <p className="text-lg md:text-xl">{method.name}</p>
            </div>
          ))}
        </div>
        <VisaInputs onSubmit={() => setSuccess(true)} />
      </div>
    </>
  );
}
