import React, { Component, UseState } from 'react';
import CounterButton from './CounterButton';
import CounterInput from './CounterInput';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.initial,
           // cantidad : 0,
        }
        this.initial=props.initial;
        this.min=props.min;
        this.max=props.max
    }

    onIncrease = () => {
        if (this.state.counter < 10) {
            let counter = this.state.counter + 1;
            this.setState({ counter: counter },()=>{
                if (this.props.onChange) {
                    this.props.onChange(this.state);
                }
            });
            console.log('onIncrease')
        }
    }

    onDecrease = () => {
        if (this.state.counter > 0) {
            let counter = this.state.counter - 1;
            this.setState({ counter: counter },()=>{
                if (this.props.onChange) {
                    this.props.onChange(this.state);
                }
            });
            console.log('onDecrease')
        }
    }

    onChange = (event) => {
        console.log('onChange');
        let counter = parseInt(event.target.value);
        this.setState({ counter: counter },()=>{
            if (this.props.onChange) {
                this.props.onChange(this.state);
            }
        });
        console.log('onDecrease')

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
                <CounterButton btnCls={'form-control btn btn-secondary'} btnAction={this.onIncrease} btnText={'+'} />
                    {this.props.children}
                </div>
               {/* <span>Items Agregados: {this.state.counter}</span>*/}
            </div>
        );
    }
}

export default Counter;