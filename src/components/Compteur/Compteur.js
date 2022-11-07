
import React from 'react';
import './Compteur.css';

export default class Compteur extends React.Component{
    constructor(props){
        super(props);
        // this.incremente = this.incremente.bind(this);

        this.state = {
            valeur : parseInt(this.props.valeurInitiale) || 0
        }
    }

    incremente = () =>{
        // console.log("increment");

        this.setState({ valeur : ++this.state.valeur});
        // Même chose plus complexe
        // this.setState((state) => ({valeur : this.state.valeur + 1}))
    }

    render() {
        return (
            <div>
                <p>{this.state.valeur}</p>
                <button onClick={this.incremente}>Incrémente</button>
            </div>
        );
    }
}