import React from 'react';
import './Accueil.css';
import bieroAccueil from './bieroAccueil.jpg'

export default class Accueil extends React.Component{

    render() {
        return (
            <>
                
                <article>
                    <img src={bieroAccueil} alt="Image biero" />
                    <p><h1>À propos de Biero</h1>Aau Abbey Abv Acid Acidic Additive Adjunct Aerobic, hops  hopping tank specific racking, barrel Balthazar adjunct dopplebock Bung pint. Carbonation Back bitterness additive finishing degrees brewpub gravity brew secondary, microbrewery craft bottle carboy barley wort becher abbey, units draft oxidized chiller of bitter glass fermentation. Hops krug acidic imperial mead brewhouse carboy dry original bitter scotch,  beer weisse bung kettle lager primary krausen tun barley Barleywine, Balthazar chocolate shelf brewpub Aerobic Adjunct biere amber Barley. Beer trappist degrees finishing Biere krausen krug lagering infusion Abbey, dry  seidel All-malt back exchanger bung final original, Alpha priming dunkle biere Beer kettle reinheitsgebot weisse.</p>
                </article>
            </>
        );
    }
}