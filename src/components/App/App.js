import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoutonNav from '../BoutonNav/BoutonNav';
import Compteur from '../Compteur/Compteur';
import Entete from '../Entete/Entete';
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      valeur : 0
    }
  }


  incremente = () =>{
    // console.log("increment");

    // Même chose mais différent et il y a une raison de pk on utlise l'autre
    //this.setState({ valeur : ++this.state.valeur});
    this.setState((state) => ({valeur : this.state.valeur + 1}))
  }

  // <Compteur valeurInitiale="0"/>
  render() {
    return (
      <Router>
        <Entete titre="Biero" test="valeur"/>
        <Routes>

          <Route path='/' element={<Accueil />} />
          <Route path='/compteur' element={<Compteur handleIncrement={this.incremente} valeur={this.state.valeur}/>} />

        </Routes>
			</Router>
		);
	}
}
