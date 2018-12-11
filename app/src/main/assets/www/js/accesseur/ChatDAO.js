var ChatDAO = function () {


    this.actualiserChat = function (callback) {
        console.log("actualiserChat()");
        var utilisateur = JSON.parse(localStorage['utilisateur']).pseudo;
        var url = API_URL + '/chat'+'?'+utilisateur;
        var xhr = new XMLHttpRequest();
        //xhr.withCredentials = true;
        xhr.open("GET", url);
        xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let json = JSON.parse(xhr.responseText);
                callback(json.listeMessage);
            }
        });
        xhr.send(null);
    }

    this.insererMessage = function (nomUtilisateur, valeur, date) {

        var url = API_URL + '/chat';
        var message= {
            "pseudo": nomUtilisateur,
            "valeur": valeur,
            "date": date
        };
        var data = JSON.stringify({message});
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log("insertionDuMessage()");
                document.getElementById("input-message").value ="";
            }
        });
        xhr.open("POST", url);
        xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    }

    this.reintialiserChat = function () {

        var url = API_URL + '/chat/reintialiser';
        var data = JSON.stringify({});
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(this.responseText);

            }
        });
        xhr.open("POST", url);
        xhr.setRequestHeader("authentification", API_AUTH);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
    }
};
