var UtilisateurDAO = function () {


    this.lister = async function (callback) {
        var url = URL_API + '/utilisateurs';
        var data = null;

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(this.responseText);

                callback(this.responseText);
            }
        });
        console.log(url);
        xhr.open("GET", url);
        xhr.setRequestHeader("authentification", "paul");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

    }

    this.connexion = function (user, password, callback) {

        var url = URL_API + '/connexion';
        var data = JSON.stringify({
            "pseudo": user,
            "mot_de_passe": password
        });

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(this.responseText);

                callback(this.responseText);
            }
        });
        console.log(url);
        xhr.open("POST", url);
        xhr.setRequestHeader("authentification", "paul");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

    }
};
