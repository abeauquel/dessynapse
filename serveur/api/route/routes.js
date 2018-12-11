'use strict';
var controleur = require('../controleur/controleurPrincipal');

module.exports = function(app) {
    var motDePasse=process.env.API_AUTH;

    app.post('/connexion' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage connexion : connexion d un utilisateur');
       return controleur.seConnecter(req, res);
    });

    app.post('/utilisateur' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage inscription : post d un utilisateur');
        return controleur.insererUtilisateur(req, res);
    });

    app.put('/utilisateur/couleur' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage utilisateur : modification de la couleur d un utilisateur');
        return controleur.modifierCouleurUtilisateur(req, res);
    });

    app.get('/mot' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse")
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage mot : retourne un mot aléatoire');
        return controleur.retournerMotAleatoire(req, res);
    });


    app.get('/utilisateurs' , (req, res) => {
        if(req.headers.authentification !== motDePasse){
            console.log("Routage connexion : accees refuse");
            return res.status(401).send("Accees refuse");
        }
        console.log('Routage utilisateur : retourne les utilisateur');
        return controleur.listerUtilisateurs(req, res);
    });
};