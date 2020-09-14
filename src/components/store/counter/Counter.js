import React, { Component, UseState } from 'react';
import CounterButton from './CounterButton';
import CounterInput from './CounterInput';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.initial,
            cantidad : 0,
        }
        this.initial=props.initial;
        this.min=props.min;
        this.max=props.max
    }

    onIncrease = () => {
        if (this.state.counter < 10) {
            let counter = this.state.counter + 1;
            this.setState({ counter: counter });
            console.log('onIncrease')
        }
    }

    onDecrease = () => {
        if (this.state.counter > 0) {
            let counter = this.state.counter - 1;
            this.setState({ counter: counter });
            console.log('onDecrease')
        }
    }

    onChange = (event) => {
        console.log('onChange')
    };

    onAdd = () => {
        let cantidad = this.state.counter;
        let counter = 0;
        this.setState({ counter: counter, cantidad: cantidad });
    };

    render() {
        return (
            <div>
                <div className="form-group form-inline">
                <CounterButton  btnCls={'btn btn-secondary'} btnAction={this.onDecrease} btnText={'-'} />
                <CounterInput counterValue={this.state.counter} inputAction = {this.onChange} />
                <CounterButton btnCls={'form-control btn btn-secondary'} btnAction={this.onIncrease} btnText={'+'} />
                <CounterButton btnCls={'form-control btn btn-primary add-btn'} btnAction={this.onAdd} btnText={'Comprar'} />
                </div>
                <span>Items Agregados: {this.state.cantidad}</span>
            </div>
        );
    }
}

export default Counter;