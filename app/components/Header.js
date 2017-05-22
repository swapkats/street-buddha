import React, { PropTypes, Component } from 'react';
import Autosuggest from 'react-autosuggest';
import TodoTextInput from './TodoTextInput';
import styles from '../containers/App.css';

const getSuggestions = (dataset, value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : dataset.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.sym;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.name} ({suggestion.sym})
  </div>
);

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [], //eslint-disable-line
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    });
  }


  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    this.setState({
      value: suggestionValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(this.props.scripts, value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    const inputProps = {
      placeholder: 'Add Position. e.g. Apple Inc (APPL)',
      value: this.state.value,
      onChange: this.onChange,
    };
    return (
      <header>
        <h1>Portfolio</h1>
        <Autosuggest
          suggestions={this.state.suggestions}
          renderSuggestion={renderSuggestion}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          getSuggestionValue={getSuggestionValue}
          onSuggestionSelected={this.onSuggestionSelected}
          inputProps={inputProps}
          alwaysRenderSuggestions
          highlightFirstSuggestion
        />
      </header>
    );
  }
}
