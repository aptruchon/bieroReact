import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entete from '../Entete/Entete';
import Accueil from '../Accueil/Accueil';
import ListeBiere from '../ListeBiere/ListeBiere';
import DetailBiere from '../DetailBiere/DetailBiere';
import './App.css';
import Biere from '../Biere/Biere';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      courriel: ""
    }
  }

  login = (courriel) =>{
    console.log(courriel);
    this.setState({ courriel: courriel });
    
  }

  // <Compteur valeurInitiale="0"/>
  render() {
    // <Route path='/compteur' element={<Compteur handleIncrement={this.incremente} valeur={this.state.valeur} />} />
    return (
      <Router>
        <Entete titre="Biero" handleLogin={this.login} />
        <Routes>

          <Route path='/' element={<Accueil />} />
          <Route path='/liste' element={<ListeBiere/>} />
          <Route path='/Biere/:id' element={<DetailBiere courriel={this.state.courriel} />} />
          <Route path='*' element={<Accueil/>} />

        </Routes>
			</Router>
		);
	}
}

/* 
- Mise en page de l'entête avec un logo SVG
- Mise en page de l'accueil avec du contenu statique
- Mise en page de la grille de la liste des bières
- Mise en page de la tuile tuile biere (image, nom et brasserie) et gestion de l'image par défault 
- Mise en oage de detailBiere (image, nom brasserie, description, commentaire) et gestion de l'image par défault
  + gestion dynamique de la note actuelle
  + mise en page ajout commentaire
  + Nouveau bloc ajout Note + sa mise en page

*/
