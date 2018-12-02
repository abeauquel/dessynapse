(function () {
    var instance = this;
    var estEnJeu=false;
    var intervalId=0;
    var initialiser = function()
    {
        instance.utilisateurDAO = new UtilisateurDAO();

        window.addEventListener("hashchange", naviguer);
        naviguer();
    }

    var naviguer = function () {
        var hash = window.location.hash;
        estEnJeu = false;
        clearInterval(intervalId);

        if (!hash) {
            var vueAccueil = new VueAccueil();
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
            var vueJeuDeviner = new VueJeuDeviner();
            vueJeuDeviner.afficher();
            //vueJeu.initialiser();
        }
        else if (hash.match(/^#chat/)) {
            estEnJeu = true;
            instance.chatDAO = new ChatDAO();
            var vueChat = new VueChat();
            instance.chatDAO.actualiserChat(vueChat.afficher);

            function actualisation(callback){instance.chatDAO.actualiserChat(callback);}

            intervalId= setInterval ( actualisation, 1000 , vueChat.afficher);
        }
    };


    var actionConnexion = function () {
        var formData = new FormData(document.querySelector('form'))

        console.log(formData);
        //connexion();
    }

    initialiser();
})();
