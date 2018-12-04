var VueJeuDeviner = (function () {
    var pagejeu = document.getElementById("page-jeu").innerHTML;

    var ancienX, ancienY, nouveauX, nouveauY = 0;
    var canvas, contexte, click, appuie = false;

    /** Chat */
    var pageChat = document.getElementById("page-chat").innerHTML;
    var utilisateurActuel = "Alex"; //TODO à gérer

    return function (actionEnregisterMessage) {
        initialiser();

        this.afficher = function (image) {
            console.log("affichageVueDeviner()");
            contexte.clearRect(0, 0, canvas.width, canvas.height);
            contexte.beginPath();

            contexte.drawImage(image, 0, 0);

        }

        this.afficherChat= function (listeMessage) {
            console.log("affichageVueChat()");

            var groupeChat="";
            if(!listeMessage || listeMessage.length < 1)
                groupeChat+="<p> Aucun message pour le moment</p>";
            for (position in listeMessage){
                var message=listeMessage[position];
                groupeChat+="<div class=\"card\">";
                groupeChat+="<div class=\"card-body\">";
                if (utilisateurActuel !== message.pseudo){
                    groupeChat+="<h6 class=\"card-subtitle mb-2 text-muted text-left\">"+message.pseudo+"</h6>";
                    groupeChat+="<p class='card-text float-left'>"+message.valeur +"</p>";
                }else {
                    groupeChat+="<h6 class=\"card-subtitle mb-2 text-muted text-right\">"+message.pseudo+"</h6>";
                    groupeChat+="<p class='card-text float-right'>"+message.valeur +"</p>";
                }
                groupeChat+="</div>";
                groupeChat+="</div>";
            }
            document.getElementById("groupe-chat").innerHTML = groupeChat;
            let boutonEnvoyer = document.getElementById("inserer-message");
            boutonEnvoyer.addEventListener("click", recupererMessage);
        }

        var recupererMessage = function () {
            var valeur = document.getElementById("input-message").value;
            var utilisateur = utilisateurActuel;//TODO à changer aussi
            var date = new Date();
            actionEnregisterMessage(utilisateur, valeur, date);
        }

    }



    function initialiser(){
        console.log("initialisation()");
        document.getElementById("contenu").innerHTML = pagejeu;
        document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
        canvas = document.getElementById("canvas-jeu");
        contexte = canvas.getContext("2d");

        document.getElementById("containeur-chat").innerHTML = pageChat;

    }

})();
