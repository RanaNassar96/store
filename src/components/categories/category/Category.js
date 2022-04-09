import React from 'react';
import './Category.css'
const Category = ( { items , categoryHandler , activeCategory }  ) => 
    items.map( item => {
        return(
            <div className={`category-name ${activeCategory == item.id ? "active" : ""}`} key={item.id} onClick={() => categoryHandler(item.id)}>
                <img src={window.location.origin + item.img } alt={item.title} className="img-fluid" />
                <p className="box-p"> {item.title} </p>
            </div>
        )
    } );


export default Category;