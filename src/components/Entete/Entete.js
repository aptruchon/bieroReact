import React from 'react';
import './Entete.css';
import BoutonNav from '../BoutonNav/BoutonNav';

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
        <ul>
          <li><BoutonNav lien="#1" label="Item 1" /></li>
          <li><BoutonNav lien="#2" label="Item 2" /></li>
          <li><BoutonNav lien="#3" label="Item 3" /></li>
        </ul>
      </header>
    );
  }
}