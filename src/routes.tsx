import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Error, Home, NotFound, ProtectedRoute } from "./pages";

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
  { path: "reviewdetails", element: <ReviewDetails /> },
  {
    path:'/platform-seetings',
    element:<PlatFormSetting/>
  },
  {
    path: "/payout",
    element: <Payout />,
  },
  {
    path: "/withdraw",
    element: <WithdrawAmount />,
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
    ],
  },
 
]);
