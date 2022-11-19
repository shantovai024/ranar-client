import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    let { id } = useParams();
    let [product, setProduct] = useState({})
    let { name, supplierName, description, price, quantity, img } = product;

    useEffect(() => {
        let url = `http://localhost:5000/allproducts/${id}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    })

    let navigate = useNavigate();
    return (
        <div className='row'>
            <div className='col-xl-6 offset-xl-3 product-img'>
                <div className="card mb-4">
                    <img src={img} alt="" />
                    <div className="product-info ps-4 pe-3 mb-4">
                        <h5>Name: {name}</h5>
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