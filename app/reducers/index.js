import { combineReducers } from 'redux';
import todos from './todos';
import scripts from './scripts';

export default combineReducers({
  todos,
  scripts,
});
