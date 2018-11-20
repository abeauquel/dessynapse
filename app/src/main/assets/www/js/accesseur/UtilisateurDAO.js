var UtilisateurDAO = (function () {

    return function () {
        this.requete = function () {
            var url = 'http://localhost:8080/connexion';
            var data = {pseudo: 'alex', mot_de_passe: 'futurhash'};

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
                  dataUtilisateur.mot_de_passe
                  dataUtilisateur.mail,
                  dataUtilisateur.telephone,
                  dataUtilisateur.couleur,
                  dataUtilisateur.date_naissance
                  dataUtilisateur.nb_victoire);
                }
                )
                .catch(error => console.error('Error:', error));
        }
    }
})();
