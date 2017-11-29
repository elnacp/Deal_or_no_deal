
function changeSelector(selector, up, down, right, left){
	var num = 0;
	
	for ( var i = 1; i < 25; i++){
		if( selector.name == i){
			if( up == 1){
				num = parseInt(selector.name)-6;
				if( num > 0 && num < 25){
					var aux = document.getElementsByName(num);
					aux[0].id = 'selector';
					selector.id = "";
				}
			}
			if( down == 1){
				num = parseInt(selector.name)+6;
				if( num > 0 && num < 25){
					var aux = document.getElementsByName(num);
					aux[0].id = 'selector';
					selector.id = "";
				}
			}
			if( right == 1){
				num = parseInt(selector.name)+1;
				if(num < 25 ){
					var aux = document.getElementsByName(num);
					aux[0].id = 'selector';
					selector.id = "";
				}
			}
			if( left == 1){
				num = parseInt(selector.name)-1;
				if(num > 0 ){
					var aux = document.getElementsByName(num);
					aux[0].id = 'selector';
					selector.id = "";
				}
			}
		}
	}
}



function cofreUsuari(cofreSeleccionat){
	var num = 0; 
	
	var cofre = document.getElementById("selector");
	
	//canviem la imatge del cofre del usuari per el que hagui seleccionat
	var usuariCofre = document.getElementById("user_chest");
	usuariCofre.src = cofre.src;
	
	//canviem el selector en el primer element de la llista
	if(parseInt(cofre.name) == 1){   
		num = 2;
	}else{
		num = 1; 
	}
	var aux = document.getElementsByName(num);
	aux[0].id = 'selector';
	cofre.id = "";
	cofre.src = "./img/chestAgafat.png";
	
	
	
}