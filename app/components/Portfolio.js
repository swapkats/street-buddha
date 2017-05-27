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
    const { items, actions } = this.props;
    return (
      <section className={style.main}>
        <ul className={style.todoList}>
          {items.map(item =>
            <li key={`${Math.random()}`}>
              <Position
                key={`${Math.random()}`}
                name={item.n}
                symbol={item.s}
                onDeletePosition={this.props.onDeletePosition}
                {...actions}
              />
            </li>
          )}
        </ul>
      </section>
    );
  }
}
