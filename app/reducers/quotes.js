import * as ActionTypes from '../constants/ActionTypes';

const initialState = {};

const actionsMap = {
  [ActionTypes.UPDATE_QUOTES](state, action) {
    return {
      ...state,
      ...action.quotes,
    };
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
