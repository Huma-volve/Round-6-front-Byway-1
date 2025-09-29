// import type { ReactNode } from "react";
// import { Navigate } from "react-router";

// type ProtectedRouteProps = {
//     children: ReactNode;
// };

// function ProtectedRoute({ children }: ProtectedRouteProps) {
//     const token = localStorage.getItem("token");

//     return !token ? <Navigate to="/get-start" replace /> : children;
// }

// export default ProtectedRoute;
import type { ReactNode } from "react";

type ProtectedRouteProps = {
    children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
    // مش هنعمل أي تحقق هنا
    return children;
}

export default ProtectedRoute;
