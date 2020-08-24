import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';


function App(props) {
    const value = prompt("Ingrese su nombre");
    /*const value = "kari";*/
  return (
   <div>
     <Nav/>
     <Home nombre={value}/>
   </div>
  );
}

export default App;
