(function () {
    var instance = this;
    var intervalJeu=0;
    var intervalChat=1;

    var vueAccueil = new VueAccueil();
    var vueMenu = new VueMenu();

    var initialiser = function()
    {
        instance.utilisateurDAO = new UtilisateurDAO();
        instance.dessinDAO = new DessinDAO();
        instance.chatDAO = new ChatDAO();
        window.addEventListener("hashchange", naviguer);
        naviguer();
    }

    var naviguer = function () {
        var hash = window.location.hash;
        clearInterval(intervalJeu);
        clearInterval(intervalChat);

	    vueAccueil.detruireInstance();
	    vueMenu.detruireInstance();

        if (!hash) {
            vueAccueil.afficher();
        }
        else if (hash.match(/^#connexion/)) {
            var vueConnexion = new VueConnexion(actionConnexion);
            vueConnexion.afficher();
        }
        else if (hash.match(/^#creer-compte/)) {
            var vueCreerCompte = new VueCreerCompte(actionAjouterCompte);
            vueCreerCompte.afficher();
        }
        else if (hash.match(/^#menu/)) {
            vueMenu.afficher();
        }  else if(hash.match(/^#scores/)){
            var vueScores = new VueScores();
            instance.utilisateurDAO.lister(vueScores.afficher);
        }
        else if(hash.match(/^#jouer-dessiner/)){
            instance.dessinDAO.savoirJoueurEnJeu(verifierSiJoueurPeutDessiner);
        }
        else if (hash.match(/^#jouer-deviner/)) {
            instance.dessinDAO.savoirJoueurEnJeu(verifierSiJoueurPeutDeviner);
        }
        else if (hash.match(/^#mon-compte/)) {
            var callbackMonCompte = function(utilisateur){
                console.log("callback user");
                var vueMonCompte = new VueMonCompte();
                vueMonCompte.afficher(utilisateur);
            }

            utilisateurDAO.getUtilisateur(callbackMonCompte)
        }
    };
    /***
     * On vérifie si quelqu'un n'est pas déja en train de dessiner
     * @param nomJoueur
     */
    var verifierSiJoueurPeutDessiner = function (nomJoueur) {

        if(nomJoueur != null && nomJoueur != JSON.parse(localStorage['utilisateur']).pseudo){
            alert("Désolé, "+nomJoueur+ " est déja en train de dessiner");
            window.location.hash= "#menu";
        }else {
            lancementJeuDessiner();
        }
    }

    /**
     * On vérifie si quelqu'un est bien en train dessiner
     * @param nomJoueur
     */
    var verifierSiJoueurPeutDeviner = function (nomJoueur) {

        if(nomJoueur === null){
            alert("Impossible de jouer, personne n'est en train de dessiner");
            window.location.hash= "#menu";
        }else if(nomJoueur === JSON.parse(localStorage['utilisateur']).pseudo){
            alert("Impossible de deviner, tu es déjà en train de dessiner. Attends la fin de la partie ou 10 secondes si tu veux abandonner");
            window.location.hash= "#menu";
        }
        else {
            lancementJeuDeviner();
        }
    }

    var actionConnexion = function () {
        var formData = new FormData(document.querySelector('form'));

        document.location.href = "#menu";

        console.log("redirection menu?")
    };

    var actionAjouterCompte = function(pseudo,password,mail,numero,date_de_naissance,couleur){
        var callback = function () {
            window.location.hash = "#connexion";
        };

        var echec = function(pseudo,password,mail,numero,date_de_naissance,couleur){
            var vueCreerCompte = new VueCreerCompte();
            vueCreerCompte.reafficher(pseudo,password,mail,numero,date_de_naissance,couleur);
        };

        utilisateurDAO.ajouter(pseudo,password,mail,numero,date_de_naissance,couleur, callback,echec);
    };

    var lancementJeuDessiner= function(){
        var vueJeuDessiner = new VueJeuDessiner(instance.dessinDAO.envoyerImage);
        vueJeuDessiner.afficher();
        instance.dessinDAO.recupererMotAleatoire(vueJeuDessiner.setMot);

        intervalJeu = setInterval(vueJeuDessiner.envoyerEnImage, 1000);
    };

    var lancementJeuDeviner = function(){
        var vueJeuDeviner = new VueJeuDeviner(instance.chatDAO.insererMessage);

        instance.dessinDAO.recupererImage(vueJeuDeviner.afficher);
        function recupererImage(callback){ instance.dessinDAO.recupererImage(callback);}
        intervalJeu=setInterval(recupererImage,100, vueJeuDeviner.afficher);

        instance.chatDAO.actualiserChat(vueJeuDeviner.afficherChat);
        function actualisation(callback){instance.chatDAO.actualiserChat(callback);}
        intervalChat= setInterval ( actualisation, 1000 , vueJeuDeviner.afficherChat);
    };

    initialiser();
})();
