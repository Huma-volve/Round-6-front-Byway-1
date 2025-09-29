import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

import SignIn from "./pages/auth/components/sign-in";
import SignUp from "./pages/auth/components/sign-up";
import VerifyEmail from "./pages/auth/components/verifyEmail";
import ForgetPassword from "./pages/auth/components/forgetPassword";
import CreateNewPassword from "./pages/auth/components/createNewPassword";
import Profile from "./pages/profile/Profile";
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
  Courses,
  CourseDetails,
  InstructorDetails,
} from "./pages";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart";
import MyCoursesPage from "./pages/mycourses/MyCoursesPage";
import CourseDetailPage from "./pages/mycourses/CourseDetailsPage";
import LessonVideoPage from "./pages/mycourses/LessonVidoePage";
import FavouritePage from "./pages/favouritepage/FavouritePage";

export const router = createBrowserRouter([
  { path: "*", element: <NotFound /> },

  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/log-in",
    element: <SignIn />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/create-new-password",
    element: <CreateNewPassword />,
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
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:courseId",
        element: <CourseDetails />,
      },
      {
        path: "/instructors/:instructorId",
        element: <InstructorDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/my-courses",
        element: <MyCoursesPage />,
      },
      {
        path: "/my-courses/:id",
        element: <CourseDetailPage />,
      },
      {
        path: "/my-courses/:id/lesson/:lessonId",
        element: <LessonVideoPage />,
      },
      {
        path: "/favourites",
        element: <FavouritePage />,
      },
    ],
  },
]);
