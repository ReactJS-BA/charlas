import { Observable } from 'rxjs';
import * as event from 'model/user';
import * as auth from 'lib/auth0'
import { replace } from 'react-router-redux';


export default (action$) =>
  Observable.merge(

    action$.ofType(event.LOGOUT)
      .do(action => auth.logout())
      .ignoreElements(),

    action$.ofType(event.LOGIN_IN)
      .flatMap(action => auth.login())
      .map(result => ({
        type: event.LOGIN_OK,
        payload: result,
      }))
      .catch(error => Observable.of({
          type: event.LOGIN_FAIL,
          payload: error.xhr.response,
          error: true
      }))

  )


  export function login() {
      return { type : event.LOGIN_IN }
  }

  export function logout() {
      return { type : event.LOGOUT }
  }
