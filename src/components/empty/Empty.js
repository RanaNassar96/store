import React from 'react';
import './Empty.css'
import emptyIcon from '../../assets/img/emptyIcon.svg'


const Empty = ( { title } ) => {
    return (
        <div className="aside-empty-box">
            <img src={emptyIcon} alt="Empty" className="img-fluid" />
            <p className="box-p">
                {title}
            </p>
        </div> 
    );
};

export default Empty;