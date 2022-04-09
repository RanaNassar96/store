import React ,  { useContext} from 'react';
import { Context } from '../../context'
import './OverlayMenu.css'

const OverlayMenu = () => {

    const { setOpen } = useContext(Context);

    return (
        <div className="overlay-menu" onClick={ () => setOpen(false) }></div>
    );
};

export default OverlayMenu;