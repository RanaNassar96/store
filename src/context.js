import React, { createContext , useState } from 'react';



export const Context = createContext();

export const ContextProvider = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <Context.Provider value={{open, setOpen}}>
            {props.children}
        </Context.Provider>
    );
}
