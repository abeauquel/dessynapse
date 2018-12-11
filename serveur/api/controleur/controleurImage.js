//var mysql = require('../donnee/mysql').pool;

/***
 * enregistrer une image
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
let joueurEnJeu=null;
let image = {};

exports.recevoirImage = async function(requete, reponse) {
    try {
	image = requete.body.image;
	joueurEnJeu = requete.body.joueur;
	let result = "saved";

        return reponse.status(200).send({ result });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.envoyerImage = async function(requete, reponse) {
    try {
        return reponse.status(200).send({ image });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.savoirJoueurEnJeu = async function(requete, reponse) {
    try {
        return reponse.status(200).send({ joueurEnJeu });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.reintialiserJeu = async function(requete, reponse) {
    try {
        joueurEnJeu = null;
        return reponse.status(200).send( "Jeu arrété" );
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}