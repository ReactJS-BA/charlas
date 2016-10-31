export const SPACE_LIST_REQUEST   = 'module/github/space/request'
export const SPACE_LIST_RESPONSE  = 'module/github/space/response'
export const SPACE_LIST_FAIL      = 'module/github/space/fail'

export const SPACE_ADD_REQUEST   = 'module/github/space/add/request'
export const SPACE_ADD_RESPONSE  = 'module/github/space/add/response'
export const SPACE_ADD_FAIL      = 'module/github/space/add/fail'

import { LOGOUT } from 'model/user'

const initialState = {
  items : [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SPACE_LIST_REQUEST :
        return {
            ...state,
            waiting : true,
        };
    case SPACE_LIST_RESPONSE :
        return {
            ...state,
            waiting : false,
            items : action.payload.map(item=>({
                id : item.id,
                value : item.attributes.description,
            }))
        };
    case LOGOUT :
    case SPACE_LIST_FAIL :
        return {
            ...state,
            waiting : false,
            items : []
        };
    default : return state;
  }
}
