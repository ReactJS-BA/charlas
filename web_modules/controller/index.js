
import { combineEpics } from 'redux-observable';
import user from './user';
import github from './github';
import location from './location';

export { user, github, location }

export default combineEpics(
  user, github, location
);
