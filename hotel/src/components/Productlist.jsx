import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Productlist = () => {
    const [Products, setProduct] = useState([]);

    const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProduct(res.data);
        console.log(res.data, "Data fetch");
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            Product list
        </div>
    );
};

export default Productlist;
