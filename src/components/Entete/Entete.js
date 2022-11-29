import React from 'react';
import { NavLink } from 'react-router-dom';
import './Entete.css';
import logo from './bieroLogo.svg';

export default class Entete extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      courriel: sessionStorage.courriel || "",
      estLog: false
    }
  }


  /**
   * Fonction qui change this.state.estLog à true si sessionStorage.courriel l'est.
   */
  componentDidMount() {
    if (sessionStorage.getItem("courriel")) this.setState({ estLog: true });
  }


  /**
   * Fonction qui vérifie si la chaine entré correspond à une adresse courriel valide
   * 
   * @param {string} courriel 
   * @returns boolean
   */
  valideCourriel(courriel) {
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        result = false;

    if(courriel.match(regEx)){
      result = true;
    }
    return result;
  }


  /**
   * Fonction qui récupère et attribut le courriel entré à this.state.courriel
   * 
   * @param {object} e 
   */
  changeCourriel = (e) => {
    if(this.valideCourriel(e.target.value)) {
      this.setState({ courriel: e.target.value });
    }
    else {
      e.target.value = "";
    }
  }


  /**
   * Fonction qui appel la fonction login de la composante App, qui attribue le courriel valide à sessionStorage.courriel si ce dernier est valide
   * et qui change la valeur de this.state.estLog à true pour maintenir la session
   * 
   * @param {object} e 
   */
  login = (e) => {
    e.preventDefault();

    if(this.valideCourriel(this.state.courriel)){
      this.props.handleLogin(this.state.courriel);
      sessionStorage.setItem("courriel", this.state.courriel);
      this.setState({ estLog: true });
    }
  }

  /**
   * Fonction qui enlève le courriel de sessionStorage, qui remet this.state.estLog à false et this.state.courriel à ""
   * et qui remet le this.state.courriel à une valeur vide dans la composante App via handleLogin
   * 
   * @param {object} e 
   */
  signOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("courriel");
    this.setState({ 
      estLog: false,
      courriel: ""
    });
    this.props.handleLogin('');
  }


  render() {
    let blocConnexion = <>
                        <input className='navigation__formulaire-input' onBlur={this.changeCourriel} type="text" placeholder="un@courriel.ca" />
                        <button className='navigation__formulaire-bouton' onClick={this.login}>Connexion</button>
                        </>

    if (this.state.estLog) {
      blocConnexion = <>
                        <span className='navigation__formulaire-courrielUtilisateur'>{sessionStorage.courriel}</span>
                        <button className='navigation__formulaire-bouton' onClick={this.signOut}>Déconnexion</button>
                      </>
    }


    return (
      <header>
        <nav className='navigation'>
          <NavLink to="/"><img className='navigation__logo' src={logo} alt="Logo" /></NavLink>
          <form className='navigation__formulaire'>
            {blocConnexion}
          </form>
        </nav>
      </header>
    );
  };
}