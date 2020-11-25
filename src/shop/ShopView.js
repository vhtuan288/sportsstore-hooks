import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ProductList from './ProductList';
import CategoryNavigation from './CategoryNavigation';
import getData from '../utils/api';

export default function ShopView () {
    const [products, setProducts] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        getData('http://localhost:3001/products')
            .then(data => {
                setProducts(data)
            })
            .catch(e => setError(e));
    }, []);

    const {category} = useParams();

    function filterProducts (products = [], category) {
        return (!category || category === 'All')
            ? products
            : products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products" />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={filterProducts(products, category)} />
                </div>
            </div>
        </div>
    );
}