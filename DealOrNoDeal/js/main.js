
window.onload = function () {
    // TODO:: Do your initialization job
	var up = 0;
	var down = 0;
	var right = 0;
	var left = 0;
	var cofreSeleccionat = 0; // indica quin cofre es del jugador
	var seleccionat = 0; //indica si el  cofre ha estat seleccionat (FLAG)
    var pag = 1;
    var valorsOberts  = [];  // valors de cofres que ja han sortit
    var valors = []; // tots els valors que poden sortir d'un cofre
    var torns  = 24; 
    var actiu = 0;
    var fiJoc = 0;
    //var ranquing = []; // conter els millors resultats
    var premiFinal = 0; // conte el premi final
    var json = [];
    var opcio = 0;  //opcio 1 mostrar ranquing - 2 actualitza ranquing    
    var usuario = 0;  //numero del usuario que ha jugado
    var actiu2 = 0;
    var actiuRanquing = 0;
    var actiuInstruccions = 0;
    
    
   
    var ranquing = [
                 ["-", 0],
                 ["-", 0],
                 ["-", 0],
                 ["-", 0],
                 ["-", 0]
               ]; // RANQUING PROVISIONAL
    
    valors = ["0,01", "0,5", "1","5", "10", "30", "50", "70", "100", "300", "500", "1000",
              "1300", "1500", "3000", "5000", "10000", "30000", "50000", "70000", "100000", "300000", "500000", "1000000" ];
    
    shuffle(valors);
    $('#pop-up-banquero').hide();
	$('#acceptaOferta').hide();
    if(pag == 1){  // amaga el panell fins que estem a la pantalla 2
    	$('#mainPanell').hide();
    }
    $('#ranquing').hide();
    $('#instruccions').hide();
    $('#exiting').hide();
	$('#cofreFinal').hide();
	
	
	
	//leerJSON();
	
    //barreja array de valors de cada cofre.
    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
    
        }
    }
    
    //event que controla quina opcio de la pag 1
    document.addEventListener("keydown", function(e){
    	if(e.keyCode == 403 && pag == 1){  //play
    		pag = 2;
    		$('#mainPanell').show();
    		$('#inici').hide();
    	}
    	if(e.keyCode == 404 && pag == 1 && actiuRanquing == 0){  //ranking
    		$('#ranquing').show();
    		$('#acceptaOferta').hide();
    		mostrarRanquing(ranquing);
    		actiuRanquing = 1;
    		
    		//EN EL CASO DE FUNCIONE EL JSON
    		//opcio = 1;
    		//leerJSON(opcio, 0);
    		
    		$('#inici').hide();
    	}

    	if(e.keyCode == 405 && pag == 1 && actiuInstruccions == 0){  //instruccions
    	      $('#instruccions').show();
    	      $('#inici').hide();
    	      actiuInstruccions = 1;
    	      $('#acceptaOferta').hide();
    	     }
	     if(e.keyCode == 406 && pag == 1){  // back
		      $('#instruccions').hide();
		      $('#ranquing').hide();
		      $('#inici').show();
		      actiuRanquing = 0;
		      actiuInstruccions = 0;
		      $('#acceptaOferta').hide();
	     }
    });
    
    
    
    //CONTROLA TOTES LES FUNCIONES AMB LES TECLES
    document.addEventListener("keydown", function(e){

    	switch(e.keyCode){
			case 38:  //UP
				up = 1;
				break;
			case 37:  //LEFT
				left = 1;
				break;
			case 39:   //RIGHT
				right = 1;
				break;
			case 40:  //DOWN
				down = 1;
				break;
    	}
    	if(actiu == 0 && pag == 2){
    		var selector = document.getElementById("selector");
    		changeSelector(selector, up, down, right, left);
    	}
    	up = 0; 
    	down = 0; 
    	left = 0; 
    	right = 0;
    });
    
    //opcions dels banquers aceptar o rechazar
    document.addEventListener("keydown", function(e){
    	
    	if(e.keyCode == 404 && actiu == 1){ //voto verd
    		console.log("ENTRO");
    		fiJoc = 1;
    		var oferta = document.getElementById("message-banquero2");
    		//console.log(oferta.innerHTML);
    		$('#acceptaOferta').show();
    		$('#pop-up-banquero').hide();
    		var panel = document.getElementById("oferta");
    		panel.innerHTML = oferta.innerHTML;
    		premi = oferta.innerHTML;
    		usuario++;
    		ranquing = actualitzarRanquing(premi, ranquing, usuario);
    		console.log("ranquingActualitzat"+ranquing);
    		actiu = 0;
    		
    		//EN EL CAS DE QUE FUNCIONI EL JSON
    		//opcio = 2;
    		//leerJSON(opcio, premi);
    	}
    	if(e.keyCode == 403 && actiu == 1){ // voto vermell
    		fiJoc = 0;
    		actiu = 0; 
    		$('#pop-up-banquero').hide();
    	}
    	
    	if(e.keyCode == 404 && actiu2 == 1){ //acepta el intercanvi
    		document.getElementById("box1").src = "./img/caja_abierta.png";
    		fiJoc = 1; 
    		var oferta = document.getElementById("message-banquero2");
    		//console.log(oferta.innerHTML);
    		$('#acceptaOferta').show();
    		$('#cofreFinal').hide();
    		var panel = document.getElementById("oferta");
    		panel.innerHTML = oferta.innerHTML;
    		premi = oferta.innerHTML;
    		usuario++;
    		ranquing = actualitzarRanquing(premi, ranquing, usuario);
    		console.log("ranquingActualitzat"+ranquing);
    		actiu2 = 0;
    		
    	}
    	
    	if(e.keyCode == 403 && actiu2 == 1){ //no accepta el intercanvi
    		document.getElementById("box2").src = "./img/caja_abierta.png";
    		fiJoc = 1;
    	}
    	
    	
    	
    	
    });
    

    
   
    //CONTROLA TOTES LES FUNCIONS DEL OK
    document.addEventListener("keydown", function(e){
    	
    	//fa un exit del joc quan clica ok i s'aniria a la pantalla principal 
    	if(e.keyCode == 13 && fiJoc == 1){
    		$("#cofreFinal").hide();
    		$("#acceptaOferta").hide();
    		$("#mainPanell").hide();
    		pag = 1;
    		$("#inici").show();
    		omplimMainPanell();
    		valors = ["0,01", "0,5", "1","5", "10", "30", "50", "70", "100", "300", "500", "1000",
    	              "1300", "1500", "3000", "5000", "10000", "30000", "50000", "70000", "100000", "300000", "500000", "1000000" ];
    	    
    	    shuffle(valors);
    	    valorsOberts  = [];
    	    cofreSeleccionat = 0;
    		seleccionat = 0;
    		torns = 24;
    		actiu = 0;
    		fiJoc = 0;
    	    
    	}
    	//funcio que selecciona els cofres que es van descartant en partida
    	if(e.keyCode == 13 && seleccionat == 1 && actiu == 0 && pag == 2){
    		var ok = obrirCofreSeleccionat(valors, valorsOberts, torns); 
    		if( ok == 1){
    			torns--;
    		}
    		//retorna si esta actiu el popup dels torns
    		actiu = banqueroAppears(torns, valors); 
    		actiu2 = tornFinal(torns);
    		
    	}
    	
    	//funcio que selecciona el cofre del usuari en el torn 1
    	if(e.keyCode == 13 && seleccionat == 0 && actiu == 0 && pag == 2){  
    		cofreUsuari(cofreSeleccionat);
    		seleccionat = 1;
    		torns--;
    	}

    });

};




