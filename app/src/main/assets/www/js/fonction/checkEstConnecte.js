var checkEstConnecte = function () {

    if (localStorage['utilisateur']) {
        if (JSON.parse(localStorage['utilisateur']).pseudo) {
            window.location.hash = "#menu";
        }
    }

};