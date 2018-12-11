var DessinDAO = function () {

    this.recupererImage = function (actionAffichage){
        console.log("RecupererImage()");
        var xmlHttp = new XMLHttpRequest();
        var url=API_URL+"/image/reception";
        xmlHttp.open("GET", url);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var image = new Image();
                image.src = JSON.parse(xmlHttp.responseText).image;
                actionAffichage(image);
            }
        };
        xmlHttp.send(null);
    }


    this.envoyerImage = function(image) {
        console.log("EnvoieImage()");
        var xmlHttp = new XMLHttpRequest();
        var url = API_URL + "/image/envoie";
        xmlHttp.open("POST", url);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        //xmlHttp.setRequestHeader("cache-control", "no-cache");

        var body = '{ "image" : "' + image + '"';
        body+=', "joueur" : "'+JSON.parse(localStorage['utilisateur']).pseudo+'"';
        body+='}';
        xmlHttp.send(body);
    }

    this.recupererMotAleatoire = function (actionAffichage){
        console.log("RecupererMot()");
        var xmlHttp = new XMLHttpRequest();
        var url=API_URL+"/mot";
        xmlHttp.open("GET", url);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        xmlHttp.setRequestHeader("authentification", "paul");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var mot =  JSON.parse(xmlHttp.responseText).mot[0];
                actionAffichage(mot);
            }
        };
        xmlHttp.send(null);
    }

    this.savoirJoueurEnJeu = function (actionAffichage){
        console.log("RecupererJoueurEnJeu()");
        var xmlHttp = new XMLHttpRequest();
        var url=API_URL+"/jeu/joueur";
        xmlHttp.open("GET", url);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        xmlHttp.setRequestHeader("authentification", "paul");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

                var joueur =  JSON.parse(xmlHttp.responseText)["joueurEnJeu"];
                actionAffichage(joueur);
            }
        };
        xmlHttp.send(null);
    }
};
