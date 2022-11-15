import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailBiere.css';

export default function DetailBiere(props) {
    const params = useParams();
    const urlBiere = `http://127.0.0.1:8000/webservice/php/biere/${params.id}`,
          urlBiereCommentaire = `${urlBiere}/commentaire`;
    const [biere, setBiere] = useState({});
    const [commentaires, setCommentaires] = useState([]);

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

    const commentairesDom = commentaires.map((commentaire, index) => {
        return <p key={index}>{commentaire.commentaire}<small>{commentaire.courriel}</small></p>
    })

    let blockAjoutCommentaire = "";
    let blockAjoutNote = "";

    if(props.courriel){
        console.log("usager est logged in");

        blockAjoutCommentaire = <div>
                                    <textarea cols="30" rows="10" placeholder='Ajouter un commentaire'></textarea>
                                    <br/>
                                    <button>Soumettre</button>
                                </div>;

        blockAjoutNote = <div></div>;
    }

    return(
        <article>
            <div>
                <h2>{biere?.nom}</h2>
                <span>{biere?.brasserie}</span>
                <p>{biere?.description}</p>
                {commentairesDom}

                {blockAjoutCommentaire}
                {blockAjoutNote}
            </div>
        </article>
    )
}