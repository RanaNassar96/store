import { GET_PRODUCTS , FILTER_PRODUCTS , SEARCH_PRODUCTS   } from '../actions/types'



const INITIAL_STATE = [];


const productsReducer = ( state = INITIAL_STATE , action ) => {

    switch (action.type) {
        
        case GET_PRODUCTS:
            return action.payload

        case FILTER_PRODUCTS:
            return [...state].filter( el => action.payload === el.categoryId );

        case SEARCH_PRODUCTS:

            let searchResult = [];
            let checkVar = false;
            action.payload.map( el => {
                [...state].filter((product) => {
                    if(product.title.toLowerCase().includes(el) || product.categoryName.toLowerCase().includes(el)){
                        searchResult.map(elResult => elResult.id === product.id ? checkVar = true : null);
                        if(checkVar === false)  searchResult.push(product) 
                    }
                    checkVar = false
                });
            });
            return searchResult

        default:
            return state;
    }

}

export default productsReducer;