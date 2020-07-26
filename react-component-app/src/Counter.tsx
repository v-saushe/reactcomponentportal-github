import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import './Counter.css';

export interface ICounterState {
    counter: number;
    disabled: boolean;
}

export interface ICounterProps {
    itemCount?: number;
}

class CounterComponent extends React.Component<ICounterProps, ICounterState> {
    public state: ICounterState;
    public props: ICounterProps;

    constructor(props: ICounterProps) {
        super(props);
        this.props = props;
        this.state = {
            counter: 1,
            disabled: false
        };
    }

    public DecrementCounter() {
        this.setState({ counter: this.state.counter > 2 ? this.state.counter - 1 : 1, disabled: this.state.counter > 2 ? false : true });
    }

    public IncrementCounter() {
        this.setState({ counter: this.state.counter + 1, disabled: this.state.counter >= 0 ? false : true });
    }

    render() {
        return (
            <div className=''>
                <h2>Bootstrap Counter Field</h2>
                <div className='input-group'>
                    <span className='input-group-btn'>
                        <button type='button' className='btn btn-default btn-number'
                            onClick={() => this.DecrementCounter()}
                            disabled={this.state.disabled ? true : false} >
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                    </span>
                    <input type='text' name='quant' className='form-control input-number' value={this.state.counter} />
                    <span className='input-group-btn'>
                        <button type='button' className='btn btn-default btn-number' onClick={() => this.IncrementCounter()}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default CounterComponent;