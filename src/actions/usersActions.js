import { GET_USERS , SEARCH_USERS , DELETE_USERS , DELETE_USERS_ORDERS} from "./types"


export const get_users =  users  => {
    return{
        type: GET_USERS ,
        payload: users
    }
}

export const search_users =  searchText  => {
    return{
        type: SEARCH_USERS ,
        payload: searchText
    }
}

export const delete_users =  id  => {
    return{
        type: DELETE_USERS ,
        payload: id
    }
}

export const delete_users_orders = ( id , userId ) => {
    return{
        type: DELETE_USERS_ORDERS ,
        payload: { id , userId }
    }
}