import React from 'react';
import { NavLink } from 'react-router-dom';
import './Entete.css';
import logo from './bieroLogo.svg';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props);

    this.state = {
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
        <nav className='navigation'>
          <NavLink to="/"><img className='navigation__logo' src={logo} alt="Logo" /></NavLink>
          <form className='navigation__formulaire'>
              <input className='navigation__formulaire-input' onBlur={this.changeCourriel} type="text" placeholder="Nom d'usager" />
              <button className='navigation__formulaire-bouton' onClick={this.login}>Se connecter</button>
          </form>
        </nav>
      </header>
    );
  }
}