var VueMenu = (function () {
    var pageMenu = document.getElementById("page-menu").innerHTML;

    return function (actionNavigationConnexion) {

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pageMenu;
        }
    }
})();