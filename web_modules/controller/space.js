import { Observable } from 'rxjs';
import * as event from 'model/space';
import Parse from 'parse'

Parse.initialize(`${localStorage.id_token}`)
Parse.serverURL = `http://user.space/main`
var ToDo = Parse.Object.extend("ToDo");
var query = new Parse.Query(ToDo);


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
  )

export function list_spaces() {
  return { type : event.SPACE_LIST_REQUEST }
}

export function add_space(value) {
  return { type : event.SPACE_ADD_REQUEST, payload: value }
}
