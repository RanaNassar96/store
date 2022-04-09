import React from 'react';
import './Product.css';
import Information from '../../../assets/img/Information.svg'
import cal from '../../../assets/img/cal.svg'
import plus from '../../../assets/img/plus.svg'


const Product = ( {items} ) =>
    items.map( item => {
        return(
            <div className="grid-4" key={item.id}>
                <div className="main-box">
                    <div className="product-box">
                        <div className="top-box">
                            <div className="f-box">
                                <img src={Information} alt="Information" className="img-fluid" />
                            </div>
                            <div className="s-box">
                                <p className="calories-p">
                                    {item.kcal} Kcal
                                    <img src={cal} alt="cal" className="img-fluid" />
                                </p>
                            </div>
                        </div>
                        <div className="img-box">
                            <img src={window.location.origin + item.img } alt={item.title} className="img-fluid" />
                        </div>
                        <div className="text-box">
                            <span className="add-span">
                                <img src={plus} alt="plus" className="img-fluid" />
                            </span>
                            <p className="title-p"> {item.title} </p>
                            <p className="hint-p">
                                الكمية بالمخزون :
                                <span className="num-span"> {item.quantity} </span>
                            </p>
                            <p className="price-p">
                                <span className="num-span"> {item.price} </span>
                                ريال
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } );


export default Product;