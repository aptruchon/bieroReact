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
                <img className='tuile__img' src={this.state.img} alt="" />
                <div className='tuile__infos'>
                    <h2 className='tuile__infos-titre'>{this.state.nom}</h2>
                    <span className='tuile__infos-brasserie'>{this.state.brasserie}</span>
                </div>
            </article>
        );
    }
}