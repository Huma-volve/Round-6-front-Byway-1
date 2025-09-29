"use client";

import * as React from "react";
import {
  Book,
  CircleDollarSign,
  Gauge,
  Settings,
  ShieldAlert,
  Star,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

// Navigation data structure
const navigationData = [
  {
    title: "Dashboard",
    icon: Gauge,
    url: "/dashboard",
  },
  {
    title: "User Management",
    icon: User,
    url: "/user-management",
  },
  {
    title: "Course Management",
    icon: Book,
    url: "/course-management",
  },
  {
    title: "Payments & Revenue",
    icon: CircleDollarSign,
    url: "/payments-revenue",
  },
  {
    title: "Reviews & Ratings",
    icon: Star,
    url: "/reviews",
  },
  {
    title: "Platform Settings",
    icon: Settings,
    url: "/platform-settings",
  },

  {
    title: "Reports & Analytics",
    icon: ShieldAlert,
    url: "/reports",
  },
];

export default function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [activeTab, setActiveTab] = React.useState("Dashboard");

  return (
    <Sidebar {...props} side="left" className="fixed text-white">
      <SidebarHeader>
        <div className="flex items-center gap-2 m-4 mb-8">
          <img src={logo} alt="" className="w-10 h-10 " />
          <span className="text-xl font-bold">Byway</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Top Level Navigation */}
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-10">
              {navigationData.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`flex gap-2 px-3 ${
                      activeTab === item.title
                        ? "text-primary-600 border-l-2 rounded-none border-primary-600"
                        : ""
                    } hover:text-primary-600 hover:bg-sidebar focus:text-primary-600 focus:bg-sidebar active:text-primary-600 active:bg-sidebar`}
                    onClick={() => setActiveTab(item.title)}
                  >
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon
                        className={`h-4 w-4 text-gray-200 ${
                          activeTab === item.title ? "text-primary-600" : ""
                        }`}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
