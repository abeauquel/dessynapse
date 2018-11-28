var VueCreerCompte = (function () {
    var pageCreerCompte = document.getElementById("page-creer-compte").innerHTML;

    return function (actionNavigationConnexion) {

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pageCreerCompte;
        }
    }
})();