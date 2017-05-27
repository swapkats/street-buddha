import React, { PropTypes, Component } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.s;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.n} ({suggestion.s})
  </div>
);

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
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
    this.props.getSymbolSuggestions(value);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
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
          suggestions={this.props.suggestions}
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
