import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  CloseAccount,
  Error,
  Home,
  NotFound,
  Notifications,
  ProtectedRoute,
  Settings,
  PaymentMethods,
  Payment,
  PaymentHistory,
} from "./pages";

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
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/close-account",
        element: <CloseAccount />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/payment-methods",
        element: <PaymentMethods />,
      },
      {
        path: "/payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);
