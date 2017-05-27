import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import * as PositionActions from '../actions/positions';
import * as SymbolActions from '../actions/symbols';
import * as QuoteActions from '../actions/quotes';
import style from './App.css';

@connect(
  state => ({
    quotes: state.quotes,
    suggestions: state.suggestions,
    positions: state.positions,
  }),
  dispatch => ({
    actions: bindActionCreators({ ...PositionActions, ...SymbolActions, ...QuoteActions }, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    positions: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.updateQuotes();
  }

  render() {
    const { positions, actions, scripts, suggestions, quotes } = this.props;
    return (
      <div className={style.normal}>
        <Header
          addPosition={actions.addPosition}
          suggestions={suggestions}
          scripts={scripts}
          getSymbolSuggestions={actions.getSymbolSuggestions}
        />
        <Portfolio
          items={positions}
          actions={actions}
          quotes={quotes}
          onDeletePosition={this.props.onDeletePosition}
        />
      </div>
    );
  }
}
