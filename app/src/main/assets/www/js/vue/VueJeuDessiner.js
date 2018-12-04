var VueJeuDessiner = (function () {
    var pagejeu = document.getElementById("page-jeu").innerHTML;
    
    var ancienX, ancienY, nouveauX, nouveauY = 0;
    var canvas, contexte, click, appuie = false;

    return function (actionNavigationConnexion) {

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pagejeu;
	    initialiser()
        }
    }

    function initialiser(){
	canvas = document.getElementById("canvas-jeu");
	document.body.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
	contexte = canvas.getContext("2d");

	canvas.addEventListener("mousemove", function (e){
		recupererPosition('deplacement',e)
	},false);

	canvas.addEventListener("touchstart", function (e){
	    //e.preventDefault();
		recupererPosition('toucher_on',e)
	},false);

	canvas.addEventListener("touchstop", function (e){
	    //e.preventDefault();
		recupererPosition('toucher_off',e)
	},false);

	canvas.addEventListener("touchmove", function (e){
	    e.preventDefault();
		recupererPosition('toucher_deplacement',e)
	},false);
	var t=setInterval(convertirEnImage,50);
	
    }

    function recupererPosition(evenement, e){
	if (evenement == "deplacement"){
		ancienX = nouveauX;
		ancienY = nouveauY;
		nouveauX = e.clientX - canvas.offsetLeft;
		nouveauY = e.clientY - canvas.offsetTop;
		dessiner();
	}

	if (evenement = "toucher_on"){
        appuie = true;
        //nouveauX = e.touches[0].clientX;// - canvas.offsetLeft;
        //nouveauY = e.touches[0].clientY;// - canvas.offsetTop;
	}

	if (evenement = "toucher_off"){
	    console.log("toucher off");
        appuie = false;
	}

    if (evenement = "toucher_deplacement")
        ancienX = nouveauX;
        ancienY = nouveauY;
        nouveauX = e.touches[0].clientX - canvas.offsetLeft;
        nouveauY = e.touches[0].clientY - canvas.offsetTop;
        dessiner();
    }

    function dessiner(){
    console.log(""+ancienX+ancienY+nouveauX+nouveauY);
	contexte.beginPath();
	contexte.moveTo(ancienX, ancienY);
	contexte.lineTo(nouveauX, nouveauY);
        contexte.strokeStyle = 2;
        contexte.lineWidth = "blue";
	contexte.stroke();
	contexte.closePath();
	//convertirEnImage();
    }

    function convertirEnImage() {
        var dataURL = canvas.toDataURL();
	//document.getElementById("image").innerHTML = dataURL;
	envoyerImage(dataURL);
    }

    function envoyerImage(image){
        var xmlHttp = new XMLHttpRequest();
        var url = API_URL + "/image/envoie";
	xmlHttp.open("POST", url);
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	//xmlHttp.setRequestHeader("cache-control", "no-cache");

	var stringAEnvoyer = '{ "image" : "'+image+'"}'; 

        xmlHttp.send(stringAEnvoyer); 

    }

})();
