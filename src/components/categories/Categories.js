import React , { useState } from 'react';
import Category from './category/Category'
import './Categories.css';
import './category/Category.css';


const Categories = ( {items , categoryHandler , activeCategory } ) => {



    return (
        <div className="category-section">
            <div className="container">
                <div className="category-box">
                    <div className= {`category-name ${activeCategory == -1  ? "active" : ""}`} onClick={() => categoryHandler(-1)}>
                        <p className="box-p"> الكل </p>
                    </div>
                    <Category items={items} categoryHandler={categoryHandler} activeCategory={activeCategory} />
                </div>
            </div>
        </div>
    );
};

export default Categories;