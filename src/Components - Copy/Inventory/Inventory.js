import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    let {id} = useParams();
    let [product, setProduct] = useState({});
    let { _id, name, supplierName, description, price, quantity, img } = product;

    const navigate = useNavigate();
    
    return (
        <div className='row'>
        <div className='col-xl-6 offset-xl-3 product-img'>
       <div className="card mb-4">
           <img src={img} alt="" />
           <div className="product-info ps-4 pe-3 mb-4">
               <h5 className=''>{name}</h5>
               <p><b>Supplier:</b> {supplierName}</p>
               <p>{description}</p>
               <h4>Price: {price}</h4>
               <h6>Quantity: {quantity}</h6>
               <div className="update-delete-btn mt-3">
                   <Link className='update me-4'>Update Item</Link>
                   <Link className='delivered'>Delivered</Link>
               </div>
           </div>

       </div>
   </div>
   </div>
    );
};

export default Inventory;