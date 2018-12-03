var DessinDAO = function () {

    this.recupererImage = function (callBack){
        console.log("RecupererImage()");
        var xmlHttp = new XMLHttpRequest();
        var url=API_URL+"/image/reception";
        xmlHttp.open("GET", url);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var image = new Image();
                image.src = JSON.parse(xmlHttp.responseText).image;
                callBack(image);
            }
        };
        xmlHttp.send(null);
    }


};
