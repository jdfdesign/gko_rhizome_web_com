//= require gko/jquery.elastidegallery 
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
		$('.carousel').each(function(index) {
			var _self = $(this);
			console.log(_self.find('.item').length);
			if(_self.find('.item').length > 1) {
				_self.carousel();
			}
		}); 
	}

	init(); 
});