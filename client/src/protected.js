import React from "react";
import { Navigate, Outlet } from "react-router";


function Protected() {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default Protected;