import React from 'react';
import delProduct from '../../../../assets/img/delProduct.png'
import './Order.css'

const Order = ({item , handleDelUserOrder , userId}) => {
    return (
        <div className="mini-pro"> 
            <div className="pro-img">
                <img src={item.image} alt={item.name} className="img-fluid" />
            </div>
            <div className="pro-text">
                <h3 className="title-h"> {item.name} </h3>
                <div className="box">
                    <p className="single-price">
                        <span className="span-price"> {item.price} </span>
                        ريال
                        <span className="span-count"> x {item.quantity} </span>
                    </p>
                    <p className="total-price">
                        <span className="span-price"> {item.totalPrice} </span>
                        ريال
                    </p>
                </div>
            </div>
            <span className="span-del" onClick={() => handleDelUserOrder(item.id , userId)}>
                <img src={delProduct} alt="del" className="img-fluid" />
            </span>
        </div>
    );
};

export default Order;