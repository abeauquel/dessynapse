var UtilisateurDAO = function () {


    this.lister = async function (callback) {
        console.log("listerUtilisateur()");
        var url = 'http://54.39.145.59:8081/utilisateurs';
        var xhr = new XMLHttpRequest();
        //xhr.withCredentials = false;
        xhr.open("GET", url);
        xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let json = JSON.parse(xhr.responseText);
                callback(json.utilisateurs);
            }
        });
        xhr.send(null);
    }

    this.connexion = function (user, password, callback) {

        var url ='http://54.39.145.59:8081/connexion';

        var data = JSON.stringify({
            "pseudo": user,
            "mot_de_passe": password
        });

        var xhr = new XMLHttpRequest();
        //xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(this.responseText);

                callback(this.responseText);
            }
        });
        console.log(url);
        xhr.open("POST", url);
        //xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("authentification", "paul");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

    }
};
