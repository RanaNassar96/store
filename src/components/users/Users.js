import React from 'react';
import User from './user/User'
import './Users.css'

const Users = ({items , handleDelUser, handleDelUserOrder}) => items.map( 
    item => <User 
                item={item} 
                key={item.id} 
                handleDelUser={handleDelUser}
                handleDelUserOrder={handleDelUserOrder}/> );

export default Users;