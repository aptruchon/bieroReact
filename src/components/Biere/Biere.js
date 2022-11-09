import React from 'react';
import './Biere.css';

export default class Biere extends React.Component{

    render() {
        return (
           <>
                <h2>{this.props.nom}</h2>
           </>
        );
    }
}