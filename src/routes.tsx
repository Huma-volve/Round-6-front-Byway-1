import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashboardLayout from "./dashboard/layout/DashboardLayout";
import { Error, Home, NotFound, ProtectedRoute } from "./pages";
import {
    Dashboard,
    UserManagement,
    CourseManagement,
    PaymentsRevenue,
    PlatformSettings,
    Reviews,
    Reports,
    DashboardError,
    ProtectedAdminRoute,


} from "./dashboard/pages";
export const router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        element: (
            <ProtectedAdminRoute>
                <DashboardLayout />
            </ProtectedAdminRoute>
        ),
        errorElement: <DashboardError />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/user-management",
                element: <UserManagement />,
            },
            {
                path: "/course-management",
                element: <CourseManagement />,
            },
            {
                path: "/payments-revenue",
                element: <PaymentsRevenue />,
            },
            {
                path: "/platform-settings",
                element: <PlatformSettings />,
            },
            {
                path: "/reviews",
                element: <Reviews />,
            },
            {
                path: "/reports",
                element: <Reports />,
            },
        ],
    },
]);
