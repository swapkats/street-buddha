import React, { Component, PropTypes } from 'react';
import Position from './Position';
import Footer from './Footer';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import style from './Portfolio.css';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

export default class MainSection extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { filter: SHOW_ALL };
  }

  handleClearCompleted = () => {
    const atLeastOneCompleted = this.props.items.some(todo => todo.completed);
    if (atLeastOneCompleted) {
      this.props.actions.clearCompleted();
    }
  };

  handleShow = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { items, quotes, actions } = this.props;
    return (
      <section className={style.main}>
        <table className={style.todoList}>
          <thead>
            <td>Company</td>
            <td>Symbol</td>
            <td>Last Price</td>
            <td>Change</td>
            <td>Volume</td>
          </thead>
          <tbody>
            {items.map(item =>
              <Position
                key={`${Math.random()}`}
                name={item.n}
                symbol={item.s}
                {...quotes[item.s]}
                onDeletePosition={this.props.onDeletePosition}
                {...actions}
              />
            )}
          </tbody>
        </table>
      </section>
    );
  }
}
