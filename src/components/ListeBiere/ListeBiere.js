import React from 'react';
import { Link } from 'react-router-dom';
import Biere from '../Biere/Biere';
import './ListeBiere.css';

export default class ListeBiere extends React.Component{

    render() {
        return (
           <>
                <Link to="/biere1/"><Biere nom="Biere 1"/></Link>
                <Link to="/biere2/"><Biere nom="Biere 2"/></Link>
                <Link to="/biere3/"><Biere nom="Biere 3"/></Link>
           </>
        );
    }
}