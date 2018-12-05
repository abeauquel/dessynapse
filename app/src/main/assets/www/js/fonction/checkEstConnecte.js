var checkEstConnecte = function () {
   if (JSON.parse(localStorage['utilisateur']).pseudo){
        window.location.hash = "#menu";
   }
};