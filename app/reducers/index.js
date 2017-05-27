import { combineReducers } from 'redux';
import quotes from './quotes';
import positions from './positions';
import suggestions from './suggestions';

export default combineReducers({
  quotes,
  positions,
  suggestions,
});
