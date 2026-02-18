import { Navigate } from "react-router-dom";
import RoleBasedRedirect from "./RoleBasedRedirect";

interface Props {
  children: React.ReactNode;
  allowedRole: string;
}

const RoleProtectedRoute = ({ children, allowedRole }: Props) => {

  const token = localStorage.getItem("accessToken");

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== allowedRole) {
    // If role doesn't match, send them to their correct dashboard
    return <RoleBasedRedirect />;
  }

  return children;
};

export default RoleProtectedRoute;
