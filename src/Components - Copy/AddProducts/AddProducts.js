import React from 'react';
import './AddProducts.css'

const AddProducts = () => {
    return (
        <div className='row'>
            <div className="col-xl-8 mx-auto">
                <h1 className='text-center'> Add a Products</h1>
                <form className='add-product'>
                    <input type="text" placeholder='Product Name' />
                    <input type="email" />
                    <input type="text" placeholder='Supplier Name' />
                    <textarea name="" id="" placeholder='Description'></textarea>
                    <input type="number" placeholder='Price' />
                    <input type="number" placeholder='Quantity' />
                    <input type="text" placeholder='Enter Image Link' />
                    <input type="button" value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;