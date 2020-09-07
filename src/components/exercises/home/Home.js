import React, {Component} from 'react';
 import './Home.css';

class Home extends  Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="greeting" id="h2er">
                    <h2>Bienvenido/a {this.props.nombre}</h2>
                </div>
            </div>
        )
    }
}

export default Home;