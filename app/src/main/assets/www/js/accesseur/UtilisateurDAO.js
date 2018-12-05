var UtilisateurDAO = function () {


    this.lister = async function (callback) {
        console.log("listerUtilisateur()");
        var url = API_URL + '/utilisateurs';
        var xhr = new XMLHttpRequest();
        //xhr.withCredentials = false;
        xhr.open("GET", url);
        xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let json = JSON.parse(xhr.responseText);
                callback(json.utilisateurs);
            }
        });
        xhr.send(null);
    }

    this.connexion = function (user, password, callback) {

        var url = API_URL + '/connexion';

        var data = JSON.stringify({
            "pseudo": user,
            "mot_de_passe": password
        });

        var xhr = new XMLHttpRequest();
        //xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(this.responseText);
            }
        });
        console.log(url);
        xhr.open("POST", url);
        xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

    }

    this.ajouter = function (pseudo, password, mail, numero, date_de_naissance, couleur, callback) {
        var data = JSON.stringify({
            "pseudo": pseudo,
            "mot_de_passe": password,
            "mail": mail,
            "telephone": numero,
            "couleur": couleur,
            "date_naissance": date_de_naissance,
            "nb_victoire": 0
        });

        var xhr = new XMLHttpRequest();
        //xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log("REPONSE AJOUT USER : " + this.responseText);
                callback();
            }
        });

        xhr.open("POST", API_URL+"/utilisateur");
        xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    }
};
