var UtilisateurDAO = function () {
    var url = URL_API+'/connexion';

    this.connexion = function (user, password, callback) {

        /*var data = {pseudo: 'alex', mot_de_passe: 'futurhash'};

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'authentification': 'paul',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
              dataUtilisateur = JSON.stringify(response);
              console.log('Success:', dataUtilisateur);

              return new Utilisateur(dataUtilisateur.pseudo,
              dataUtilisateur.mot_de_passe,
              dataUtilisateur.mail,
              dataUtilisateur.telephone,
              dataUtilisateur.couleur,
              dataUtilisateur.date_naissance,
              dataUtilisateur.nb_victoire);
            }
            )
            .catch(error => console.error('Error:', error));*/

        var data = JSON.stringify({
            "pseudo": user,
            "mot_de_passe": password
        });

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(this.responseText);

                callback(this.responseText);
            }
        });
        console.log(url);
        xhr.open("POST", "/connexion");
        xhr.setRequestHeader("authentification", "paul");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

    }
};
