import { combineReducers } from 'redux';
import todos from './todos';
import scripts from './scripts';
import suggestions from './suggestions';

export default combineReducers({
  todos,
  scripts,
  suggestions,
});
