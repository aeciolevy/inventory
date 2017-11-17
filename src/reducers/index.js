import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import users from './reducer_users';

const rootReducer = combineReducers({
  users,
  firebase: firebaseReducer
});

export default rootReducer;
