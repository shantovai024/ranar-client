import { useEffect, useState } from 'react';

const UseProducts = () => {
    let [products, setProducts] = useState([])
    
    useEffect(() => {
        let url = 'product.json'
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])
    return [products, setProducts]
};

export default UseProducts;