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
          <NavLink to="/">{<img src={logo} alt="Logo" />}</NavLink>
        <nav>
          <NavLink to="/liste"><span className='lienListe'>Liste des bières</span></NavLink>
          <form>
              <input onBlur={this.changeCourriel} type="text" placeholder="Nom d'usager" />
              <button onClick={this.login}>Se connecter</button>
          </form>
        </nav>
      </header>
    );
  }
}