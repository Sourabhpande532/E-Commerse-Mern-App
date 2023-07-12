import React from "react";
import {Routes, Route, Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./index.js";
import UserDashboard from "../../user/UserDashboard.js";

const PrivateRoutes = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? (
    <Routes>
    <Route path="/user/dashboard/" element={<UserDashboard/>} />
    </Routes>
  ) : (
    <Navigate to="/signin" replace state={{ from: rest.location }} />
  );
  <Outlet/>
};

export default PrivateRoutes;

/*
You can pass additional Property's here by taking refference of other file Go to Routes.js & see AdminRoutes & PrivateRoutes we pass Component inside it!!
*/
