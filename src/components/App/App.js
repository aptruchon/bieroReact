import React from 'react';
import BoutonNav from '../BoutonNav/BoutonNav';
import Compteur from '../Compteur/Compteur';
import Entete from '../Entete/Entete';
import './App.css';

export default class App extends React.Component{
  render() {
    return (
      <>
        <Entete titre="Biero" test="valeur"/>
        <BoutonNav titre="BoutonNav" test="valeur"/>
        <Compteur valeurInitiale="0" />
			</>
		);
	}
}