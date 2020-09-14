import React, {Component, UseState} from 'react';
import "./Counter.css";
function CounterButton(props) {
    return(
        <button onClick={props.btnAction} type="submit" className={props.btnCls}>{props.btnText}</button>
    );
}

export default CounterButton;