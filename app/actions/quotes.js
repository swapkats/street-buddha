import * as types from '../constants/ActionTypes';
import * as api from '../api/quotes';

export function updateQuotes() { // eslint-disable-line
  return (dispatch, getState) => {
    const state = getState();
    const { positions } = state;
    api.getQuotes(positions)
      .then((res) => {
        dispatch({ type: types.UPDATE_QUOTES, res });
      });
  };
}
