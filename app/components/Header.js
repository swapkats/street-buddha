import React, { PropTypes, Component } from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => `${suggestion.n} (${suggestion.s})`;

const renderSuggestion = suggestion => (
  <div>
    {suggestion.n} ({suggestion.s})
  </div>
);

export default class Header extends Component {
  static propTypes = {
    addPosition: PropTypes.func.isRequired
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isSymbolSelected: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue,
    });
  }


  onSuggestionSelected = (event, { suggestion, suggestionValue }) => {
    this.setState({
      suggestionSelected: suggestion,
      value: suggestionValue,
      isSymbolSelected: true,
    });
  };

  onSuggestionsFetchRequested = ({ value = '' }) => {
    this.props.getSymbolSuggestions(value);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onKeyDown(e) {
    const isEnterKey = e.key === 'Enter';
    if (isEnterKey && this.state.value.length !== 0 && this.state.isSymbolSelected) {
      this.props.addPosition(this.state.suggestionSelected);
      this.setState({ value: '' });
    }
  }

  render() {
    const inputProps = {
      placeholder: 'Add Position. e.g. Vedanta Ltd (VEDL)',
      value: this.state.value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown
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
