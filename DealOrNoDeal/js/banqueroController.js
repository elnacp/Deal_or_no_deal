function banqueroAppears(torns, valors){
	var aux = 0;
	var oferta = 0;
	var quantitat = 0;
	var actiu = 0;
	
	if( torns == 18 || torns == 13 || torns == 8 || torns == 4 || torns == 2){  
		console.log("ENTRO");
		
		// el banquer et farà una proposta segons els diners que et quedin 
		for ( var i= 0; i < valors.length; i++){
			aux = aux + parseInt(valors[i]);
			quantitat++;
		}
		oferta =aux / valors.length;
		oferta = Math.round(oferta);
		$('#pop-up-banquero').show();
		var popup = document.getElementById("message-banquero2");
		popup.innerHTML = oferta + "€";
		 // el popup salta i fins que no dongui instruccions no funcionara
		actiu = 1; 
		
	}
	if( torns == 1){  //canviar el cofre que tens per el cofre que queda
		var textarea = document.getElementById("message");
		textarea.value = "Vols canviar el cofre?";
		actiu = 1;
	}
	
	return actiu;
}

//canviar el selector dintre del pop up i es situa segons si vol "acceptar o rechazar" la oferta
function changeSelectorPopup(right, left){
	var element = document.getElementById("selectorPopup");
	var selector = document.getElementById("selectorPopup").className;
	if(selector == "acceptar" && right == 1){
		var aux = document.getElementsByName("rechazar");
		aux[0].id = "selectorPopup";
		element.id ="";
	}
	if(selector == "rechazar" && left == 1){
		var aux = document.getElementsByName("acceptar");
		aux[0].id = "selectorPopup";
		element.id = "";
	}
}


function opcioBanquer(){
	var fiJoc = 0; // defineix si el joc ha acabat 
	var opcio = document.getElementById("selectorPopup").className;
	if( opcio == "acceptar"){ // el joc finalitza
		fiJoc = 1; 
		//PANELL DE FI DE JOC, ACEPTA LA OFERTA
		var oferta = document.getElementById("message-banquero2");
		//console.log(oferta.innerHTML);
		$('#acceptaOferta').show();
		$('#pop-up-banquero').hide();
		var panel = document.getElementById("oferta");
		panel.innerHTML = oferta.innerHTML;
		
	}
	if(opcio == "rechazar"){ // el joc continua
		fiJoc = 0; 
	}
	return fiJoc; 
}