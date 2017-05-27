import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

const actionsMap = {
  [ActionTypes.SYMBOL_SUGGESTIONS_SUCCESS](state, action) {
    return [...action.suggestions];
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
