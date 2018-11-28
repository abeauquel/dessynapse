//var mysql = require('../donnee/mysql').pool;

/***
 * enregistrer une image
 * @param requete
 * @param reponse
 * @returns {Promise<*|void>}
 */

let image = {};

exports.recevoirImage = async function(requete, reponse) {
    try {
	image = requete.body.image;
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

