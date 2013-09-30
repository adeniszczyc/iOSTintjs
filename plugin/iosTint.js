(function($) {
	        $.iosTint = function(color) {
			    var init = function(color) {
			        var supported = isiosSeven();
			        if (supported == true) {
			        	switchBackground(color);
			        }

			    };
			    var el = {
			    	body: $("body")
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
			   		 var background = el.body.css("background");
			   		 var background_color = el.body.css("background-color");
			  		 var background_image =  el.body.css("background-image");

			   		 if (background_color == "rgba(0, 0, 0, 0)") {
			   		 	background_color = "rgba(255, 255, 255, 1)";
			   		 }
			   		 console.log(background);
			   		 el.body.css("background-image", background_image  + ", linear-gradient(to bottom, " + background_color + " 0%, " + background_color + " 100%)");
					 el.body.css("background-color", color);

			   		 var t = setTimeout(function() {
			   		 	el.body.css("background", background);
			   		 	el.body.css("background-color", background_color);
			   		 	el.body.css("background-image", background_image);

			   		 }, 100);
			   	}
			   	init(color);
			};
})(jQuery);