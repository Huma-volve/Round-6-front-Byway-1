import type { ReactNode } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("token");

  // return !token ? <Navigate to="/get-start" replace /> : children;
  return children;
}

export default ProtectedRoute;
