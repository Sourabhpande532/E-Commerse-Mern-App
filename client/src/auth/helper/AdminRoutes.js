import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index.js";

const AdminRoutes = ({ element: Component, ...rest }) => {
  return isAuthenticated() && isAuthenticated().user.role === 1 ? (
    <Route {...rest} element={<Component {...rest} />} />
  ) : (
    <Navigate to="/signin" replace state={{ from: rest.location }} />
  );
};

export default AdminRoutes;



