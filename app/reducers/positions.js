import * as ActionTypes from '../constants/ActionTypes';

const initialState = [];

const actionsMap = {
  [ActionTypes.ADD_POSITION](state, action) {
    return [action.position, ...state];
  },
  [ActionTypes.UPDATE_POSITIONS](state, action) {
    return [...action.positions];
  }
};

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
