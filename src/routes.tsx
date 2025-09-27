import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Error, Home, NotFound, ProtectedRoute } from "./pages";
import SignIn from "./pages/auth/components/sign-in";
import SignUp from "./pages/auth/components/sign-up";
import VerifyEmail from "./pages/auth/components/verifyEmail";
import ForgetPassword from "./pages/auth/components/forgetPassword";
import CreateNewPassword from "./pages/auth/components/createNewPassword";

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
    path: "/log-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
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
]);
