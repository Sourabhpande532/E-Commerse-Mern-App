import React, { useState } from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import { Link } from "react-router-dom";

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
            required
            placeholder='For e.g Summer'
          />
          <button className=' btn btn-outline-dark'>create Category</button>
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
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default AddCategory;
