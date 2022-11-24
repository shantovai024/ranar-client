import { useEffect, useState } from 'react';

const UseProducts = () => {
    let [products, setProducts] = useState([])

    useEffect(() => {
        let url = 'https://ranar-server-side.vercel.app/allproducts'
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return [products, setProducts]
};

export default UseProducts;