import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
/*isAuthenticated it provides lot more thing user.email,role,password,.. */

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  // ADMIN LEFT SIDE 
  const adminLeftSide = () => {
    return (
      <div className='card'>
        <h5 className='card-header bg-warning text-white'>Admin Navigation</h5>
        <ul className='list-group'>
          <li className=' list-group-item'>
            <Link to='/admin/create/category' className='nav-link text-success'>
              Create Category
            </Link>
          </li>
          <li className=' list-group-item'>
            <Link to='/admin/categories' className='nav-link text-success'>
              Manage Category
            </Link>
          </li>
          <li className=' list-group-item'>
            <Link to='/admin/create/product' className='nav-link text-success'>
              Create Products
            </Link>
          </li>
          <li className=' list-group-item'>
            <Link to='/admin/products' className='nav-link text-success'>
              Manage products
            </Link>
          </li>
          <li className=' list-group-item'>
            <Link to='/admin/orders' className='nav-link text-success'>
              Manage Orders
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  // ADMIN RIGHT SIDE 
  const adminRightSide = () => {
    return (
      <div>
        <div className='card mb-4'>
          <h4 className='card-header'>Admin</h4>
          <ul className='list-group'>
            <li className='list-group-item'>
              <span className=' badge badge-success mr-2'>Name:</span>
              {name}
            </li>
            <li className='list-group-item'>
              <span className=' badge badge-success mr-2'>Email:</span>
              {email}
            </li>
            <li className='list-group-item'>
              <span className=' badge badge-success mr-2'>Role:</span>
              {role}
            </li>
            <li className='list-group-item'>
              <span className=' badge badge-danger'>Admin Area</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Base
      title='Welcome,Admin DashBoard'
      description="Manage of all you'r product's"
      className='container bg-success p-4'>
      <div className='row'>
        <div className='col-3'>{adminLeftSide()}</div>
        <div className='col-9'>{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashboard;
