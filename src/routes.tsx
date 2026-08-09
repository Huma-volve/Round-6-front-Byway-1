import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
  Profile,
  Courses,
  Error,
  Home,
  NotFound,
  ProtectedRoute,
} from "./pages";
import AddCourse from "./pages/Instractor/addCourse/AddCourse";
import CourseDetails from "./pages/Instractor/CourseDetails/CourseDetails";
import Login from "./pages/Instractor/auth/Login";
import Register from "./pages/Instractor/auth/Register";
import ForgetPassword from "./pages/Instractor/auth/ForgetPassword";
import ResetCode from "./pages/Instractor/auth/ResetCode";
import NewPassword from "./pages/Instractor/auth/NewPassword";
import InstractorHome from "./pages/Instractor/InstractorHome/InstractorHome";
import Reports from "./pages/Instractor/Reports/Reports";
import LayoutInstractor from "./pages/Instractor/LayoutInstractor/LayoutInstractor";
import WithdrawAmount from "./pages/Instractor/Revenue/pages/WithdrawAmount";
import Payout from "./pages/Instractor/Revenue/pages/Payout";
import Revenue from "./pages/Instractor/Revenue/pages/Revenue";
import InstructorNotifications from "./pages/Instractor/Notifications/InstructorNotifications";
import Reviews from "./pages/Instractor/MyReviews/Reviews";

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
   
    ],
  },
  {
    path: "/instructor",
    element: <LayoutInstractor />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <InstractorHome />,
      },
      {
        path: "addcourse",
        element: <AddCourse />,
      },
      {
        path: "coursedetails",
        element: <CourseDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "resetcode",
        element: <ResetCode />,
      },
      {
        path: "newpassword",
        element: <NewPassword />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "notifications",
        element: <InstructorNotifications />,
      },
      {
        path: "revenue",
        element: <Revenue />,
      },
      {
        path: "payout",

        element: <Payout />,
      },
      {
        path: "payout/withdraw",

        element: <WithdrawAmount />,
      },
    ],
  },
]);
