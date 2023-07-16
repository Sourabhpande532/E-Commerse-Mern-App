import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { createCategorys } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();

  //GO BACK
  const goBack = () => (
    <Link className='btn btn-sm btn-success mb-3' to='/admin/dashboard'>
      Admin Home
    </Link>
  );

  // HANDLE CHANGE
  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  // ON SUBMIT
  const onSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //BACKEND REQUEST FIRED
    //CALL FUNCTION
    //user - having all info like signin,signup
    //{name} why? due Json response it stored it in {}
    createCategorys(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(true);
        throw new Error("Faild to fetch Api");
      } else {
        setError("");
        setSuccess(true);
        setName("");
      }
    });
  };

  // SUCCESS MESSAGE
  const successMessage = () => {
    if (success) {
      return <h4 className='text-success'>Category Create Successfully</h4>;
    }
  };

  // WARNING MESSAGE
  const warningMessage = () => {
    if (error) {
      return <h4 className='text-warning'>Failed to create Category</h4>;
    }
  };

  //FORM
  const myCategoryForm = () => {
    return (
      <form>
        <div className=' form-group'>
          <p className='lead'>Enter Category</p>
          <input
            type='text'
            className=' form-control my-3'
            autoFocus
            onChange={handleChange}
            value={name}
            required
            placeholder='For e.g Summer'
          />
          <button onClick={onSubmit} className=' btn btn-outline-dark'>
            create Category
          </button>
        </div>
      </form>
    );
  };

  return (
    <Base
      title='Create a category here'
      description=' add a new category for new t-shrts'
      className=' container bg-info p-4'>
      <div className=' row bg-white rounded'>
        <div className='col-md-8 offset-md-2'>
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );

};

export default AddCategory;
