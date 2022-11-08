
import React from 'react';
import './Compteur.css';

export default class Compteur extends React.Component{
    constructor(props){
        super(props);
        // this.incremente = this.incremente.bind(this);
    }

    render() {
        return (
            <div>
                <p>{this.props.valeur}</p>
                <button onClick={this.props.handleIncrement}>Incrémente</button>
            </div>
        );
    }
}