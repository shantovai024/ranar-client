import React from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import UseProducts from '../hooks/UseProducts';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {
    let [products, setProducts] = UseProducts()
    let navigate = useNavigate()
    let addAProduct = () => {
        navigate('/addproducts')
    }

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
            <h1 className='text-center fz-60 mb-60'>All Product</h1>
            <div className='row'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleDeleteProduct={handleDeleteProduct}
                    >
                    </Product>)
                }
            </div>
            <div className="row">
                <div className="col-xl-12 text-center mt-4">
                    <button className='manage-btn' onClick={addAProduct}>Add a Product</button>

                </div>
            </div>
        </div>
    );
};

export default AllProducts;