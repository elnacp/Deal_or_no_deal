
window.onload = function () {
    // TODO:: Do your initialization job
	var up = 0;
	var down = 0;
	var right = 0;
	var left = 0;
	var cofreSeleccionat = 0; // indica quin cofre es del jugador
	var seleccionat = 0; //indica si el  cofre ha estat seleccionat (FLAG)
    var pag = 0;
    var valorsOberts  = [];  // valors de cofres que ja han sortit
    var valors = []; // tots els valors que poden sortir d'un cofre
    var torns  = 24; 
    var actiu = 0;
    var fiJoc = 0;
    
    
    valors = ["0,01", "0,5", "1","5", "10", "30", "50", "70", "100", "300", "500", "1000",
              "1300", "1500", "3000", "5000", "10000", "30000", "50000", "70000", "100000", "300000", "500000", "1000000" ];
    
    shuffle(valors);
    $('#pop-up-banquero').hide();
	$('#acceptaOferta').hide();
    
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
    
    //CONTROLA TOTES LES FUNCIONES AMB LES TECLES
    document.addEventListener("keydown", function(e){
    	var selector = document.getElementById("selector");
    	//console.log("actiu en fletxes" +actiu);
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
    	if(actiu == 0){
    		changeSelector(selector, up, down, right, left);
    	}
    	if( actiu == 1){
    		changeSelectorPopup(right, left);
    	}
    	//quan estas en el popup si cliques cap abaix acceptes o rechazas la proposicio
    	if(actiu == 1 && down == 1){
    		fiJoc = opcioBanquer();
    		if(fiJoc == 0){
    			actiu = 0;
    			$('#pop-up-banquero').hide();
    		}
    	}
    	up = 0; 
    	down = 0; 
    	left = 0; 
    	right = 0;
    });
    
    
    
    //CONTROLA TOTES LES FUNCIONS DEL OK
    document.addEventListener("keydown", function(e){

    	//funcio que selecciona els cofres que es van descartant en partida
    	if(e.keyCode == 13 && seleccionat == 1 && actiu == 0){
    		var ok = obrirCofreSeleccionat(valors, valorsOberts); 
    		if( ok == 1){
    			torns--;;
    		}
    		//retorna si esta actiu el popup dels torns
    		actiu = banqueroAppears(torns, valors); 
    	}
    	
    	//funcio que selecciona el cofre del usuari en el torn 1
    	if(e.keyCode == 13 && seleccionat == 0 && actiu == 0){  
    		cofreUsuari(cofreSeleccionat);
    		seleccionat = 1;
    		torns--;
    	}
    	
    	
    	
    });

};




