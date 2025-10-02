import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Error, Home, NotFound, ProtectedRoute } from "./pages";
import AddCourse from "./pages/Instractor/addCourse/AddCourse";
import CourseDetails from "./pages/Instractor/CourseDetails/CourseDetails";
import Login from "./pages/Instractor/auth/Login";
import Register from "./pages/Instractor/auth/Register";
import ForgetPassword from "./pages/Instractor/auth/ForgetPassword";
import ResetCode from "./pages/Instractor/auth/ResetCode";
import NewPassword from "./pages/Instractor/auth/NewPassword";
import InstractorHome from "./pages/Instractor/InstractorHome/InstractorHome";
import Reports from "./pages/Instractor/Reports/Reports";

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
        path: "/addcourse",
        element: <AddCourse />,
      },
      {
        path: "/coursedetails",
        element: <CourseDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/resetcode",
        element: <ResetCode />,
      },
      {
        path: "/newpassword",
        element: <NewPassword />,
      },
      {
        path: "/instructorhome",
        element: <InstractorHome />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
    ],
  },
 
]);
