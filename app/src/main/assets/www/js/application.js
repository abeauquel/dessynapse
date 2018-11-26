(function()
{
	var instance = this;

	var initialiser = function()
	{
		window.addEventListener("hashchange", naviguer);
		naviguer();
	}

	var naviguer = function()
	{
		var hash = window.location.hash;

		if(!hash){
			var vueAccueil = new VueAccueil();
            vueAccueil.afficher();
		}
		else if(hash.match(/^#connexion/)){
            var vueConnexion = new VueConnexion();
            vueConnexion.afficher();
        }
        else if(hash.match(/^#creer-compte/)){
            var vueConnexion = new VueCreerCompte();
            vueConnexion.afficher();
        }
        else if(hash.match(/^#menu/)){
            var vueMenu = new VueMenu();
            vueMenu.afficher();
        }
        else if(hash.match(/^#jouer/)){
            var vueJeu = new VueJeu();
            vueJeu.afficher();
	    //vueJeu.initialiser();
        }
	};
	
	initialiser();
})();
