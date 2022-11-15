import React from 'react';
import { Link } from 'react-router-dom';
import Biere from '../Biere/Biere';
import './ListeBiere.css';

export default class ListeBiere extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            bieres: []
        }
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:8000/webservice/php/biere/`)
            .then((response) => {
                if(response.ok) return response.json();
                
                else throw Error();
            })
            .then((data) => {
                this.setState({ bieres: data.data });
            })
            .catch((err) => {
                console.log(err.message);
            })
        
    }

    render() {
        const bieres = this.state.bieres.map((biere, index) => {
            return <Link to={`/biere/${biere.id_biere}`} key={index}><Biere data={biere} /></Link>
        })


        return (
           <>
                <div>
                    {bieres}
                </div>
           </>
        );
    }
}