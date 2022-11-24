import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseProducts from '../hooks/UseProducts';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    let [products, setProducts] = UseProducts()

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm("Are you sure to delete this product?");
        if (proceed) {
            const url = `https://ranar-server-side.vercel.app/allproducts/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    const remaining = products.filter((product) => product._id !== id);
                    setProducts(remaining);
                    toast("Deleted Successfully");
                });
        }
    };

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
                            handleDeleteProduct={handleDeleteProduct}
                        ></Product>
                        ))
                }

                <div className='text-center mt-4'>
                    <Link to='/allproducts'><button className='manage-btn text-center'>Manage Inventory</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;