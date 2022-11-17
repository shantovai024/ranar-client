import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UseProducts from '../hooks/UseProducts';

const Inventory = () => {
    let { id } = useParams();
    let [product, setProduct] = UseProducts(id)
    let { name, supplierName, description, price, quantity, img } = product;

    const navigate = useNavigate();
    return (
        <div className='row'>
            <div className='col-xl-6 offset-xl-3 product-img'>
                <div className="card mb-4">
                    <img src={img} alt="" />
                    <div className="product-info ps-4 pe-3 mb-4">
                        <h5>Name: {product.name}</h5>
                        <p><b>Supplier:</b> {supplierName}</p>
                        <p>{description}</p>
                        <h4>Price: {price}</h4>
                        <h6>Quantity: {quantity}</h6>
                        <div className="update-delete-btn mt-3">
                            <button className='update me-4'>Update Item</button>
                            <button className='delivered'>Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;