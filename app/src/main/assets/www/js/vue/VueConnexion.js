var VueConnexion = (function () {
    var pageConnexion = document.getElementById("page-connexion").innerHTML;

    return function (actionConnexion) {
        checkEstConnecte();

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pageConnexion;
            var formulaireAjouter = document.getElementById("formulaire-connexion");

            formulaireAjouter.addEventListener("submit", connexion);
        };

        var connexion = function (evenement) {
            evenement.preventDefault();

            var utilisateur = document.getElementById("utilisateur").value;
            var motDePasse = MD5(document.getElementById("mot_de_passe").value);

            console.log("user: "+utilisateur)
            console.log("password: "+motDePasse)

            var utilisateurDAO = new UtilisateurDAO();
            utilisateurDAO.connexion(utilisateur, motDePasse, callbackConnexion)
        }

        var callbackConnexion = function (reponse) {
            console.log("reponse "+reponse);
            localStorage['utilisateur'] = reponse;

            actionConnexion();
        }
    }
})();