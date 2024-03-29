var moment = require('moment');
var controleurChat = require('../controleur/controleurChat');
var utilisateurDAO = require('../donnee/UtilisateurDAO');

var messageFermetureBot=[
    " Il était temps !",
    " Les joueurs parlent trop ...",
    " C'est tout propre !",
    " C'est moi qui doit tout faire ici tout ici :-("
];
let joueurEnJeu=null;
let dateDerniereImage=moment();
let image = {};
let finDuJeu=false;
/***
 * enregistrer une image
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
exports.recevoirImage = async function(requete, reponse) {
    try {
        image = requete.body.image;
        joueurEnJeu = requete.body.joueur;
        dateDerniereImage = moment();

        return reponse.status(200).send({ finJeu:controleurChat.getFinDuJeu() });
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
            controleurChat.toutReintialiser("J'ai vidé le chat,"+messageFermetureBot[Math.floor(Math.random()*messageFermetureBot.length)]);
            return reponse.status(200).send({ joueurEnJeu });
        }else {
            return reponse.status(200).send({ joueurEnJeu });
        }

    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.jeuGagner = async function(requete, reponse) {
    try {
        let gagnant = requete.body.gagnant;
        if(gagnant){
            controleurChat.toutReintialiser(" "+gagnant+" a gagné !");
            utilisateurDAO.incrementerVictoire(gagnant);
            return reponse.status(200).send( "Ok" );
        }
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.reintialiserJeu = async function(requete, reponse) {
    try {
        joueurEnJeu = null;
        controleurChat.toutReintialiser("J'ai vidé le chat,"+messageFermetureBot[Math.floor(Math.random()*messageFermetureBot.length)]);
        return reponse.status(200).send( "Jeu arrété,"+messageFermetureBot[Math.floor(Math.random()*messageFermetureBot.length)] );
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}