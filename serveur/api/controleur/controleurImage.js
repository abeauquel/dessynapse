//var mysql = require('../donnee/mysql').pool;
var moment = require('moment');
var controleurChat = require('../controleur/controleurChat');
/***
 * enregistrer une image
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
let joueurEnJeu=null;
let dateDerniereImage=moment();
let image = {};

exports.recevoirImage = async function(requete, reponse) {
    try {
	image = requete.body.image;
	joueurEnJeu = requete.body.joueur;
	dateDerniereImage = moment();
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

exports.savoirJoueurEnJeu = function(requete, reponse) {
    try {
        if(moment().diff(dateDerniereImage, 'seconds') > 10){
            joueurEnJeu=null;
            controleurChat.toutReintialiser("Remise à zero du chat");
            return reponse.status(200).send({ joueurEnJeu });
        }else {
            return reponse.status(200).send({ joueurEnJeu });
        }

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