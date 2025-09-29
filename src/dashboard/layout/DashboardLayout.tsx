import { Outlet } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";

function DashboardLayout() {
    return (
        <div className="flex">
            <DashboardSidebar />
            <main className="flex-1 w-full max-w-[1240px] mx-auto min-h-screen overflow-hidden">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayout;
