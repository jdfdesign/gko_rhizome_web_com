//= require gko/jquery.elastidegallery
//= require zurb/foundation/jquery.orbit-1.4.0.js	
$(document).ready(function() {
	if($('.images:first').length > 0) {
		Gallery.init($('.images:first'));
	}
	$('#orbit').orbit({ 
		bullets : true, 
		animation : "horizontal-push",
		animationSpeed: 800,
		timer: true,
		fluid: false });
});