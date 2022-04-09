import React from 'react';
import Product from './product/Product'
import './Products.css'

const Products = ({ items }) => {
    return (
        <div className="product-section">
            <div className="container">
                <div className="main-gird">
                    <Product items={items} />
                </div>
            </div>
        </div>
    );
};

export default Products;