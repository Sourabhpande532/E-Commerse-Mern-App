import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index.js";

const AdminRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated() && isAuthenticated().user.role === 1 ? (
          <Component />
        ) : (
          <Navigate to="/signin" replace state={{ from: rest.location }} />
        )
      }
    />
  );
};

export default AdminRoutes;
