import React from 'react';
import IncomingOrder from './incomingOrder/IncomingOrder'
import './IncomingOrders.css'

const IncomingOrders = ({items , editable , listEditIncome  , setListEditIncome }) =>  items.map( item => 
    <IncomingOrder 
        key={item.id} 
        item={item} 
        editable={editable}
        listEditIncome={listEditIncome}
        setListEditIncome ={setListEditIncome}
    /> )

export default IncomingOrders;