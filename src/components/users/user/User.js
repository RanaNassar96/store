import React from 'react';
import Order from './order/Order'
import delStudent from '../../../assets/img/delStudent.png'
import './User.css'

const User = ({item , handleDelUser , handleDelUserOrder }) => {
    return (
        <div className="single-student">
            <div className="student-info">
                <div className="student-img">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                </div>
                <div className="student-text">
                    <p className="box-num">
                        الرقم المقصفي
                        <sub> {item.number} </sub>
                    </p>
                    <p className="box-name"> {item.name} </p>
                </div>
                <span className="span-del" onClick={() => handleDelUser(item.id)}>
                    <img src={delStudent} alt="del" className="img-fluid" />
                </span>
            </div>
            <div className="student-content">
                <p className="total-num"> {item.orders.length} منتجات</p>
                {item.orders.map( 
                    order => <Order 
                                key={order.id} 
                                item={order} 
                                handleDelUserOrder={handleDelUserOrder} 
                                userId={item.id}
                            /> )}
            </div>
        </div>
    );
};

export default User;