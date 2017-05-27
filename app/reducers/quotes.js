import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

const actionsMap = {
  
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
