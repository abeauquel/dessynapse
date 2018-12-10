var VueJeuDessiner = (function () {

	var pagejeu = document.getElementById("page-jeu").innerHTML;

	return function (actionNavigationConnexion) {

        	this.afficher = function () {
	            document.getElementById("contenu").innerHTML = pagejeu;
        	    initialiser()
        	}
	}


	function initialiser(){
		canvas = document.getElementById("canvas-jeu");

		stage = new createjs.Stage(canvas);
		stage.autoClear = false;
		stage.enableDOMEvents(true);

		createjs.Touch.enable(stage);
		createjs.Ticker.framerate = 24;

		canvasDeDessin = new createjs.Shape();

		stage.addEventListener("stagemousedown", handleMouseDown);
		stage.addEventListener("stagemouseup", handleMouseUp);

		titre = new createjs.Text("Cliquer pour dessiner", "36px Arial", "#777777");
		titre.x = 0;
		titre.y = 0;
		stage.addChild(titre);

		stage.addChild(canvasDeDessin);
		stage.update();
		var t = setInterval(convertirEnImage, 50);

	}


	function handleMouseDown(event) {
		if (!event.primary) { return; }
		if (stage.contains(titre)) {
			stage.clear();
			stage.removeChild(titre);
		}
		color = "#000000";
		stroke = 2;
		oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
		oldMidPt = oldPt.clone();
		stage.addEventListener("stagemousemove", handleMouseMove);
	}

	function handleMouseMove(event) {
		if (!event.primary) { return; }
		var midPt = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);

		canvasDeDessin.graphics.clear().setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;

		oldMidPt.x = midPt.x;
		oldMidPt.y = midPt.y;

		stage.update();
	}

	function handleMouseUp(event) {
		if (!event.primary) { return; }
		stage.removeEventListener("stagemousemove", handleMouseMove);
	}

	function convertirEnImage() {
		console.log("convert");
        	var dataURL = canvas.toDataURL();
	        //document.getElementById("image").innerHTML = dataURL;
        	envoyerImage(dataURL);
	}

    	function envoyerImage(image) {
	        var xmlHttp = new XMLHttpRequest();
        	var url = API_URL + "/image/envoie";
	        xmlHttp.open("POST", url);
        	xmlHttp.setRequestHeader("Content-Type", "application/json");
	        //xmlHttp.setRequestHeader("cache-control", "no-cache");

        	var stringAEnvoyer = '{ "image" : "' + image + '"}';

	        xmlHttp.send(stringAEnvoyer);
    	}

})();
