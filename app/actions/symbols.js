import _ from 'lodash';
import * as types from '../constants/ActionTypes';
import SymbolCollection from './symbolCollection';

export function getSymbolSuggestions(str) { //eslint-disable-line
  const inputValue = str.trim().toLowerCase();
  const inputLength = inputValue.length;
  const matches = inputLength === 0 ?
    [] :
      _.filter(SymbolCollection, (sym) => { //eslint-disable-line
        return sym.s.toLowerCase().indexOf(inputValue) !== -1 ||
          sym.n.toLowerCase().indexOf(inputValue) !== -1;
        } //eslint-disable-line
      );
  const suggestions = matches.length > 6 ? _.slice(matches, 0, 7) : matches;
  return {
    type: types.SYMBOL_SUGGESTIONS_SUCCESS,
    suggestions,
  };
}
