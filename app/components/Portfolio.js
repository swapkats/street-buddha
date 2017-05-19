import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';
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
    const { filter } = this.state;

    const filteredTodos = items.filter(TODO_FILTERS[filter]);
    const completedCount = items.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );

    return (
      <section className={style.main}>
        <ul className={style.todoList}>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}
