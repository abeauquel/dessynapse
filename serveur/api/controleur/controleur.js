var utilisateurDAO = require('../donnee/UtilisateurDAO');
var fs = require('fs');

var data;
fs.readFile('api/ressource/ressource-mots.txt', 'utf8', function (err,rawData) {
    console.log("je commence à lire mon fichier");
    if (err) {
        return console.log(err);
    }
    data = rawData.split('\n');
    console.log("jai mes data")
});


exports.seConnecter = async function (requete, reponse) {
    try {
        let pseudoUtilisateur = requete.body[utilisateurDAO.NOM_CHAMP_PSEUDO];
        let passeUtilisateur = requete.body[utilisateurDAO.NOM_CHAMP_MOT_DE_PASSE];
        console.log(requete.body);
        const { rows : utilisateurs } = await utilisateurDAO.seConnecter(pseudoUtilisateur, passeUtilisateur);

        if(typeof utilisateurs !== 'undefined' && utilisateurs.length > 0){
            return reponse.status(200).send(utilisateurs[0]);
        }
        return reponse.status(204).send();
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
};

exports.postUtilisateur = async function (requete, reponse) {

    try {
        let pseudo = requete.body[utilisateurDAO.NOM_CHAMP_PSEUDO];
        let passe = requete.body[utilisateurDAO.NOM_CHAMP_MOT_DE_PASSE];
        let mail = requete.body[utilisateurDAO.NOM_CHAMP_MAIL];
        let telephone = requete.body[utilisateurDAO.NOM_CHAMP_TELEPHONE];
        let couleur = requete.body[utilisateurDAO.NOM_CHAMP_COULEUR];
        let dateNaissance = requete.body[utilisateurDAO.NOM_CHAMP_DATE_NAISSANCE];
        let nbVictoire = requete.body[utilisateurDAO.NOM_CHAMP_NB_VICTOIRE];
        console.log(pseudo);
        console.log(passe);

        if(!pseudo || !passe){
            return reponse.send('Pseudo ou mot de passe invalide');
        }
        const { rows : utilisateur } = await utilisateurDAO.insererUtilisateur(pseudo, passe, mail, telephone, couleur, nbVictoire, dateNaissance);

        return reponse.status(200).send({ 'message': 'Insertion réussie'});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

exports.retournerMotAleatoire = function (requete, reponse) {

    try {


        function randomInt (low, high) {
            console.log("je random un nombre");
            return Math.floor(Math.random() * (high - low) + low);
        }

        function getRandomLine(){
            console.log("je recupere ma ligne");
            /** On recupérer le mot et on enléve les tab et les espaces */
            return data[randomInt(0,data.length)].toString().replace(/[\t/\s]/g, '').split('\r\n');
        }


        return reponse.status(200).send({ mot: getRandomLine()});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}


exports.listerUtilisateurs = async function (requete, reponse) {

    try {

        const { rows : utilisateurs } = await utilisateurDAO.meilleurUtilisateurs();

        return reponse.status(200).send({ utilisateurs : utilisateurs});
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}