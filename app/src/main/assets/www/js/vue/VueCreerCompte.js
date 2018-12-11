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
            var password = MD5(document.getElementById("password").value);
            var passwordConfirm = MD5(document.getElementById("passwordConfirm").value);
            var mail = document.getElementById("mail").value;
            var numero = document.getElementById("numero").value;
            var date_de_naissance = document.getElementById("date_de_naissance").value;
            var couleur = document.getElementById("couleur").value;

            //alert(pseudo+" " +password+" " +mail+" " +numero+" " +date_de_naissance+" " +couleur);

            if (password === passwordConfirm){
                actionAjouterCompte(pseudo,password,mail,numero,date_de_naissance,couleur);
            } else{
                alert("Votre mot de passe doit etre identique 2 fois.")
                document.getElementById("passwordConfirm").value = "";
                location=location;
            }
        }
    }
})();