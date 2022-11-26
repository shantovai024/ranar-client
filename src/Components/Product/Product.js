import React from 'react';
import './Product.css'
import { useNavigate } from 'react-router-dom';


const Product = ({ product, handleDeleteProduct }) => {
    let { _id, name, supplierName, description, price, quantity, img } = product;

    let navigate = useNavigate()
    let navigateToUpdate = id => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='col-lg-4 col-md-6 product-img'>
            <div className="card mb-4">
                <img src={img} alt="" />
                <div className="product-info ps-4 pe-3 mb-4">
                    <h5 className=''>{name}</h5>
                    <p><b>Supplier:</b> {supplierName}</p>
                    <p>{description}</p>
                    <h4>Price: {price}</h4>
                    <h6>Quantity: {quantity}</h6>
                    <div className="update-delete-btn mt-3">
                        <button onClick={() => navigateToUpdate(product._id)} className='update me-4 mb-3'>Update Item</button>
                        <button onClick={() => handleDeleteProduct(_id)} className='delivered mb-3'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;