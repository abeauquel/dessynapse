var ChatDAO = function () {


    this.actualiserChat = async function (callback) {
        console.log("actualiserChat()");
        var url = API_URL + '/chat';
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
        var data = JSON.stringify({
            "pseudo": user,
            "valeur": password,
            "date": date
        });

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
