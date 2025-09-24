import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Error, Home, NotFound, ProtectedRoute } from "./pages";

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
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/sign-up",
                element: <Home />,
            },
            {
                path: "/log-in",
                element: <Home />,
            },
        ],
    },
]);
