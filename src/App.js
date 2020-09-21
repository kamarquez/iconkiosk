import React , {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Product from "./pages/product/Product";
import Home from './pages/home/Home';
import ItemList from "./components/store/ItemList";
import ItemDetailContainer from "./components/store/detail/ItemDetailContainer";
import Cart from "./components/store/cart/Cart";

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
                        <Route exact path='/' component={Home} />
                        <Route path='/category/:id' component={ItemList} />
                        <Route path='/product/:id' component={ItemDetailContainer} />
                        <Route path='/cart' component={Cart} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}