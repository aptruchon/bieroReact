import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailBiere.css';
import imageBiere from './biere.jpg';
import NotesEtoiles from "../NotesEtoiles/NotesEtoiles";

export default function DetailBiere(props) {
    // Mettre les paramètres de l'url dans une variable
    const params = useParams();
    const urlBiere = `http://127.0.0.1:8000/webservice/php/biere/${params.id}`,
          urlBiereCommentaire = `${urlBiere}/commentaire`,
          urlBiereNote = `${urlBiere}/note`;

    // Genres de déclaration de variables en attente avec fonctions associés pour leurs attribuer des valeurs quand on les appellent
    const [biere, setBiere] = useState({});
    const [commentaires, setCommentaires] = useState([]);
    const [note, setNote] = useState({});
    const [nouvelleNote, setNouvelleNote] = useState("");
    const [nouveauCommentaire, setNouveauCommentaires] = useState("");
    // Attribution d'une image par défaut pour les bières
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

    useEffect(() => {
        fetch(urlBiereNote)
            .then((response) => { return response.json() })
            .then((data) => {
                setNote(data.data);
            })
    }, []);
    
    // Gestion du titre de la section des commentaires
    let enteteCommentairesDom = "";
    if(commentaires == 0){
        enteteCommentairesDom = "Aucun commentaires";
    }
    else {
        enteteCommentairesDom = <h4 className='biere__titreCommentaires'>Commentaire{(commentaires.length > 1 ? "s" : "")}</h4>;
    }

    
    // Création du dom de la note de la biere
    const noteDom = <>
                        <h4 className='biere__titreNote'>Note moyenne</h4>
                        <p className='biere__note'>{parseFloat(note.note).toFixed(2)}/5 <small>({note.nombre})</small></p>
                    </>
    
    // Création du dom des commentaires en fonction du nombre de commentaires
    const commentairesDom = commentaires.map((commentaire, index) => {
    return <p className='biere__commentaire' key={index}>{commentaire.commentaire} - <small>{commentaire.courriel}</small></p>
    })

    //Création du dom pour l'ajout de commentaires et de note
    let blockAjoutCommentaire = "";
    let blockAjoutNote = "";

    if(props.courriel){
        // console.log("usager est logged in");
        blockAjoutCommentaire = <div className='biere__blocAjoutCommentaire'>
                                    <textarea onBlur={getNouveauCommentaire} cols="30" rows="10" placeholder='Ajouter un commentaire'></textarea>
                                    <br/><br/>
                                    <button className='biere__boutonCommentaire' onClick={soummettreCommentaire}>Soumettre</button>
                                </div>;

        blockAjoutNote = <div onMouseDown={getNouvelleNote} onMouseUp={soummettreNote} className='biere__blocNote'><h4 className='biere__titreNote'>Votre note :</h4><NotesEtoiles /></div>;
    }

    /* Aller chercher le nouveau commentaire entré */
    function getNouveauCommentaire(e) {
        setNouveauCommentaires(e.target.value);
        console.log(nouveauCommentaire);
        
        // Vider le textarea
        e.target.value = "";
    }
    
    /* Aller chercher le nouvelle note entrée */
    function getNouvelleNote(e) {
        console.log(`Note entrée : ${e.target.dataset.jsValue}`);
        setNouvelleNote(e.target.dataset.jsValue);
    }

    async function soummettreCommentaire() {
        let oCommentaire = {
            commentaire: nouveauCommentaire,
            courriel: props.courriel
        }
        console.log(oCommentaire);

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
                setCommentaires(data.data);
            })
    }

    async function soummettreNote() {
        let oNote = {
            note: nouvelleNote,
            courriel: props.courriel
        }

        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('biero:biero')
            },
            body: JSON.stringify(oNote)
        }

        let putNote = await fetch(urlBiereNote, options),
            getNote = await fetch(urlBiereNote);

        Promise.all([putNote, getNote])
            .then((response) => {
                return response[1].json();
            })
            .then((data) => {
                // console.log(data);
                setNote(data.data);
            })
    }

    return(
        <article className='biere'>
            <div className='biere__infos'>
                <h2 className='biere__nom'>{biere?.nom}</h2>
                <span className='biere__brasserie'>Brasserie : {biere?.brasserie}</span>
                <p className='biere__description'>{biere?.description}</p>
                <div className='biere__metaData'>
                    {noteDom}
                    {blockAjoutNote}
                    
                    {enteteCommentairesDom}
                    {commentairesDom}

                    {blockAjoutCommentaire}
                </div>
            </div>
            <div className='biere__img-conteneur'>
                <img className='biere__img' src={biere?.image} alt="{biere?.image}" />
            </div>
            
        </article>
    )
}