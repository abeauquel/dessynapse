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
            var vueJeuDessiner = new VueJeuDessiner(instance.dessinDAO.envoyerImage);
            vueJeuDessiner.afficher();
            instance.dessinDAO.recupererMotAleatoire(vueJeuDessiner.setMot);

           // intervalJeu = setInterval(vueJeuDessiner.envoyerEnImage, 50);
            //vueJeu.initialiser();
        }
        else if (hash.match(/^#jouer-deviner/)) {

            var vueJeuDeviner = new VueJeuDeviner(instance.chatDAO.insererMessage);

            instance.dessinDAO.recupererImage(vueJeuDeviner.afficher);
            function recupererImage(callback){ instance.dessinDAO.recupererImage(callback);}
            intervalJeu=setInterval(recupererImage,100, vueJeuDeviner.afficher);

            instance.chatDAO.actualiserChat(vueJeuDeviner.afficherChat);
            function actualisation(callback){instance.chatDAO.actualiserChat(callback);}
            intervalChat= setInterval ( actualisation, 1000 , vueJeuDeviner.afficherChat);
        }
    };


    var actionConnexion = function () {
        var formData = new FormData(document.querySelector('form'));

        document.location.href = "#menu";

        console.log("redirection menu?")
    };

    var actionAjouterCompte = function(pseudo,password,mail,numero,date_de_naissance,couleur){
        var callback = function () {
            window.location.hash = "#connexion";
        };
        utilisateurDAO.ajouter(pseudo,password,mail,numero,date_de_naissance,couleur, callback);
    };

    initialiser();
})();
