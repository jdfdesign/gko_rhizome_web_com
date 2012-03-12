//= require gko/jquery.elastidegallery 
//= require zurb/foundation/modernizr.foundation.js 
//= require zurb/foundation/jquery.orbit-1.4.0.js	
$(document).ready(function() {

	function resizeContent() {
		var bodyHeight = $("#wrapper-wide-body").height(),
				winHeight = $(window).height(),
				winWidth = $(window).width(), 
				h = Math.max(bodyHeight, winHeight);
    
		if(winWidth < 980 ) {
			h = 1;
		}
		$("#main-column, #header").css({'min-height': h});
	}

	function init() {
		resizeContent();
		if($('.images:first').length > 0) {
			Gallery.init($('.images:first'));
		} 
		$("body").fadeIn(3000).css("display", "block");
		$(window).bind('resize', resizeContent); 
		$('.carousel').carousel(); 
		
	}

	init(); 
});