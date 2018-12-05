var checkEstPasConnecte = function () {

    if (typeof localStorage === 'undefined') {
        window.location.hash = "#connexion";
        return;
    } else if (typeof localStorage['utilisateur'] === 'undefined') {
        window.location.hash = "#connexion";
        return;
    } else if (localStorage['utilisateur']) {
        if (!JSON.parse(localStorage['utilisateur']).pseudo) {
            window.location.hash = "#connexion";
        }
    }
};