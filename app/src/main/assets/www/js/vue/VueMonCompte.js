var VueMonCompte = (function () {
    var pageMonCompte = document.getElementById("page-mon-compte").innerHTML;

    return function (actionChangerCompte) {

        this.afficher = function (utilisateur) {
            document.getElementById("contenu").innerHTML = pageMonCompte;

            document.getElementById("formulaire-mon-compte").addEventListener("submit", changerCouleur);

            document.getElementById("info-utilisateur").innerHTML =
                '<h3 class="mt-3">Pseudo :  <i><b>' + utilisateur.pseudo + '</b></i></h3>' +
                '<h3 class="mt-3">Mail :  <i><b>' + utilisateur.mail + '</b></i></h3>' +
                '<h3 class="mt-3">Numero :  <i><b>' + utilisateur.telephone + '</b></i></h3>' +
                '<h3 class="mt-3">Date de naissance : <i><b>' + utilisateur.date_naissance + '</b></i></h3>';
                document.getElementById("couleur").value = utilisateur.couleur;
        };

        var changerCouleur = function (evenement) {
            evenement.preventDefault();

            var couleur = document.getElementById("couleur").value;

            actionChangerCompte(couleur);
        }
    }
})();