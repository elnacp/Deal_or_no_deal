function banqueroAppears(torns, valors){
	var aux = 0;
	var oferta = 0;
	var quantitat = 0;
	var actiu = 0;
	
	if( torns == 18 || torns == 13 || torns == 8 || torns == 4 || torns == 3 || torns == 2){  
		// el banquer et farà una proposta segons els diners que et quedin 
		for ( var i= 0; i < valors.length; i++){
			//console.log(parseInt(valors[i]));
			aux = aux + parseInt(valors[i]);
			//console.log(aux);
			quantitat++;
		}
		//console.log(aux);
		//console.log(valors.length);
		oferta =aux / valors.length;
		oferta = Math.round(oferta);
		//console.log("oferta" + oferta);
		// fem la mitja dels valors que li queden 
		/*$('.container-fluid').hide();*/
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