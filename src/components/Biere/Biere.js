import React from 'react';
import './Biere.css';

export default class Biere extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            biere: props.data
        }
        
    }

    render() {
        
        return (
           <>
                <h2>{this.props.nom} Votre template de tuile *Récupérer props</h2>
           </>
        );
    }
}