import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailBiere.css';
import imageBiere from './biere.jpg';

export default function DetailBiere(props) {

    
    const params = useParams();
    const urlBiere = `http://127.0.0.1:8000/webservice/php/biere/${params.id}`,
          urlBiereCommentaire = `${urlBiere}/commentaire`;

    const [biere, setBiere] = useState({});
    const [commentaires, setCommentaires] = useState([]);
    const [nouveauCommentaire, setNouveauCommentaires] = useState("");
    biere.image = biere.image || imageBiere;

    useEffect(() => {
        fetch(urlBiere)
            .then((response) => { return response.json() })
            .then((data) => {
                setBiere(data.data);
            })
    }, []);

    useEffect(() => {
        fetch(urlBiereCommentaire)
            .then((response) => { return response.json() })
            .then((data) => {
                setCommentaires(data.data);
            })
            
        }, []);
    
    let commentairesDom = "";
    if(commentaires == 0){
        commentairesDom = "Aucun commentaires";
    }
    else {
        commentairesDom = "<h4>Commentaire" + (commentaires.length > 1 ? "s" : "") + "</h4>";
    }

    commentairesDom += commentaires.map((commentaire, index) => {
    return <p className='biere__commentaire' key={index}>{commentaire.commentaire} - <small>{commentaire.courriel}</small></p>
    })

    let blockAjoutCommentaire = "";
    let blockAjoutNote = "";

    if(props.courriel){
        console.log("usager est logged in");

        blockAjoutCommentaire = <div className='biere__blocAjoutCommentaire'>
                                    <textarea onBlur={seCommentaire} cols="30" rows="10" placeholder='Ajouter un commentaire'></textarea>
                                    <br/>
                                    <button onClick={soummetreCommentaire}>Soumettre</button>
                                </div>;

        blockAjoutNote = <div className='biere__blocNote'></div>;
    }

    function seCommentaire(e) {
        // console.log(e.target.value);
        setNouveauCommentaires(e.target.value);
    }

    async function soummetreCommentaire() {

        let oCommentaire = {
            commentaire: nouveauCommentaire,
            courriel: props.courriel
        }

        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('biero:biero')
            },
            body: JSON.stringify(oCommentaire)
        }

        let putCommentaire = await fetch(urlBiereCommentaire, options),
            getCommentaires = await fetch(urlBiereCommentaire);

        Promise.all([putCommentaire, getCommentaires])
            .then((response) => {
                return response[1].json();
            })
            .then((data) => {
                // console.log(data);
                setCommentaires(data.data);
            })
    }

    return(
        <article className='biere'>
            <div className='biere__infos'>
                <h2 className='biere__nom'>{biere?.nom}</h2>
                <span className='biere__brasserie'>Brasserie : {biere?.brasserie}</span>
                <p className='biere__description'>{biere?.description}</p>
                <div className='biere__metaData'>
                    {commentairesDom}

                    {blockAjoutCommentaire}
                    {blockAjoutNote}
                </div>
            </div>
            <div>
                <img className='biere__img' src={biere?.image} alt="{biere?.image}" />
            </div>
            
        </article>
    )
}