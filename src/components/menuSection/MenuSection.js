import React , { useContext } from 'react';
import { Context } from '../../context'
import menu from '../../assets/img/menu.png'
import './MenuSection.css'


const MenuSection = () => {
    const { setOpen } = useContext(Context);
    return (
        <div className="menu-section">
            <div className="container">
                <div className="menu-box" onClick={ () => setOpen(true) }>
                    <img src={menu} className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default MenuSection;