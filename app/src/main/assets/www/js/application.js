(function () {
    var instance = this;

    var initialiser = function()
	{
	    instance.listeGagnants = [];
	    instance.utilisateurDAO = new UtilisateurDAO();
		window.addEventListener("hashchange", naviguer);
		naviguer();
	}
	function callBackUtilidzteur(reponse){
        var vueScores = new VueScores();
        instance.listeGagnants=reponse.utilisateurs;
        console.log("instanceListe "+instance.listeGagnants)
        vueScores.afficher(instance.listeGagnants);

    };

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
            instance.utilisateurDAO.lister(callBackUtilidzteur);

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
