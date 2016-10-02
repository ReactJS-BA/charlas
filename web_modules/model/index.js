import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//import { reducer as formReducer } from 'redux-form';

import user from './user';
import github from './github';

export { user, github }

export default combineReducers({
  user,
  github,
//  form: formReducer,
  routing: routerReducer,
});
