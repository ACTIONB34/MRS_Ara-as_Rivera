$(document).ready(function(){

	$(".mrs-seat").click(function(){
		if($(this).hasClass("mrs-seat-available")){
		    $(this).removeClass("mrs-seat-available");
		    $(this).addClass("mrs-seat-selected");
		}else if($(this).hasClass("mrs-seat-selected")){			
		    $(this).removeClass("mrs-seat-selected");
		    $(this).addClass("mrs-seat-available");
		}
	})


  	// Get the modal
	var modal = document.getElementById("mrs-summary");

  	// Get the button that opens the modal
  	var btn = document.getElementById("mrs-proceed");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on the button, open the modal
	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
	    	modal.style.display = "none";
	    }
	}

});