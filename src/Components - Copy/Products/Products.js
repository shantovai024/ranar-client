import React from 'react';
import { Link } from 'react-router-dom';
import UseProducts from '../hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    let [products, setProducts] = UseProducts()
    return (
        <div className='mb-60'>
            <h1 className='text-center mb-60'>Products</h1>
            <div className='row'>
                {
                    products.length > 5 ? products.slice(0, 6).map((product) => (<Product
                        key={product._id}
                        product={product}
                    ></Product>))
                        :
                        products.map((product) => (<Product
                            key={product._id}
                            product={product}
                        ></Product>
                        ))
                }


                <div className='text-center mt-4'>
                    <Link to='/manageinventory'><button className='manage-btn text-center'>Manage Inventory</button></Link>
                </div>
                
            </div>

        </div>
    );
};

export default Products;