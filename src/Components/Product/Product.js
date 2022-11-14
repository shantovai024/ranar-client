import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    let { _id, name, supplierName, description, price, quantity, img } = product;
    return (
        <div className='col-xl-4 product-img'>
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
    );
};

export default Product;