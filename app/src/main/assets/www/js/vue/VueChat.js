var VueChat = (function () {

    var pageChat = document.getElementById("page-chat").innerHTML;

    return function () {

        this.afficher = function () {
            console.log("affichageVueChat()");
            document.getElementById("contenu").innerHTML = pageChat;


        }
    }
})();