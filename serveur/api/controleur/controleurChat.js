var lodash = require('lodash');
var moment = require('moment');
var controleurPrincipal = require('../controleur/controleurPrincipal');
var utilisateurDAO = require('../donnee/UtilisateurDAO');

let listeChat=[];
let nombreMessage=0;
let listeJoueurs=[];
let nomBot="Bot Dessynapse";
var finDuJeu=false;
/***
 * Renvoie le chat avec tous les messages
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
var retournerChat = async function (requete, reponse) {
    try {
        let utilisateur = requete.params.utilisateur;
        if(!finDuJeu)
        ajouterJoueur(utilisateur);
        console.log("retournerChat()");
        return reponse.status(200).send({ listeMessage : listeChat});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

/***
 * Suppression des joueurs inactifs
 */
async function verififierJoueursActif() {
//TODO Suppression des joueurs inactifs
}

async function verifierMessage(message){
    var text = message.valeur.toLowerCase();
    if(text.includes(controleurPrincipal.getMot())){

        toutReintialiser(" "+message.pseudo + " a gagné en trouvant le mot "+controleurPrincipal.getMot()+" ! \n Veuillez quitter le jeu et attendre 10 secondes pour rejouer.");
        utilisateurDAO.incrementerVictoire(message.pseudo);
        finDuJeu=true;
        controleurPrincipal.reintialiserMot();
        setTimeout(function () {
            finDuJeu=false;
            toutReintialiser("C'est reparti pour une nouvelle partie !!");
        },10000)
    }
}

/***
 * Ajout d'un nouveau joueur, s'il est déja ajouté on remet à zero sa date
 * @param nomJoueur
 * @returns {Promise<void>}
 */
async function ajouterJoueur(nomJoueur) {
    let index =lodash.findIndex(listeJoueurs,{'joueur':nomJoueur});
    console.log(index);
    if(index <0){
        console.log("ajoutDunNouveauJoueur()");
        listeJoueurs.push({'joueur':nomJoueur, 'date':moment()});
        listeChat.push({
            "pseudo": nomBot,
            "valeur": "Bonjour "+nomJoueur+" !",
            "date": new Date()
        });
        nombreMessage+=1;
    }else {
        listeJoueurs[index].date=moment();
    }
}
/***
 * Insere un nouveau message dans le chat
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
var insererMessage = async function (requete, reponse) {

    try {
        console.log("insererMessage()");

        let message = requete.body.message;
        message.id= nombreMessage;
        nombreMessage+=1;
        if(message){
            listeChat.push(message);
            verifierMessage(message);
            return reponse.status(200).send({ listeMessage : listeChat});
        }
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

/***
 * Reintialise le chat pour une nouvelle partie
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */
var reintialiserChat = async function (requete, reponse) {

    try {
        toutReintialiser();
        console.log("reintialiserChat()");
        return reponse.status(200).send({ listeMessage : listeChat});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

var toutReintialiser = function(message){
    listeChat=[];
    nombreMessage=0;
    listeJoueurs=[];
    listeChat.push({
        "pseudo": nomBot,
        "valeur": message,
        "date": new Date()
    });
}
module.exports={reintialiserChat, insererMessage, retournerChat, toutReintialiser};