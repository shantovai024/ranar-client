import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddProducts.css'

const AddProducts = () => {
  const [user] = useAuthState(auth)
  let navigate = useNavigate()

  let handleAddProduct = (event) => {
    event.preventDefault()

    let name = event.target.name.value;
    let email = event.target.email.value;
    let supplierName = event.target.supplierName.value;
    let description = event.target.description.value;
    let price = event.target.price.value;
    let quantity = event.target.quantity.value;
    let img = event.target.img.value;

    let product = { name, email, supplierName, description, price, quantity, img }

    const url = "http://localhost:5000/allproducts";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('success', data);
        toast.success("Product added successfully!");
      });
    event.target.reset();


  }

  return (
    <div className='row'>
      <div className="col-xl-8 mx-auto">
        <h1 className='text-center mb-4'>Add a Product</h1>
        <form className='add-product' onSubmit={handleAddProduct}>
          <input type="text" name='name' placeholder='Product Name' required />
          <input type="email" name='email' placeholder='Email' value={user?.email} required />
          <input type="text" name='supplierName' placeholder='Supplier Name' />
          <textarea name="description" id="" placeholder='Description'></textarea>
          <input type="number" name='price' placeholder='Price' required />
          <input type="number" name='quantity' placeholder='Quantity' required />
          <input type="text" name='img' placeholder='Enter Image Link' required />
          <div className='text-center mt-4'>
            <button className='update'>Add a Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;