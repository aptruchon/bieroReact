import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entete from '../Entete/Entete';
import Accueil from '../Accueil/Accueil';
import ListeBiere from '../ListeBiere/ListeBiere';
import DetailBiere from '../DetailBiere/DetailBiere';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      courriel: ""
    }
  }

  /**
   * Fonction qui attribue la valeur de localStorage.courriel à this.state.courriel si localStorage.courriel est true
   */
  componentDidMount() {
    if (localStorage.getItem("courriel")) this.setState({ courriel: localStorage.getItem("courriel") });
  }

  /**
   * Fonction wui attribue le paramêtre courriel reçue à this.state.courriel
   * 
   * @param {string} courriel 
   */
  login = (courriel) =>{
    this.setState({ courriel: courriel });
  }

  render() {
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
- Mise en page de l'entête avec un logo SVG OK
- Mise en page de l'accueil avec du contenu statique SEMI-OK
- Mise en page de la grille de la liste des bières OK
- Mise en page de la tuile tuile biere (image, nom et brasserie) et gestion de l'image par défault OK
- Mise en page de detailBiere (image, nom brasserie, description, commentaires) et gestion de l'image par défault OK
  + gestion dynamique de la note actuelle OK
  + mise en page ajout commentaire OK
  + Nouveau bloc ajout Note + sa mise en page OK
*/
