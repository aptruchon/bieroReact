import React from 'react';
import './BoutonNav.css';

export default class BoutonNav extends React.Component{
    constructor(props){
        super(props);
    }

  render() {
    return (
      <a href={this.props.lien}>{this.props.label}</a>
    );
  }
}