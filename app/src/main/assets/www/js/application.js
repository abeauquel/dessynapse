(function () {
    var instance = this;
    var intervalJeu=0;
    var intervalChat=1;
    var vueAccueil = new VueAccueil();
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

        if (!hash) {
            vueAccueil.afficher();
        }
        else if (hash.match(/^#connexion/)) {
            var vueConnexion = new VueConnexion(actionConnexion);
            vueConnexion.afficher();
        }
        else if (hash.match(/^#creer-compte/)) {
            var vueConnexion = new VueCreerCompte();
            vueConnexion.afficher();
        }
        else if (hash.match(/^#menu/)) {
            var vueMenu = new VueMenu();
            vueMenu.afficher();
        }  else if(hash.match(/^#scores/)){
            var vueScores = new VueScores();
            var listeGagnants = instance.utilisateurDAO.lister(vueScores.afficher);

        }
        else if(hash.match(/^#jouer-dessiner/)){
            var vueJeuDessiner = new VueJeuDessiner();
            vueJeuDessiner.afficher();
            //vueJeu.initialiser();
        }
        else if (hash.match(/^#jouer-deviner/)) {
            var vueJeuDeviner = new VueJeuDeviner(instance.chatDAO.insererMessage);
            instance.dessinDAO.recupererImage(vueJeuDeviner.afficher);
            function recupererImage(callback){ instance.dessinDAO.recupererImage(callback);}
           // intervalJeu=setInterval(recupererImage,1000, vueJeuDeviner.afficher);
            instance.chatDAO.actualiserChat(vueJeuDeviner.afficherChat);
            function actualisation(callback){instance.chatDAO.actualiserChat(callback);}

            intervalChat= setInterval ( actualisation, 1000 , vueJeuDeviner.afficherChat);
        }
        else if (hash.match(/^#chat/)) {

            var vueChat = new VueChat(instance.chatDAO.insererMessage);

        }
    };


    var actionConnexion = function () {
        var formData = new FormData(document.querySelector('form'))

        console.log(formData);
        //connexion();
    }

    initialiser();
})();
