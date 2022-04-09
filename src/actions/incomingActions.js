import { GET_INCOMING , EDIT_INCOMING} from "./types"


export const get_incoming =  incoming  => {
    return{
        type: GET_INCOMING ,
        payload: incoming
    }
}

export const edit_incoming =  listEditIncome => {
    return{
        type: EDIT_INCOMING ,
        payload: listEditIncome
    }
}

