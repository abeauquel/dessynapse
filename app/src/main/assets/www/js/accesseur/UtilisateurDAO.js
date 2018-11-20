var UtilisateurDAO = (function () {

    return function () {
        this.requete = function() {
            var url = 'http://localhost:8080/connexion';
            var data = {pseudo: 'flo', mot_de_passe: 'password'};

            fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers:{
                    'authentification': 'paul',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
        }
    }
})();