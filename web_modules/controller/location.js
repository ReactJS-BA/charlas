import { Observable } from 'rxjs';
import { replace } from 'react-router-redux';
import * as event from 'model/user';

const secured = ['/home']

export default (action$, store) => {
  const [unauth, auth] = action$.ofType('@@router/LOCATION_CHANGE')
    .partition(action =>
        secured.indexOf(action.payload.pathname) !== -1 && !store.getState().user.token.isLoggedIn()
    )

  return Observable.merge(
      action$.ofType(event.LOGIN_OK)
             .map(action => replace('/home')),

      action$.ofType(event.LOGOUT)
             .map(action => replace('/')),

      unauth.filter(action => action.payload.pathname !== '/')
            .map(action => replace('/')),

      auth.filter(action => action.payload.pathname === '/' && store.getState().user.token.isLoggedIn())
          .map(action => replace('/home')),

  )
}
