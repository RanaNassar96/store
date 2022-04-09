import React from 'react';
import './Tag.css'
import closeCircle from '../../../assets/img/closeCircle.svg'

const Tag = ({items , deleteSearch}) =>
    items.map( item => {
        return(
            <div className="tags-box" key={item.id}>
                <p className="box-p">
                    {item.name}
                </p>
                <span className="span-del" onClick={ ()=> deleteSearch(item.id) }>
                    <img src={closeCircle} alt="close" className="img-fluid" />
                </span>
            </div>
        )
    } );

export default Tag;