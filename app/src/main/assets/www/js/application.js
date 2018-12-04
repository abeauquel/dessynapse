(function () {
    var instance = this;
    var intervalId=0;
    var vueAccueil = new VueAccueil();
    var initialiser = function()
    {
        instance.utilisateurDAO = new UtilisateurDAO();
        instance.dessinDAO = new DessinDAO();
        window.addEventListener("hashchange", naviguer);
        naviguer();
    }

    var naviguer = function () {
        var hash = window.location.hash;
        clearInterval(intervalId);
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
            var vueJeuDeviner = new VueJeuDeviner();
            instance.dessinDAO.recupererImage(vueJeuDeviner.afficher);
            function recupererImage(callback){ instance.dessinDAO.recupererImage(callback);}
            intervalId=setInterval(recupererImage,1000, vueJeuDeviner.afficher);
        }
        else if (hash.match(/^#chat/)) {
            instance.chatDAO = new ChatDAO();
            var vueChat = new VueChat(instance.chatDAO.insererMessage);
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
