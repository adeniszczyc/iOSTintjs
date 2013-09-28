(function($) {
	        $.iosTint = function(color) {
			    var init = function(color) {
			        var supported = isiosSeven();
			        if (supported == true) {
			        	switchBackground(color);
			        }

			    };
			    var isiosSeven = function() {
			    	var userAgent = navigator.userAgent;
			    	var search = userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i);
			    	if (search !== null) {
			    		return true;
			    	}
			    	else {
			    		return false;
			    	}
			    };
			   	var switchBackground = function(color) {
			   		 var background = $("body").css("background-color");
			  		 
			   		 if (background == "rgba(0, 0, 0, 0)") {
			   		 	background = "rgba(255, 255, 255, 1)";
			   		 }
			   		 console.log(background);
			   		 $("body").css("background-image", "linear-gradient(to bottom, " + background + " 0%, " + background + " 100%)");
					 $("body").css("background-color", color);

			   		 var t = setTimeout(function() {
			   		 	$("body").css("background-color", background);

			   		 }, 50);
			   	}
			   	init();
			};
})(jQuery);