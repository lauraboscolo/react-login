import { combineReducers } from 'redux';
import posts from './reducers/posts';
import authCandidate from './reducers/authCandidate';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  posts,
  authCandidate,
  common,
  router: routerReducer
});