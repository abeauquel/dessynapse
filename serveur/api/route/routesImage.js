'use strict';
var controleurImage = require('../controleur/controleurImage.js');
let image = undefined;

module.exports = function(app) {
var motDePasse=process.env.MOT_DE_PASSE;

    // pays Routes
    app.post('/image/envoie' , (req, res) => {
	
        /*if(req.headers.authentification !== motDePasse){
            console.log("accées refuse");
            return res.status(401).send("Acces refuse");
        }*/
        console.log('Routage image : reception de l image');
       return controleurImage.recevoirImage(req, res);
    });
};
