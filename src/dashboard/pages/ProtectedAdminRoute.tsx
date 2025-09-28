import type { ReactNode } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  //! CHECK IF ROLE IS ADMIN

  const token = localStorage.getItem("token");

  return children;
}

export default ProtectedRoute;
