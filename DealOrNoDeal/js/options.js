
//llegeix fitxer json de ranquing i retorna ranquing array per despres actualitzar
function mostrarRanquing(ranquing){
	$("#acceptaOferta").hide();
	var llista = document.getElementById("llista_ranquing");
	llista.innerHTML = '';
	console.log("ranquing"+ranquing);
	for( var i = 0; i < ranquing.length; i++){
		var element = document.createElement("li");
		element.innerHTML = "Username: " +ranquing[i][0] + "    Prize:" + ranquing[i][1];
		llista.appendChild(element);
	}

}

//acaba partida i actualitza el fitxer ranquing si cal 
function actualitzarRanquing(premi, ranquing, usuario){
	var p = 0;
	var llista = [];
	var ranquingActualitzat = [];
	var calActualitzar = 0;
	for ( var i = 0;  i < ranquing.length; i++){
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
		var nombre = "Jugador " +usuario;
		
		var objecte = [nombre, premi];
		
		ranquingActualitzat.push(objecte);
		for( var d = p; d<4; d++ ){
			var objecte1 = [ranquing[d][0], ranquing[d][1]];
			ranquingActualitzat.push(objecte1);
		}
		return ranquingActualitzat;
	}	
	return ranquing;
	
}



// FUNCIONS PER SI HI HAGUÈS UN SERVIDOR I ES POGUES ACTUALITZAR EL JSON



/*

//llegeix fitxer json de ranquing i retorna ranquing array per despres actualitzar

function mostrarRanquing(json){
	var llista = document.getElementById("llista_ranquing");
	var ranquing = [];
	
	for(var i = 0; i < json.ranquing.length; i++){
		var objecte = [[json.ranquing[i].userName, json.ranquing[i].valor]];
		ranquing.push(objecte);
	}
	console.log(ranquing);
	for( var i = 0; i < ranquing.length; i++){
		var element = document.createElement("li");
		element.innerHTML = "Usuari: " +ranquing[i][0][0] + "Puntuació:" + ranquing[i][0][1];
		llista.appendChild(element);
	}
	
}



//llegeix json
function leerJSON(opcio, premi){
	var jsonArray = [];
    var url = "https://dealornodealtv2.000webhostapp.com/ranquing.json";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
        	jsonArray = didResponse(xmlhttp.responseText);
        	if( opcio == 1){ // mostrem el ranquing
        		mostrarRanquing(jsonArray);
        	}
        	if(opcio == 2){
        		actualitzarRanquing(premi, jsonArray);
        	}
        	
        	
        }
    }
    xmlhttp.overrideMimeType("application/json");
    xmlhttp.open("GET",url, true);
    xmlhttp.send(); 
    
   
}
function didResponse(response){
	var jsonArray = [];
    jsonArray = JSON.parse(response);
    return jsonArray;
}



//acaba partida i actualitza el fitxer ranquing si cal 
function actualitzarRanquing(premi, json){
	var p = 0;
	var llista = [];
	var ranquingActualitzat = [];
	var calActualitzar = 0;
	
	console.log(premi);
	for ( var i = 0;  i < json.ranquing.length; i++){
		console.log(premi);
		
		if( premi > json.ranquing[i].valor){
			p = i;
			calActualitzar = 1;
			break;
		}
	}

	if(calActualitzar == 1){
		for(var s = 0; s < p; s++){
			ranquingActualitzat.push(json.ranquing[s]);
		}
		 var objecte = [["hola", premi]];
		ranquingActualitzat.push(objecte);
		for( var d = p; d<4; d++ ){
			var objecte = [[json.ranquing[d].userName, json.ranquing[d].valor]];
			ranquingActualitzat.push(objecte);
		}
		
		console.log("ranquing"+ranquingActualitzat);
	}	
}

*/
