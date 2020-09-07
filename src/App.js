import React , {Component} from 'react';
import './App.css';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';

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
        console.log('constructor()');
        /**
         * The App initial state.
         * @memberof App
         */
    }

    componentDidMount() {
        console.log('componentDidMount()');
    }

    componentWillUnmount() {
        console.log('componentWillunmount()');
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
                <Nav/>
                <Home />
            </div>
        );
    }
}