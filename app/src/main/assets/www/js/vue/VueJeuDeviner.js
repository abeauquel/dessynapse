var VueJeuDeviner = (function () {
    var pagejeu = document.getElementById("page-jeu").innerHTML;

    var ancienX, ancienY, nouveauX, nouveauY = 0;
    var canvas, contexte, click, appuie = false;

    /** Chat */
    var pageChat = document.getElementById("page-chat").innerHTML;
    var utilisateurActuel = "Anonyme";

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
                var date = new Date(message.date);
                var dateAffichage = date.getHours()+"h" +date.getMinutes()+"m"+date.getSeconds()+"s";
                groupeChat+="<div class=\"card\">";
                groupeChat+="<div class=\"card-body\">";
                if (utilisateurActuel !== message.pseudo){
                    groupeChat+="<div class='card-subtitle mb-2 text-muted text-center row'>";
                    groupeChat+="<div class='col-6 text-left'>"+message.pseudo+"</div>";
                    groupeChat+="<div class='col-6 text-right'>"+dateAffichage+"</div>";
                    groupeChat+="</div>";

                    groupeChat+="<p class='card-text '>"+message.valeur +"</p>";

                }else {
                    groupeChat+="<div class='card-subtitle mb-2 text-muted text-center row'>";
                    groupeChat+="<div class='col-6 text-left'>"+dateAffichage+"</div>";
                    groupeChat+="<div class='col-6 text-right'>"+message.pseudo+"</div>";
                    groupeChat+="</div>";
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
            var utilisateur = utilisateurActuel;
            var date = new Date();
            actionEnregisterMessage(utilisateur, valeur, date);
        }

        function initialiser(){
            console.log("initialisation()");
            if(!localStorage['utilisateur'] || !JSON.parse(localStorage['utilisateur']).pseudo){
                alert("Veuillez vous connectez !!!");
                window.location.hash= "#connexion";
            }

            document.getElementById("contenu").innerHTML = pagejeu;
            document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
            canvas = document.getElementById("canvas-jeu");
            contexte = canvas.getContext("2d");

            utilisateurActuel=JSON.parse(localStorage['utilisateur']).pseudo;
            document.getElementById("containeur-chat").innerHTML = pageChat;

        }

    }


})();
