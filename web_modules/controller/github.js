import { Observable } from 'rxjs';
import { replace } from 'react-router-redux';
import * as event from 'model/github';
import GitHub from 'github-api';

const github = new GitHub()

export default (action$) =>
  Observable.merge(
    action$.ofType(event.REPOS_REQUEST)
      .flatMap(action =>
         github.getOrganization("ReactJS-BA").getRepos()
      ).map(response => ({
        type : event.REPOS_RESPONSE,
        payload : response.data
      })),
    action$.ofType(event.ISSUES_REQUEST)
      .flatMap(action =>
         github.getIssues("ReactJS-BA", "charlas").listIssues()
      ).map(response => ({
        type : event.ISSUES_RESPONSE,
        payload : response.data
      })),
  )

export function load_repos() {
  return { type : event.REPOS_REQUEST }
}

export function load_issues() {
  return { type : event.ISSUES_REQUEST }
}
