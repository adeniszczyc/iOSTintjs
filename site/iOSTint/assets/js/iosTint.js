(function($) {
	        $.iosTint = function(color) {
			    var init = function(color) {

			    	// Check if a color has actually been defined
			   		if (color.length > 0) {

				    	// Check to see if on iOS7
				        var supported = isiosSeven();
				        if (supported == true) {
				        	// If so, great! Let's change them colours
				        	switchBackground(color);
				        }
				    }

			    };
			    var el = {
			    	body: $("body")
			    };
			    var isiosSeven = function() {

			    	// Get user agent, match with iOS7 user agent
			    	var userAgent = navigator.userAgent;
			    	var search = userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i);
			    	if (search !== null) {
			    		// Yup, we're on iOS7
			    		return true;
			    	}
			    	else {
			    		// Nup, no need to do anything else
			    		return false;
			    	}
			    };
			   	var switchBackground = function(color) {

			   		 // Get the original body background properties
			   		 var background = el.body.css("background");
			   		 var background_color = el.body.css("background-color");
			  		 var background_image =  el.body.css("background-image");

			  		 // If background color is not set, presume white
			   		 if (background_color == "rgba(0, 0, 0, 0)") {
			   		 	background_color = "rgba(255, 255, 255, 1)";
			   		 }
			   		 
			   		 // Apply original colour to the background-image property to overlay new background
			   		 el.body.css("background-image", background_image  + ", linear-gradient(to bottom, " + background_color + " 0%, " + background_color + " 100%)");

			   		 // Make the bosy background color the tint colour
					 el.body.css("background-color", color);

			   		 var t = setTimeout(function() {

			   		 	// After 100 milliseconds, revert background styles to original
			   		 	el.body.css("background", background);
			   		 	el.body.css("background-color", background_color);
			   		 	el.body.css("background-image", background_image);

			   		 }, 100);
			   	}
			   	init(color);
			};
})(jQuery);