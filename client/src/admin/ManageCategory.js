import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const ManageCategory = () => {
  const goBack = () => (
    <Link className='btn btn-sm btn-success mb-3' to='/admin/dashboard'>
      Admin Home
    </Link>
  );
  return (
    <div>
      <Base title='Manage Categores'>
        <h1>Your Assignment</h1>
        {goBack()}
      </Base>
    </div>
  );
};

export default ManageCategory;
