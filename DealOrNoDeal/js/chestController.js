//funcio que permet moure el cursor pels cofres
function changeSelector(selector, up, down, right, left){
	var num = 0;
	//es buscara la situació actual del cursor i segons la selecció del usuari el moure'm corresponentment
	for ( var i = 1; i < 25; i++){
		if( selector.name == i){
			
			//mou el cursor amunt
			if( up == 1){
				num = parseInt(selector.name)-6;
				if( num > 0 && num < 25){
					canviarSelector(selector, num);
				}
			}
			
			//mou el cursor avall
			if( down == 1){
				num = parseInt(selector.name)+6;
				if( num > 0 && num < 25){
					canviarSelector(selector, num);
				}
			}
			
			//mou el cursor cap a la dreta
			if( right == 1){
				num = parseInt(selector.name)+1;
				if(num < 25 ){
					canviarSelector(selector, num);
				}
			}
			
			//mou el cursor cap a l'esquerra
			if( left == 1){
				num = parseInt(selector.name)-1;
				if(num > 0 ){
					canviarSelector(selector, num);
				}
			}
		}
	}
}

//funcio que marca la identificació de selecció de la caixa per a moure el border que mostra visualment quin cofre està seleccionat
function canviarSelector(selector, num){
	var aux = document.getElementsByName(num);
	aux[0].id = 'selector';
	selector.id = "";
}


//funcio que permet agafar el cofre que el usuari ha escollit
function cofreUsuari(cofreSeleccionat){
	var num = 0; 
	var cofre = document.getElementById("selector");
	
	//canviem la imatge del cofre del usuari per el que hagui seleccionat en el panell inferior
	var usuariCofre = document.getElementById("user_chest");
	usuariCofre.src = cofre.src;
	
	//canviem el selector en el primer element de la llista, si s'ha seleccionat el primer cofre, el selector es mou al cofre 2, sino va al 1
	if(parseInt(cofre.name) == 1){   
		num = 2;
	}else{
		num = 1; 
	}
	
	//canviem el selector i eliminem el cofre seleccionat per l'usuari del panell per a no confondre'n
	var aux = document.getElementsByName(num);
	aux[0].id = 'selector';
	cofre.id = "";
	cofre.src = "./img/chestAgafat.png";

}

//funcio que obre els cofres que ha seleccionat el usuari que vol descartar
function obrirCofreSeleccionat(valors, valorsOberts, torns){
	var cofre = document.getElementById("selector");
	var presentador = document.getElementById("presenter");
	var ok = 0;
	
	//mirem si el cofre ja ha estat obert o si es el seleccionat per l'usuari
	if( cofre.getAttribute("src") != "./img/chestAgafat.png" ){
		if(cofre.getAttribute("src")!= "./img/caja_abierta.png"){
			document.getElementById("box2").src = cofre.src;
			//mentre hi hagi caixes per buidar podem seleccionar cofres
			if( torns != 0){
				cofre.src = "./img/caja_abierta.png";
				valorsOberts.push(valors[0]); 
				var textarea = document.getElementById("message");
				
				//si el valor descartat es un valor petit, es celebra per part del joc, sino es mostra decepció
				if(valors[0] > 1300){
					presentador.src = "./img/Bad_news.png";
					textarea.value = "That's just bad luck! The chest content was " + valors[0]+ "€"; // substitueix el contingut de text area
					var audio = new Audio('./music/ouch.mp3');
					audio.play();
				}else{
					presenter.src = "./img/Pointing.png";
					textarea.value = "Great guess! The chest content was " + valors[0]+ "€"; // substitueix el contingut de text area
					var audio = new Audio('./music/cheers.wav');
					audio.play();
				}
				
				//elimina el valor descartat del joc 
				value = "./img/prizes/"+valors[0]+".png";
				
				var prize = document.querySelectorAll('[src="'+value+'"]');
				prize[0].src = "./img/dinerAgafat.png";
				
				// elimina el valor de array valor
				valors.splice(0,1);
				ok = 1;
			}
		}
	}
	return  ok;
	
}
	
