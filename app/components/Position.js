import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './Position.css';

export default class TodoItem extends Component {

  static propTypes = {
    onDeletePosition: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  handleDelete = () => {
    const { todo, onDeletePosition } = this.props;
    onDeletePosition(todo.id);
  };

  render() {
    const { props } = this;
    return (
      <div className={style.view}>
        <span className={style.value}>
          {props.name}
        </span>
        <span className={style.value}>
          {props.symbol}
        </span>
        <button
          className={style.destroy}
          onClick={this.handleDelete}
        />
      </div>
    );
  }
}
