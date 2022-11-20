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
        return (
            <article className='tuile'>
                <div>
                    <img className='imgTuile' src={this.state.img} alt="" />
                </div>
                <div className='tuile-info'>
                    <h2 className='nomBiere'>{this.state.nom}</h2>
                    <span>{this.state.brasserie}</span>
                </div>
            </article>
        );
    }
}