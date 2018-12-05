var deconnexion = function () {
    localStorage.removeItem('utilisateur');
    delete window.localStorage["utilisateur"];
}