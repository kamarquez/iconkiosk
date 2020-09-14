import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Product from "./pages/product/Product";
import Home from './pages/home/Home';
import Form from './components/exercises/Formulario.js';
import ItemList from "./components/store/ItemList";

/**
 * The App Component.
 *
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
    /**
     * Creates an instance of App.
     * @memberof App
     */
    constructor() {
        super();
        //console.log('constructor()');
        /**
         * The App initial state.
         * @memberof App
         */
    }

    componentDidMount() {
        //console.log('componentDidMount()');
    }

    componentWillUnmount() {
        //console.log('componentWillunmount()');
    }

    /**
     * Renders the App Component.
     *
     * @return {JSX}  The App component to render.
     * @memberof App
     */
    render() {
        console.log('render()');
        return (
            <div className="App">

                <BrowserRouter>
                    <Nav/>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/category/:id'>
                            <ItemList />
                        </Route>
                        <Route path='/product/:id'>
                            <Product />
                        </Route>
                        <Route path='/form'>
                            <Form />
                        </Route>
                    </Switch>

                </BrowserRouter>

            </div>
        );
    }
}