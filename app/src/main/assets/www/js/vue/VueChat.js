var VueChat = (function () {

    var pageChat = document.getElementById("page-chat").innerHTML;
    var utilisateurActuel = "Alex"; //TODO à gérer
    return function () {

        this.afficher = function (listeMessage) {
            console.log("affichageVueChat()");
            document.getElementById("contenu").innerHTML = pageChat;
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
        /*<div class="card">
                <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted text-left">yingshaoxo</h6>
                <p class="card-text float-left">Hi ~</p>
            </div>
            </div>

            <div class="card">
                <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted text-right">yingshaoxo</h6>
                <p class="card-text float-right">Welcome to here!</p>
            </div>
            </div>*/

            document.getElementById("groupe-chat").innerHTML = groupeChat;
        }

    }


})();