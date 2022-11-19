import React from 'react';
import './Biere.css';
import imageBiere from './biere.jpg';

export default class Biere extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            nom: props.data.nom,
            brasserie: props.data.brasserie,
            img: props.data.image || {imageBiere}.imageBiere
        }
        
    }

    render() {
        console.log(this.state);
        
        return (
            <article>
                <img src={this.state.img} alt="" />
                <h2>{this.state.nom}</h2>
                <span>{this.state.brasserie}</span>
            </article>
        );
    }
}