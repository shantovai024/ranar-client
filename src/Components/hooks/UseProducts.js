import { useEffect, useState } from 'react';

const UseProducts = () => {
    let [products, setProducts] = useState([])

    useEffect(() => {
        let url = 'http://localhost:5000/allproducts'
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return [products, setProducts]
};

export default UseProducts;