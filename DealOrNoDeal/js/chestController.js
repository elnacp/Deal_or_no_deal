
function changeSelector(selector, up, down, right, left){
	var num = 0;
	console.log("hello");
	for ( var i = 1; i < 24; i++){
		//console.log(i);
		if( selector.name == i){
			console.log("heeeu");
			if( up == 1){
				//console.log(selector.name);
				num = parseInt(selector.name) + 1;
				var aux = document.getElementsByName(num);
				aux[0].id = 'selector';
				selector.id = "";
				
			}
		}
		
		
	}
	
	
}