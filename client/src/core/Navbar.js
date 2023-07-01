import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const currentTab = (location, path) => {
  if (location.pathname === path) {
    return { color: "#ffffff" };
  } else {
    return { color: "#3DBE29" };
  }
};

const Navbar = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  return (
    <div>
      <ul className='nav nav-tabs bg-dark'>
        <li className='nav-item'>
          <Link style={currentTab(location, "/")} className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={currentTab(location, "/cart")} className='nav-link' to='/cart'>
            Cart
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={currentTab(location, "/user/dashboard")} className='nav-link' to='/user/dashboard'>
            Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={currentTab(location, "/admin/dashboard")} className='nav-link' to="/admin/dashboard">
            A.Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={currentTab(location, "/signup")} className='nav-link' to='/signup'>
            Signup
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={currentTab(location, "/signin")} className='nav-link' to='/signin'>
            Sign In  
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={currentTab(location, "/signout")} className='nav-link' to='/signout'>
            Signout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;


