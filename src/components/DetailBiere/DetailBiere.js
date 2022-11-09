import React from 'react';
import './DetailBiere.css';

export default class DetailBiere extends React.Component{

    render() {
        return (
           <>
                <article>
                    <div className='details'>
                        <h2>Nom de la bière</h2>
                        <h3>Brasserie</h3>
                        <span>Description</span>
                        <span>Note</span>
                        <div>
                            <h4>Commentaires</h4>
                            <span></span>
                        </div>
                    </div>
                    <div className='image'>
                        <img src="" alt="" />
                    </div>
                </article>
           </>
        );
    }
}