import React from 'react';
import UseProducts from '../hooks/UseProducts';
import Product from '../Product/Product';
import './ManageInventory.css'

const ManageInventory = () => {
    let [products, setProducts] = UseProducts()  
    return (
        <div className='mb-60'>
            <h1 className='text-center mb-60'>Products</h1>
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}>
                    </Product>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;