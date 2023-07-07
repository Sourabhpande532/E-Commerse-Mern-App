import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

//IMPORT ADMIM  
import AdminRoutes from "../src/auth/helper/AdminRoutes";
import AdminDashboard from "../src/user/AdminDashboard"
import PrivateRoutes from "../src/auth/helper/PrivateRoutes";
import UserDashboard from "../src/user/UserDashboard"

// IMPORT PRIVATE
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route
          path='/user/dashboard'
          element={
            <PrivateRoutes>
              <Route element={<UserDashboard />} />
            </PrivateRoutes>
          }
        />
        <Route
          path='/admin/dashboard'
          element={
            <AdminRoutes>
              <Route element={<AdminDashboard />} />
            </AdminRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;


/* 
@MAKE_SURE: PrivateRoutes for "user"(0) role 
            AdminRoutes for admin(1) role
            ->path_URL : goes to Navbar 
            ->

*/