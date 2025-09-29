import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import {
    Courses,
    CourseDetails,
    Error,
    Home,
    NotFound,
    ProtectedRoute,
    InstructorDetails,
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
        ],
    },
]);
