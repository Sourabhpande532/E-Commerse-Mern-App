import React, { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper/index";

const currentTab = (location, path) => {
  if (location.pathname === path) {
    return { color: "#ffffff" };
  } else {
    return { color: "#3DBE29" };
  }
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
          <Link
            style={currentTab(location, "/cart")}
            className='nav-link'
            to='/cart'>
            Cart
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(location, "/user/dashboard")}
            className='nav-link'
            to='/user/dashboard'>
            U.Dashboard
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(location, "/admin/dashboard")}
            className='nav-link'
            to='/admin/dashboard'>
            A.Dashboard
          </Link>
        </li>
        {/* LOGIC FOR NOT AUTHENTICATE USER (FALSE)'0' */}
        {!isAuthenticated() && (
          <Fragment>
            <li className='nav-item'>
              <Link
                style={currentTab(location, "/signup")}
                className='nav-link'
                to='/signup'>
                Signup
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                style={currentTab(location, "/signin")}
                className='nav-link'
                to='/signin'>
                Sign In
              </Link>
            </li>
          </Fragment>
        )}
        {/* IF USER LOGIN */}
        {isAuthenticated() && (
          <li className='nav-item'>
            <span
              className='nav-link text-warning'
              onClick={() => {
                signout(() => {
                  navigate("/");
                });
              }}>
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
