

//llegeix fitxer json de ranquing i retorna ranquing array per despres actualitzar
function mostrarRanquing(){
	var ranquing = [];
	console.log("something");
	 var fileName = "ranquing.json";
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.onreadystatechange=function() {
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	            console.log(xmlhttp.responseText);
	        }
	    }
	    xmlhttp.overrideMimeType("application/json");
	    xmlhttp.open("GET", fileName, true);
	    xmlhttp.send();
	
	return ranquing;
}



//acaba partida i actualitza el fitxer ranquing si cal 
function actualitzarRanquing(premi, ranquing){
	
}