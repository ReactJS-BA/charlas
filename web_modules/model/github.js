export const REPOS_REQUEST   = 'module/github/repos/request'
export const REPOS_RESPONSE  = 'module/github/repos/response'
export const REPOS_FAIL      = 'module/github/repos/fail'

export const ISSUES_REQUEST  = 'module/github/issues/request'
export const ISSUES_RESPONSE = 'module/github/issues/response'
export const ISSUES_FAIL     = 'module/github/issues/fail'

const initialState = {
  issues : [],
  repos : []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGOUT:
        return {
            ...state,
            issues : [],
            repos : []
        };
    case ISSUES_REQUEST :
        return {
            ...state,
            issues : []
        };
    case ISSUES_RESPONSE :
        return {
            ...state,
            issues : action.payload
        };
    case REPOS_REQUEST :
        return {
            ...state,
            repos : []
        };
    case REPOS_RESPONSE :
        return {
            ...state,
            repos : action.payload.filter( e => e.name.match(/^meetup-.*/) )
        };
    default : return state;
  }
}
