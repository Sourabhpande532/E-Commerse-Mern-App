import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper";
import {
  getProduct,
  getCategories,
  updateProduct,
} from "./helper/adminapicall";

const UpdateProduct = () => {
  const { productId } = useParams(); // Using the useParams hook to get the productId
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: new FormData()
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;

  // PRELOAD DATA
  const preloadData = async () => {
    try {
      const productData = await getProduct(productId);
      const categoryData = await getCategories();
      console.log(productData);
      console.log(categoryData);

      if (productData.error || categoryData.error) {
        setValues({ ...values, error: productData.error || categoryData.error });
      } else {
        setValues({
          ...values,
          name: productData.name,
          description: productData.description,
          price: productData.price,
          category: productData.category._id,
          stock: productData.stock,
          categories: categoryData,
        });
      }
    } catch (error) {
      console.error("Error while fetching product or categories:", error);
      setValues({ ...values, error: "Failed to fetch product or categories data" });
    }
  };

  //USE EFFECT CALL 
  useEffect(() => {
    preloadData();
  }, []);


  // ON SUBMIT
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    updateProduct(productId, user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          stock: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  // SUCCESS MESSAGE 
  const successMessage = () => (
    <div
      className='alert alert-success mt-3'
      style={{ display: createdProduct ? "" : "none" }}>
      <h4>{createdProduct} updated successfully</h4>
    </div>
  );

  // HADLE CHANGE EVENT
  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  // FORM
  function createProductForm() {
    return (
      <form>
        <span>Post photo</span>
        <div className='form-group'>
          <label className='btn btn-block btn-success'>
            <input
              onChange={handleChange("photo")}
              type='file'
              name='photo'
              accept='image'
              placeholder='choose a file'
            />
          </label>
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange("name")}
            name='photo'
            className='form-control'
            placeholder='Name'
            value={name}
          />
        </div>
        <div className='form-group'>
          <textarea
            onChange={handleChange("description")}
            name='photo'
            className='form-control'
            placeholder='Description'
            value={description}
          />
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange("price")}
            type='number'
            className='form-control'
            placeholder='Price'
            value={price}
          />
        </div>
        <div className='form-group'>
          <select
            onChange={handleChange("category")}
            className='form-control'
            placeholder='Category'>
            <option>Select</option>
            {categories &&
              categories.map((cate, index) => (
                <option key={index} value={cate._id}>
                  {cate.name}
                </option>
              ))}
          </select>
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange("stock")}
            type='number'
            className='form-control'
            placeholder='stock'
            value={stock}
          />
        </div>

        <button
          type='submit'
          onClick={onSubmit}
          className='btn btn-outline-success mb-3'>
          Create Product
        </button>
      </form>
    );
  }
  return (
    <Base
      title='Add a product here'
      description='Welcome to product creation section'
      className='container bg-info p-4'>
      <Link to='/admin/dashboard' className='btn btn-md btn-dark mb-3'>
        Admin Home
      </Link>
      <div className='row bg-dark text-white rounded'>
        <div className='col-md-8 offset-md-2'>
          <h1 className='text-white'>
            {successMessage()}
            {createProductForm()}
          </h1>
        </div>
      </div>
    </Base>
  );
};

export default UpdateProduct;
