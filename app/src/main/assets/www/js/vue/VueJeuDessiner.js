var VueJeuDessiner = (function () {

    var pagejeu = document.getElementById("page-jeu-dessiner").innerHTML;
    this.mot= null;
    var actionNettoyerCanvas;
    var couleur ="#000000";
    var click = 0;
    var nettoyerCanvas;

    return function (actionEnvoyerImage) {
        checkEstPasConnecte();

        this.afficher = function () {
            document.getElementById("contenu").innerHTML = pagejeu;

            initialiser();
            var actionNettoyerDessin = document.getElementById("nettoyer-dessin");
            actionNettoyerDessin.addEventListener("click", nettoyerCanvas);
        }

        this.envoyerEnImage = function() {
            var dataURL = canvas.toDataURL();
            //document.getElementById("image").innerHTML = dataURL;
            actionEnvoyerImage(dataURL);
        }

        this.setMot = function(pMot){
            this.mot=pMot;
            console.log(" Affichage mot()");
            if(pMot != null){
                document.getElementById("mot").innerText="Dessine le mot : "+pMot;
            }
        }

        this.getMot = function(){
            return this.mot;
        }

        /***
		 * On initialise le canvas et les callback pour le mettre à jour
         */
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


            titre = new createjs.Text("Le dessinateur \n génére un \n nouveau mot", "30px Arial", "#777777");
            titre.x = 0;
            titre.y = 0;
            stage.addChild(titre);

            stage.addChild(canvasDeDessin);
            stage.update();

            nettoyerCanvas = function () {
                console.log("Nettoyage du dessin()");
                stage.clear();
                titre = new createjs.Text("Le dessinateur \n vient de\n nettoyer", "30px Arial", "#777777");
                titre.x = 0;
                titre.y = 0;
                stage.addChild(titre);
                stage.update();

            }

            /** couleur */
            afficherCouleurs();
        }
    }





    function handleMouseDown(event) {
	doubleClick()
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

    function afficherCouleurs() {
        couleur= JSON.parse(localStorage['utilisateur']).couleur;
        if(!couleur)
            couleur="#000000";
        document.getElementById("nettoyer-dessin").setAttribute("style", "background-color:"+couleur);
        document.getElementById("retour").setAttribute("style", "background-color:"+couleur);
        document.getElementById("generer-mot").setAttribute("style", "background-color:"+couleur);
    }

    function doubleClick() {
	++click;
	if (click <= 1){
		setTimeout(doubleClickTimer, 300);
	}else if (click > 1 ){
		nettoyerCanvas();

	}

    }

    function doubleClickTimer(){
	click = 0;
    }

})();
