import React, { useState } from "react";
import Base from "../core/Base";
import { Link, useNavigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";

const Signin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "johndown@gmail.com",
    password: "1234",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;

  //HOLD JWT
  const { user } = isAuthenticated();

  //HANDLE CHANGE
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //ON SUBMIT
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  // PERFORM REDIRECT
  const performRedirect = () => {
    //PENDING STATE
    if (didRedirect) {
      if (user && user.role === 1) {
        return navigate("/admin/dashboard");
      }
    }
    if (isAuthenticated()) {
      navigate("/");
    }
  };

  // LOADING MESSAGE
  const loadingMessage = () => {
    return (
      loading && (
        <div className=' alert alert-info'>
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  // ERROR MESSAGE
  const errorMessage = () => {
    return (
      <div className=' row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className=' alert alert-danger'
            style={{ display: error ? "" : "none" }}>
            {error}
          </div>
        </div>
      </div>
    );
  };

  // SIGNIN FORM
  const signInForm = () => {
    return (
      <div className=' row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <form>
            {/* Email */}
            <div className='form-group'>
              <label htmlFor='' className='text-light'>
                Email
              </label>
              <input
                onChange={handleChange("email")}
                value={email}
                className=' form-control'
                type='email'></input>
            </div>
            {/* Password */}
            <div className='form-group'>
              <label htmlFor='' className='text-light'>
                Password
              </label>
              <input
                onChange={handleChange("password")}
                value={password}
                className=' form-control'
                type='password'></input>
            </div>
            <button onClick={onSubmit} className=' btn btn-success btn-block'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title='Sign in' description='A page for signin work'>
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <p className=' text-white text-center'>{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
