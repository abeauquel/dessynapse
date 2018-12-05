var checkEstPasConnecte = function () {
    if (!localStorage['utilisateur']){
        window.location.hash = "#connexion";
    }else if (!JSON.parse(localStorage['utilisateur']).pseudo){
        window.location.hash = "#connexion";
    }
};