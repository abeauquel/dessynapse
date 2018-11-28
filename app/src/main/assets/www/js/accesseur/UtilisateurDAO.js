var UtilisateurDAO = function () {


        this.lister =async function (callBackAfficher) {
            let url = API_URL+'/utilisateurs';
            fetch(url, {
                method: 'GET',
                headers: {
                    'authentification': 'paul',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())

                .then(response => {
                        let str = JSON.stringify(response);
                        let json = JSON.parse(str);

                        listeUtilisateurs= [];
                        for (var i = 0; i < json.utilisateurs.length; i++) {
                            var ligne = json.utilisateurs[i];
                            listeUtilisateurs.push(new Utilisateur(ligne.pseudo, ligne.motDePasse, ligne.mail, ligne.telephone, ligne.couleur, ligne.dateNaissance, ligne.nbVictoire));
                        }

                        callBackAfficher(listeUtilisateurs, null);
                    }
                )
                .catch(error => {
                    console.error('Error:', error);
                    new VueErreur('Erreur de connexion au service web', ' Vérifiez que être connectée à internet');
                });
            return listeUtilisateurs;

    }

    this.connexion = function (user, password, callback) {

        var url = URL_API+'/connexion';
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
