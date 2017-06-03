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
    const { symbol, onDeletePosition } = this.props;
    onDeletePosition(symbol);
  };

  render() {
    const { props } = this;
    return (
      <tr>
        <td className={style.value}>
          {props.name}
        </td>
        <td className={style.value}>
          {props.symbol}
        </td>
        <td className={style.value}>
          {props.closePrice}
        </td>
        <td className={style.value}>
          {props.change}
        </td>
        <td className={style.value}>
          {props.pChange}%
        </td>
        <td className={style.value}>
          {props.totalTradedVolume}
        </td>
        <td>
          <button
            className={style.destroy}
            onClick={this.handleDelete}
          >
            x
          </button>
        </td>
      </tr>
    );
  }
}
