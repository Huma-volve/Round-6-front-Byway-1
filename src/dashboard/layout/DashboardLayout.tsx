import { Outlet } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";

function DashboardLayout() {
    return (
        <>
            <DashboardSidebar />
            <main className="flex-1 w-full max-w-[1240px] mx-auto p-4 md:py-6 lg:py-10 min-h-screen overflow-hidden">
                <Outlet />
            </main>
        </>
    );
}

export default DashboardLayout;
