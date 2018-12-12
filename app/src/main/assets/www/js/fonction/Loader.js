var Loader = (function () {
    var pageLoader = document.getElementById("page-loader").innerHTML;

    return function () {

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pageLoader;
        };
    }
})();