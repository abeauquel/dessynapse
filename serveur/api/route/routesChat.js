'use strict';
var controleur = require('../controleur/controleurChat');

module.exports = function(app) {
    var motDePasse=process.env.API_AUTH;

    app.post('/chat/reintialiser' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage chat : reintilisation du chat');
        return controleur.reintialiserChat(req, res);
    });

    app.post('/chat' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage chat : post d un message dans le chat');
        return controleur.insererMessage(req, res);
    });

    app.get('/chat' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage chat : retourne le chat');
        return controleur.retournerChat(req, res);
    });

};