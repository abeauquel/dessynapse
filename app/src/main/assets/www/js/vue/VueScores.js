var VueScores = (function () {

    var pageScores = document.getElementById("page-scores").innerHTML;

    return function () {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageScores;
        }
    }
})();