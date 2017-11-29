
window.onload = function () {
    // TODO:: Do your initialization job
	var up = 0;
	var down = 0;
	var right = 0;
	var left = 0;
	
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });

    
    document.addEventListener("keydown", function(e){
    	var selector = document.getElementById("selector");
    	
    	
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
    	
    	changeSelector(selector, up, down, right, left);
    	
    	
    	
    });
    
    
   
};




