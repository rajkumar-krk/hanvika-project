import { Navigate } from "react-router-dom";

const RoleBasedRedirect = () => {

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user.role === "RECRUITER") {
    return <Navigate to="/recruiter-dashboard" replace />;
  }

  if (user.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  // Default to user dashboard for USER or unknown roles if authenticated
  return <Navigate to="/dashboard" replace />;
};

export default RoleBasedRedirect;
