import React, {useState, useEffect} from "react";

export default function App() {

    const [contador, setContador] = useState(0);
    const [moment, setMoment] = useState('');

    useEffect(() => {
        var moment = Date();
        setMoment(moment)
    }, [contador]);

    const handleClick = () => {
        setContador(contador+1)
    }

    return (
        <div>
            <h1>Este es el Workshop 1 del dia</h1>
            <button onClick={handleClick}>Click Me!</button>
            <div>Me clickearon {contador} veces</div>
            <div>La ultima fue : {moment} </div>
        </div>
    );
}