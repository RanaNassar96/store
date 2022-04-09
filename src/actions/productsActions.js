import { GET_PRODUCTS , FILTER_PRODUCTS , SEARCH_PRODUCTS } from "./types"


export const get_products =  products  => {
    return{
        type: GET_PRODUCTS ,
        payload: products
    }
}
export const filter_products = id  => {
    return{
        type: FILTER_PRODUCTS ,
        payload: id
    }
}
export const search_products =  searchArr  => {
    return{
        type: SEARCH_PRODUCTS ,
        payload: searchArr
    }
}

