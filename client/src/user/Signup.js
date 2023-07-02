import React, { useState } from "react";
import Base from "../core/Base";
import { signup } from "../auth/helper/index";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    succuss: false,
  });

  //DISTRUCTURING
  const { name, email, password, error, succuss } = values;

  //FUNCTIONAL PROGRAMMING
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  // ON SUBMIT
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, succuss: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            succuss: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className=' row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <form>
            <div className='form-group'>
              <label htmlFor='' className='text-light'>
                Name
              </label>
              <input
                className=' form-control'
                onChange={handleChange("name")}
                type='text'
                value={name}
              />
            </div>
            {/* Email */}
            <div className='form-group'>
              <label htmlFor='' className='text-light'>
                Email
              </label>
              <input
                className='form-control'
                onChange={handleChange("email")}
                type='email'
                value={email}
              />
            </div>
            {/* Password */}
            <div className='form-group'>
              <label htmlFor='' className='text-light'>
                Password
              </label>
              <input
                className=' form-control'
                onChange={handleChange("password")}
                type='password'
                value={password}
              />
            </div>
            <button className='btn btn-success btn-block' onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  // SUCCESS MESSAGE
  const successMessage = () => {
    return (
      <div className=' row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <div
            className=' alert alert-success'
            style={{ display: succuss ? "" : "none" }}>
            New Account Was created successfully, please
            <Link to='/signin'>Login</Link> here
          </div>
        </div>
      </div>
    );
  };

  // ERROR ON (BRING FROM DB)
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

  return (
    <Base title='Sign up' description='A page for user to signin'>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className='text-white text-center'>{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
