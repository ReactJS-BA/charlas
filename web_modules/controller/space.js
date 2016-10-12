import { Observable } from 'rxjs';
import * as event from 'model/space';
import * as userEvent from 'model/user';
import { Parse } from 'lib/userspace'

const ToDo = Parse.Object.extend("ToDo");
const query = new (Parse.Query)(ToDo);

export default (action$) =>
  Observable.merge(

    action$.ofType(event.SPACE_LIST_REQUEST)
        .flatMap(action => query.limit(10).addDescending("createdAt").find() )
        .map(response => ({
            type : event.SPACE_LIST_RESPONSE,
            payload : response
        })),

    action$.ofType(event.SPACE_ADD_REQUEST)
        .flatMap(action => new ToDo().save({description : action.payload}) )
        .map(response => ({
            type : event.SPACE_LIST_REQUEST
        })),

    action$.ofType(userEvent.LOGIN_OK)
        .do(action => Parse.login(action.payload.token.token))
        .ignoreElements(),

    action$.ofType(event.LOGOUT)
        .do(action => Parse.logout() )
        .ignoreElements(),

  )

export function list_spaces() {
  return { type : event.SPACE_LIST_REQUEST }
}

export function add_space(value) {
  return { type : event.SPACE_ADD_REQUEST, payload: value }
}
