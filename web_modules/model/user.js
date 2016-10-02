export const LOGIN_IN   = 'module/user/login_in'
export const LOGIN_OK   = 'module/user/login_ok'
export const LOGIN_FAIL = 'module/user/login_fail'
export const LOGOUT     = 'module/user/logout'

import { localToken, localProfile } from 'lib/auth0'

const ANON_USER = { name: 'anon' , avatar: 'none'}
const previous = {
  token : localToken(),
  profile : localProfile()
};
const initialState = {
    loading : false,
    token : previous.token ,
    profile : (!previous.profile? ANON_USER : {
        name : previous.profile.nickname,
        avatar : previous.profile.picture,
    })
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_IN :
            return {
                ...state,
                token : state.token.clear()
            };
        case LOGOUT :
            return {
                ...state,
                profile : ANON_USER,
                token : state.token.clear()
            }
        case LOGIN_OK :
            return {
                ...state,
                token : action.payload.token,
                profile : {
                    name : action.payload.profile.nickname,
                    avatar : action.payload.profile.picture
                }
            }
        case LOGIN_FAIL :
            return {
                ...state,
                token : state.token.clear()
            }
        default : return state;
  }
}
