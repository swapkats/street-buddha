// import * as ActionTypes from '../constants/ActionTypes';


const actionsMap = {
};

const initialState = [{ sym: '20MICRONS', name: '20 Microns Limited' }];

export default function todos(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
