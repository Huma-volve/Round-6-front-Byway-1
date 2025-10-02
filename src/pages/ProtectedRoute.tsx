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
<<<<<<< HEAD
  const token = localStorage.getItem("token");

  // return !token ? <Navigate to="/get-start" replace /> : children;
  return children;
=======

  // const token = localStorage.getItem("token");

  // return !token ? <Navigate to="/get-start" replace /> : children;
  return children;
  // مش هنعمل أي تحقق هنا
  return children;

>>>>>>> 80af8b5c068493414dc6d6741bdb38bb7c69de8c
}

export default ProtectedRoute;
