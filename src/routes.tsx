import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Error, Home, NotFound, ProtectedRoute } from "./pages";
import ShoppingCart from "./pages/shopping-cart/ShoppingCart";
import MyCoursesPage from "./pages/mycourses/MyCoursesPage";
import CourseDetailPage from "./pages/mycourses/CourseDetailsPage";
import LessonVideoPage from "./pages/mycourses/LessonVidoePage";
import FavouritePage from "./pages/favouritepage/FavouritePage";

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
