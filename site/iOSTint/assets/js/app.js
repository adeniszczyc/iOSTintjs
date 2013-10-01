  	function change_colors() {
  		var colors = ["yellow", "green", "blue", "red"];
  		var random = colors[Math.floor(Math.random()*colors.length)];	
  		[].forEach.call( document.querySelectorAll(".main-color"), function(p) {
		  p.className  += " main-color-" + random;
		});
		$.iosTint(random);
  	}
  	window.onload = change_colors();