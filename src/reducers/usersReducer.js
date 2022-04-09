import { GET_USERS , SEARCH_USERS , DELETE_USERS , DELETE_USERS_ORDERS } from '../actions/types'



const INITIAL_STATE = [];


const usersReducer = ( state = INITIAL_STATE , action ) => {

    switch (action.type) {
        
        case GET_USERS:
            return action.payload

        case SEARCH_USERS:
            return [...state].filter( el =>  el.name.toLowerCase().includes(action.payload.toLowerCase()) );

        case DELETE_USERS:
            return  [...state].filter( el => action.payload !== el.id )

        case DELETE_USERS_ORDERS:
            return  [...state].map( el => {
                if( el.id  ===  action.payload.userId) {

                    let updateOrder = el.orders.filter( or => action.payload.id !== or.id );
                    el.orders = updateOrder.slice(0);
                    console.log(el)
                }
                return el;
            });             

        default:
            return state;
    }

}

export default usersReducer;