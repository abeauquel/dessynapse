var VueJeu = (function () {
    var pagejeu = document.getElementById("page-jeu").innerHTML;

    return function (actionNavigationConnexion) {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pagejeu;
        }
    }
})();