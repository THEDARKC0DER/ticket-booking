import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RoleProtectedRoute({ children, allowedRoles }) {
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />; // or a custom "Unauthorized" page
  }

  return children;
}

export default RoleProtectedRoute;
