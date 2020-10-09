import React from 'react';
import "./Counter.css";

function CounterButton(props) {
    return(
        <button disabled={props.disabled} onClick={props.btnAction} type="submit" className={props.btnCls}>{props.btnText}</button>
    );
}

export default CounterButton;