(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		
		
		// magnific popup for video
		$('.video_play').magnificPopup({
			type: 'video',
		});
		
		
		// testimonial slider
		$('.testimonial_slide').owlCarousel({
			items: 1,
			loop: true,
			autoplay: false,
		});
		
		
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});

		//Click event to scroll to top
		$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},700);
			return false;
		});
		
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
