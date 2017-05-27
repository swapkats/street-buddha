import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import * as TodoActions from '../actions/todos';
import * as SymbolActions from '../actions/symbols';
import style from './App.css';

@connect(
  state => ({
    portfolioItems: state.todos,
    scripts: state.scripts,
    suggestions: state.suggestions,
  }),
  dispatch => ({
    actions: bindActionCreators({ ...TodoActions, ...SymbolActions }, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    portfolioItems: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentWillMount() {
  }

  render() {
    const { portfolioItems, actions, scripts, suggestions } = this.props;
    return (
      <div className={style.normal}>
        <Header
          addTodo={actions.addTodo}
          suggestions={suggestions}
          scripts={scripts}
          getSymbolSuggestions={actions.getSymbolSuggestions}
        />
        <Portfolio items={portfolioItems} actions={actions} />
      </div>
    );
  }
}
