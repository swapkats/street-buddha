import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import * as TodoActions from '../actions/todos';
import style from './App.css';

@connect(
  state => ({
    portfolioItems: state.todos,
    scripts: state.scripts
  }),
  dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
  })
)
export default class App extends Component {

  static propTypes = {
    portfolioItems: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render() {
    const { portfolioItems, actions, scripts } = this.props;

    return (
      <div className={style.normal}>
        <Header addTodo={actions.addTodo} scripts={scripts} />
        <Portfolio items={portfolioItems} actions={actions} />
      </div>
    );
  }
}
