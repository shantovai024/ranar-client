import React from 'react';
import UseProducts from '../hooks/UseProducts';
import Inventory from '../Inventory/Inventory';
import Product from '../Product/Product';
import './AllProduct.css'

const AllProduct = () => {
    let [products, setProducts] = UseProducts()  
    return (
        <div className='mb-60'>
            <h1 className='text-center mb-60'>All Product</h1>
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}>
                            <Inventory
                            product={product}
                            Inventory
                            ></Inventory>
                    </Product>)
                }
            </div>
        </div>
    );
};

export default AllProduct;