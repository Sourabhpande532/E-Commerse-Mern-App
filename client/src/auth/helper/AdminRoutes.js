import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from "./index.js";
import AdminDashboard from "../../user/AdminDashboard.js";
import AddCategory from "../../admin/AddCategory.js";
import AddProduct from "../../admin/AddProduct.js";
import ManageCategory from "../../admin/ManageCategory.js";
import ManageProducts from "../../admin/ManageProducts.js";
import UpdateProduct from "../../admin/UpdateProduct.js";


const AdminRoutes = ({ element: Component, ...rest }) => {
  return isAuthenticated() && isAuthenticated().user.role === 1 ? (
    <Routes>
      <Route path='/admin/dashboard/' element={<AdminDashboard />} />

      {/*<Route path="/admin/product/update/:productId" element={<UpdateProduct/>}/> OR */}

      <Route path="/product/update/:productId" element={<UpdateProduct/>}/>

      <Route path='/create/category' element={<AddCategory />} />
      <Route path='/create/product' element={<AddProduct />} />
      <Route path='/categories' element={<ManageCategory />} />
      <Route path='/products' element={<ManageProducts />} />
   
    </Routes>
  ) : (
    <Navigate to='/signin' replace state={{ from: rest.location }} />
  );
};

export default AdminRoutes;
