import { Outlet } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

function DashboardLayout() {
    return (
        <>
            <SidebarProvider>
                <DashboardSidebar />
                <main className="flex-1 p-4 min-h-screen overflow-hidden bg-[#ebebeb]">
                    <SidebarTrigger className="w-12 h-12" />
                    <Outlet />
                </main>
            </SidebarProvider>
        </>
    );
}

export default DashboardLayout;
