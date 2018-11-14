var VueConnexion = (function () {
    var pageConnexion = document.getElementById("page-connexion").innerHTML;

    return function (actionNavigationConnexion) {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageConnexion;
        }
    }
})();