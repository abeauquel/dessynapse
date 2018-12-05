var checkEstConnecte = function () {
    if (!localStorage['utilisateur']){
        window.location.hash = "#connexion";
    }else if (localStorage['utilisateur'] !== 'undefined'){
        window.location.hash = "#connexion";
    }
}