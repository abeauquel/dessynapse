var VueJeu = (function () {
    var pagejeu = document.getElementById("page-jeu").innerHTML;
    
    var ancienX, ancienY, nouveauX, nouveauY = 0;
    var canvas, contexte = false;

    return function (actionNavigationConnexion) {

        this.afficher = function () {
            document.getElementsByTagName("body")[0].innerHTML = pagejeu;
	    initialiser()
        }
    }

    function initialiser(){
	canvas = document.getElementById("canvas-jeu");
	contexte = canvas.getContext("2d");

	canvas.addEventListener("mousemove", function (e){
		recupererPosition('deplacement',e)
	},false);
	
    }

    function recupererPosition(evenement, e){
	if (evenement == "deplacement"){
		ancienX = nouveauX;
		ancienY = nouveauY;
		nouveauX = e.clientX - canvas.offsetLeft;
		nouveauY = e.clientY - canvas.offsetTop;
		dessiner();
	}
    }

    function dessiner(){
	console.log(ancienX, ancienY);
	contexte.beginPath();
	contexte.moveTo(ancienX, ancienY);
	contexte.lineTo(nouveauX, nouveauY);
        contexte.strokeStyle = 2;
        contexte.lineWidth = "black";
	contexte.stroke();
	contexte.closePath();
    }
})();
