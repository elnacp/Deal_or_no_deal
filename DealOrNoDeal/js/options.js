

//llegeix fitxer json de ranquing i retorna ranquing array per despres actualitzar
function mostrarRanquing(ranquing){
	var llista = document.getElementById("llista_ranquing");
	
	for( var i = 0; i < ranquing.length; i++){
		var element = document.createElement("li");
		element.innerHTML = "Usuari: " +ranquing[i][0] + "Puntuació:" + ranquing[i][1];
		llista.appendChild(element);
	}

}


//PER QUAN SAPIGUEM LLEGIR EL JSON 
/*	console.log("something");

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
}*/


//acaba partida i actualitza el fitxer ranquing si cal 
function actualitzarRanquing(premi, ranquing){
	var p = 0;
	var llista = [];
	var ranquingActualitzat = [];
	var calActualitzar = 0;
	
	console.log(premi);
	for ( var i = 0;  i < ranquing.length; i++){
		console.log(premi);
		
		if( premi > ranquing[i][1]){
			p = i;
			calActualitzar = 1;
			break;
		}
	}

	if(calActualitzar == 1){
		for(var s = 0; s < p; s++){
			ranquingActualitzat.push(ranquing[s]);
		}
		 var objecte = [["hola", premi]];
		ranquingActualitzat.push(objecte);
		for( var d = p; d<4; d++ ){
			ranquingActualitzat.push(ranquing[d]);
		}
		
		console.log("ranquing"+ranquingActualitzat);
		return ranquingActualitzat;
	}	
	
	return ranquing;
	
}


