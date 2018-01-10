//controla el contingut del pop up del banquer i quan ha d'apareixer
function banqueroAppears(torns, valors){
	var aux = 0;
	var oferta = 0;
	var quantitat = 0;
	var actiu = 0;
	
	//cada 5 torns, s'activa el panell de pop up del banquer
	if( torns == 18 || torns == 13 || torns == 8 || torns == 4 || torns == 2){  
		
		//el banquer et farà una proposta segons els diners que et quedin, sumant els valors del taulell 
		for ( var i= 0; i < valors.length; i++){
			aux = aux + parseInt(valors[i]);
			quantitat++;
		}
		oferta = aux / valors.length;
		oferta = oferta/5; //fer un valor més petit de la oferta
		oferta = Math.round(oferta);
		
		//mostra el cartell de pop up amb els missatges corresponents
		$('#pop-up-banquero').show();
		var popup = document.getElementById("message-banquero2");
		popup.innerHTML = oferta;
		
		// el pop up salta i fins que no dongui instruccions no funcionara
		actiu = 1; 
		
	}
	return actiu;
}

//mostra el panell final de les 2 caixes amb les caixes restants
function tornFinal(torns){

	if( torns == 1){
		$('#cofreFinal').show();
		
		//agafa el cofre del usuari
		var element = document.getElementById("user_chest");
		document.getElementById("box1").src = element.src;  
		
		actiu2 = 1;
	}else{
		actiu2 = 0;
	}
	return actiu2;
}

