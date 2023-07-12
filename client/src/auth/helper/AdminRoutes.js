import React from "react";
import {Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index.js";
import AdminDashboard from "../../user/AdminDashboard.js";


const AdminRoutes = ({ element: Component, ...rest }) => {
  return isAuthenticated() && isAuthenticated().user.role === 1 ? (
    <Routes>
    <Route path="/admin/dashboard/" element={<AdminDashboard/>} />
    </Routes>
  ) : (
    <Navigate to="/signin" replace state={{ from: rest.location }} />
  );

};

export default AdminRoutes;
