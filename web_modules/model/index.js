import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//import { reducer as formReducer } from 'redux-form';

import user from './user';
import github from './github';
import space from './space';

export { user, github }

export default combineReducers({
  user, github, space,
//  form: formReducer,
  routing: routerReducer,
});
