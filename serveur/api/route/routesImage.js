'use strict';
var controleurImage = require('../controleur/controleurImage.js');
let image = undefined;

module.exports = function(app) {
var motDePasse=process.env.MOT_DE_PASSE;

    // pays Routes
    app.post('/image/envoie' , (req, res) => {
	
        console.log('Routage image : reception de l image');
       return controleurImage.recevoirImage(req, res);
    });

    app.get('/image/reception' , (req, res) => {
	
        console.log('Routage image : envoie de l image');
       return controleurImage.envoyerImage(req, res);
    });

};
