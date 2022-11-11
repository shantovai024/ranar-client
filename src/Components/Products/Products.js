import React from 'react';
import UseProducts from '../hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    let [products, setProducts] = UseProducts()
    return (
        <>
            <h1 className='text-center mb-60'>Products</h1>
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}>
                    </Product>)
                }
            </div>
        </>
    );
};

export default Products;