var VueCreerCompte = (function () {
    var pageCreerCompte = document.getElementById("page-creer-compte").innerHTML;

    return function (actionAjouterCompte) {

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pageCreerCompte;

            var formulaire = document.getElementById("formulaire-creation-compte");
            formulaire.addEventListener("submit", enregistrerCompte)
        }

        var enregistrerCompte = function (evenement) {
            evenement.preventDefault();

            var pseudo = document.getElementById("pseudo").value;
            var password = document.getElementById("password").value;
            var passwordConfirm = document.getElementById("passwordConfirm").value;
            var mail = document.getElementById("mail").value;
            var numero = document.getElementById("numero").value;
            var date_de_naissance = document.getElementById("date_de_naissance").value;
            var couleur = document.getElementById("couleur").value;

            //alert(pseudo+" " +password+" " +mail+" " +numero+" " +date_de_naissance+" " +couleur);

            actionAjouterCompte(pseudo,password,mail,numero,date_de_naissance,couleur);
        }
    }
})();