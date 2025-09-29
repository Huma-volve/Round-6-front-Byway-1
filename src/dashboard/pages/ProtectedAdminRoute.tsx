import type { ReactNode } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  //! CHECK IF ROLE IS ADMIN

  const token =
    localStorage.getItem("token") ||
    "33|3MiA8Oajszy5lhMtI0S2hq1fQJJxvNvbngBaCeSX9cd2c61d";

  return !token ? <Navigate to="/get-start" replace /> : children;
}

export default ProtectedRoute;
