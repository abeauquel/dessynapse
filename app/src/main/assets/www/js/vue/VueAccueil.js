var VueAccueil = (function () {

    var pageAccueil = document.getElementById("page-accueil").innerHTML;

    return function (actionNavigationJouer) {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pageAccueil;
            var granimInstance = new Granim({
                element: '#canvas-basic',
                direction: 'left-right',
                isPausedWhenNotInView: true,
                states : {
                    "default-state": {
                        gradients: [
                            ['#ff9966', '#ff5e62'],
                            ['#00F260', '#0575E6'],
                            ['#e1eec3', '#f05053']
                        ]
                    }
                }
            });
        };
    }

})();