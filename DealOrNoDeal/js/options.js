

//llegeix fitxer json de ranquing i retorna ranquing array per despres actualitzar
function mostrarRanquing(){

	console.log("something");

    var fileName = "ranquing.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            didResponse(xmlhttp.responseText);
        }
    }
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET", "./data/"+fileName, true);
    xmlhttp.send(); 
}
function didResponse(response){
	console.log("Arribo");
    jsonArray = JSON.parse(response);
    console.log(jsonArray);
}


//acaba partida i actualitza el fitxer ranquing si cal 
function actualitzarRanquing(premi, ranquing){
	
}