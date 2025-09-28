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
import AddCourse from "./pages/Instractor/addCourse/AddCourse";
import CourseDetails from "./pages/Instractor/CourseDetails/CourseDetails";
import Reviews from "./pages/Instractor/MyReviews/Reviews";
import InstructorNotifications from "./pages/Instractor/Notifications/InstructorNotifications";
import Revenue from "./pages/Instractor/Revenue/Revenue";

export const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },
  {
    path: "/sign-up",
    element: <Home />,
  },
  {
    path: "/log-in",
    element: <Home />,
  },
  {
    path: "/addcourse",
    element: <AddCourse />,
  },
  {
    path: "/coursedetails",
    element: <CourseDetails />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/instructor/notifications",
    element: <InstructorNotifications />,
  },
  {
    path: "/revenue",
    element: <Revenue />,
  },
  {
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
