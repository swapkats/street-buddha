import _ from 'lodash';
import * as types from '../constants/ActionTypes';
import { updateQuotes } from './quotes';

export function addPosition(position) {
  return (dispatch) => {
    dispatch({
      type: types.ADD_POSITION,
      position
    });
    dispatch(updateQuotes());
  };
}

export function onDeletePosition(symbol) {
  return (dispatch, getState) => {
    const state = getState();
    let { positions } = state;
    positions = _.remove(positions, position => position.s !== symbol);
    dispatch({
      type: types.UPDATE_POSITIONS,
      positions
    });
  };
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text };
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id };
}

export function completeAll() {
  return { type: types.COMPLETE_ALL };
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
}
