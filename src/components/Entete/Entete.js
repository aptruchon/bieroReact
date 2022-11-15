import React from 'react';
import { NavLink } from 'react-router-dom';
import './Entete.css';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props);

    this.state = {
      titre: this.props.titre || "Biero",
      courriel: ""
    }
  }

  changeCourriel = (e) => {
    this.setState({ courriel: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state.courriel);
  }

  render() {
    return (
      <header>
        <h1>{this.state.titre}</h1>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <br/>
          <NavLink to="/liste">Liste des bières</NavLink>
        </nav>
        <form>
            <input onBlur={this.changeCourriel} type="text" placeholder='Usager' />
            <button onClick={this.login}>Login</button>
        </form>
      </header>
    );
  }
}