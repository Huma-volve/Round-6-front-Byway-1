import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Error, Home, NotFound, ProtectedRoute } from "./pages";
import AddCourse from "./pages/Instractor/addCourse/AddCourse";
import CourseDetails from "./pages/Instractor/CourseDetails/CourseDetails";

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
    ],
  },
]);
