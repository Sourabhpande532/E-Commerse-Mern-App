import React from "react";
import { Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index.js";

const PrivateRoutes = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={<Component {...rest} />} />
  ) : (
    <Navigate to="/signin" replace state={{ from: rest.location }} />
  );
};

export default PrivateRoutes;




   //You can pass additional Property's here by taking refference of other file Go to Routes.js & see AdminRoutes & PrivateRoutes we pass Component inside it!!
