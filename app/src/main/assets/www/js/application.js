(function () {
    var instance = this;

	var initialiser = function()
	{
	    var utilisateurDAO = new UtilisateurDAO();
	    this.listeGagnants = utilisateur.listerGagnants();
		window.addEventListener("hashchange", naviguer);
		naviguer();
	}

    var naviguer = function () {
        var hash = window.location.hash;

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
            vueScores.afficher(tableauGagnants);
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
    };


    var actionConnexion = function () {
        var formData = new FormData(document.querySelector('form'))

        console.log(formData);
        //connexion();
    }

    initialiser();
})();
