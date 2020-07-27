import React from 'react';
import './Autocomplete.css';

interface IAutoCompleteProps {
    suggestions: [],
    onChange?(): void;
    onClick?(): void;
    onKeyDown?(): void;
}

interface IAutoCompleteState {
    activeSuggestion: number,
    filteredSuggestions: any,
    showSuggestions: boolean,
    userInput: string;
}

class AutoComplete extends React.Component<IAutoCompleteProps, IAutoCompleteState> {
    public props: IAutoCompleteProps;

    public static defaultProps: Partial<IAutoCompleteProps> = {
        suggestions: []
    };

    constructor(props: IAutoCompleteProps) {
        super(props);
        this.props = props;
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ''
        }
    }

    onChange = (e: any) => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            (suggestion: string) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = (e: any) => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ''
        });
    };

    onKeyDown = (e: any) => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            this.setState({ activeSuggestion: activeSuggestion - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const { activeSuggestion, showSuggestions, filteredSuggestions, userInput } = this.state;

        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className='autocomplete-suggestions suggestionUL'>
                        {filteredSuggestions.map((suggestion: string, index: number) => {
                            let className = '';
                            if (index === activeSuggestion) {
                                className = 'autocomplete-suggestion-active';
                            }
                            return (
                                <li className={className + ' liClass'} key={suggestion} onClick={(event) => this.onClick(event)}>
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className='no-autocomplete-suggestions'>
                        <em>No suggestions</em>
                    </div>
                );
            }
        }

        return (
            <React.Fragment>
                <div className='wrapperAutoComplete'>
                    <div className='subWrapperAutoComplete subWrapperInput' >
                        <input
                            type='text'
                            className={'inputClass'}
                            onKeyDown={(event) => this.onKeyDown(event)}
                            onChange={(event) => this.onChange(event)}
                            placeholder='Search...'
                            value={userInput}
                        />
                    </div>
                    <div className='wrapperSuggestion'>
                        <div className='subWrapperSuggestion'>
                            {suggestionsListComponent}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AutoComplete;