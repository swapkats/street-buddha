import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import style from './TodoTextInput.css';

export default class TodoTextInput extends Component {

  static propTypes = {
    onSave: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  };

  handleSubmit = (evt) => {
    const value = evt.target.value.trim();
    if (evt.which === 13) {
      this.props.onSave(value);
      if (this.props.newTodo) {
        this.setState({ value: '' });
      }
    }
  };

  handleBlur = (evt) => {
    if (!this.props.newTodo) {
      this.props.onSave(evt.target.value);
    }
  };

  render() {
    return (
      <input
        className={classnames({
          [style.edit]: this.props.editing,
          [style.new]: this.props.newTodo
        })}
        type="text"
        {...this.props}
        autoFocus="true"
        onBlur={this.handleBlur}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}
