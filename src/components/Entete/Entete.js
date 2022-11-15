import React from 'react';
import { NavLink } from 'react-router-dom';
import './Entete.css';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props);

    this.state = {
      titre: this.props.titre || "Biero",
      test: this.props.test
    }
  }

  render() {
    return (
      <header>
        <h1>{this.state.titre}</h1>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/liste">Liste des bières</NavLink>
        </nav>
      </header>
    );
  }
}