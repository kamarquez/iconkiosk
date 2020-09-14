import React, {Component, UseState} from 'react';


function CounterInput(props) {
    return(
        <input className="form-control cinput" type="number" value={props.counterValue} onChange={props.inputAction} />
    );
}
export default CounterInput;
