var VueConnexion = (function () {
    var pageConnexion = document.getElementById("page-connexion").innerHTML;

    return function (listenerConnexion) {

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pageConnexion;
            var formulaireAjouter = document.getElementById("formulaire-connexion");

            formulaireAjouter.addEventListener("submit", connexion);

            //console.log(formData);
        };

        var connexion = function (evenement) {

            evenement.preventDefault();

            var utilisateur = document.getElementById("utilisateur").value;
            var motDePasse = document.getElementById("mot_de_passe").value;

            console.log("user: "+utilisateur)
            console.log("password: "+motDePasse)

            var utilisateurDAO = new UtilisateurDAO();
            utilisateurDAO.connexion(utilisateur, motDePasse, callback)
        }

        var callback = function (reponse) {
            document.location.href = "#menu"
        }

    }
})();