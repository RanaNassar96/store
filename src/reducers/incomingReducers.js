import { GET_INCOMING , EDIT_INCOMING } from '../actions/types'



const INITIAL_STATE = [];


const incomingReducers = ( state = INITIAL_STATE , action ) => {

    switch (action.type) {
        
        case GET_INCOMING:
            return action.payload

        case EDIT_INCOMING:
            console.log(action.payload);
            return [...state].filter( item => {
                let updated = null;
                action.payload.filter( search => {
                    if(item.id === search.id) {
                        updated = item ;
                        updated.quantity = search.quantity;
                        console.log(updated);
                        return updated
                    }
                })
                return updated ? updated : item ;
            });
             

        default:
            return state;
    }

}

export default incomingReducers;