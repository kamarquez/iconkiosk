import React, { Component } from 'react';
import CounterButton from './CounterButton';
import CounterInput from './CounterInput';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.initial
        }
        this.initial=props.initial;
        this.min=props.min;
        this.max=props.max
    }

    onIncrease = () => {
        //console.log('onIncrease')
        if (this.state.counter < this.max) {
            let counter = this.state.counter + 1;
            this.setState({ counter: counter },()=>{
                if (this.props.onChange) {
                    this.props.onChange(this.state);
                }
            });
        }
    }

    onDecrease = () => {
        //console.log('onDecrease')
        if (this.state.counter > 0) {
            let counter = this.state.counter - 1;
            this.setState({ counter: counter },()=>{
                if (this.props.onChange) {
                    this.props.onChange(this.state);
                }
            });

        }
    }

    onChange = (event) => {
        //console.log('onChange');
        let counter = parseInt(event.target.value);
        this.setState({ counter: counter },()=>{
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        });
    };

/*
    onAdd = () => {
        let cantidad = this.state.counter;
        let counter = 0;
        this.setState({ counter: counter, cantidad: cantidad });
    };*/


    render() {
        return (
            <div>
                <div className="form-group form-inline">
                <CounterButton  btnCls={'btn btn-secondary'} btnAction={this.onDecrease} btnText={'-'} />
                <CounterInput counterValue={this.state.counter} inputAction = {this.onChange} />
                <CounterButton btnCls={'btn btn-secondary'} btnAction={this.onIncrease} btnText={'+'} />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Counter;