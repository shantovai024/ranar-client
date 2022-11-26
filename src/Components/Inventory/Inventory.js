import './Inventory.css'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    let { id } = useParams();
    let [product, setProduct] = useState({})
    let { name, supplierName, description, price, quantity, img } = product;
    let navigate = useNavigate();

    const [singleProductQuantity, setSingleProductQuantity] = useState(quantity);

    useEffect(() => {
        let url = `https://ranar-server-side.vercel.app/allproducts/${id}`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data))
        setSingleProductQuantity(parseFloat(quantity));
    })


    const handleDeliveredBtn = () => {
        const updateQuantity = (parseFloat(singleProductQuantity) - 1).toString();
        const url = `https://ranar-server-side.vercel.app/allproducts/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ updateQuantity }),
        })
            .then((res) => res.json())
            .then((result) => {
                setSingleProductQuantity(parseFloat(updateQuantity));
                toast("Product Delivered successfully");
            });
    };

    const handleIncreaseProduct = (event) => {
        event.preventDefault();

        const inputQuantity = event.target.quantity.value;

        const quantity = parseFloat(inputQuantity);
        const previousQuantity = parseFloat(singleProductQuantity);
        if (quantity < 0 || quantity !== parseInt(quantity)) {
            toast("Please Enter a Positive Integer Number");
            return;
        }

        const updateQuantity = (previousQuantity + quantity).toString();
        const url = `https://ranar-server-side.vercel.app/allproducts/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ updateQuantity }),
        })
            .then((res) => res.json())
            .then((result) => {
                setSingleProductQuantity(parseFloat(updateQuantity));
                event.target.reset();
                toast("Product Quantity Increased!");
            });
    };

    return (
        <>
            <div className='row'>
                <div className='col-xl-6 offset-xl-3 inventory'>
                    <div className="card mb-4">
                        <img src={img} alt="" />
                        <div className="product-info ps-4 pe-3 mb-4">
                            <h5>Name: {name}</h5>
                            <p><b>Supplier:</b> {supplierName}</p>
                            <p>{description}</p>
                            <h4>Price: {price}</h4>
                            <h6>Quantity: {quantity}</h6>
                            <div className="update-delete-btn mt-3">
                                <button onClick={handleDeliveredBtn} className='delivered'>Delivered</button>

                                <h2 className='mt-4'>Restock This Items?</h2>
                                <div>
                                    <form onSubmit={handleIncreaseProduct}>
                                        <div className="mb-3 increase-input">
                                            <input
                                                placeholder="Quantity"
                                                name="quantity"
                                                required />
                                        </div>
                                        <button
                                            type="submit"
                                            className="update">
                                            Restock
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Inventory;