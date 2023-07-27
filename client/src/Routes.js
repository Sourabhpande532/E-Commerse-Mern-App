import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

// PUBLIC ROUTE
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";

// IMPORT ADMIN
import AdminRoutes from "./auth/helper/AdminRoutes";
import AdminDashboard from "../src/user/AdminDashboard";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "../src/user/UserDashboard";
import Cart from "./core/Cart";

const AppRoutes = () => {
  const history = createBrowserHistory();

  return (
    <BrowserRouter history={history}>
      <Routes>
        {/* PUBLIC ROUTE  */}
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/' element={<PrivateRoutes />}>
          <Route path='/user/dashboard' element={<UserDashboard />} />
        </Route>
        <Route path='/' element={<AdminRoutes />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
        </Route>
        {/*<Route path='/' element={<AdminRoutes />}>
          <Route path='/admin/product/update/:productId' element={<AdminDashboard />} />
         </Route> */}
        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

/*
 **@MAKE_SURE:
 **PrivateRoutes for "user"(0) role
 **AdminRoutes for admin(1) role
 **path_URL : goes to Navbar
 */
