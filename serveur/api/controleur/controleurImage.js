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

/*	let nom = requete.body.produit.nom;
	let description = requete.body.produit.description ;
	let prix = requete.body.produit.prix ;
	let id_categorie = requete.body.produit.categorie.id ;
        let champs={nom:nom, description:description, prix:prix, id_categorie:id_categorie};*/
	
/*        mysql.getConnection(function(err, conn) {
            if (err) throw err;
            conn.query(SELECT_PAYS, function (err, result, field) {
                if (err) throw err;
                console.log("liste des pays");
		console.log(result);
                return reponse.status(200).send({ pays: result });
            });
        });*/
	console.log(image);
	image = requete.body;
	let result = "saved";

        return reponse.status(200).send({ result });
    } catch(error) {
        console.log(error);
        return reponse.status(400).send(error);
    }
}

