var VueJeuDeviner = (function () {
    var pagejeu = document.getElementById("page-jeu").innerHTML;

    var ancienX, ancienY, nouveauX, nouveauY = 0;
    var canvas, contexte, click, appuie = false;

    return function () {
        initialiser();

        this.afficher = function (image) {
            console.log("affichageVueDeviner()");
            contexte.drawImage(image, 0, 0);
        }

    }

    function initialiser(){
        console.log("initialisation()");
        document.getElementById("contenu").innerHTML = pagejeu;
        document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        canvas = document.getElementById("canvas-jeu");
        contexte = canvas.getContext("2d");
    }

    /*   function convertirEnImage() {
            var dataURL = canvas.toDataURL();
            document.getElementById("image").innerHTML = dataURL;
            send(dataURL);
        }

            function recupererImage(){
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", "http://54.39.145.59:8081/image/reception");
                xmlHttp.setRequestHeader("Content-Type", "application/json");
                //xmlHttp.setRequestHeader("cache-control", "no-cache");

                var stringAEnvoyer = null;

                xmlHttp.send(stringAEnvoyer);
                console.log("waiting for reponse");
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        afficherimage(xmlHttp.responseText);
                    }
                }
            }

            function afficherimage(imageBase64){
                console.log("affichageImage");
                var image = new Image();
                image.src = JSON.parse(imageBase64).image;
                console.log(image);
                contexte.drawImage(image, 0, 0);
            }*/

})();
