(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		
		$('.home_page_slide').owlCarousel({
			items: 1,
			loop: true,
			autoplay: false,
			dots: true,
			nav: true,
			navText: ["<i class='zmdi zmdi-long-arrow-left'></i>" , "<i class='zmdi zmdi-long-arrow-right'></i>"],
		});
		
		$('.case_study_carousel').owlCarousel({
			items: 3,
			loop: true,
			margin: 30,
			autoplay: true,
			nav: false,
			dots: true,
		});
		
		$('.testimonial_carousel').owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			nav: false,
			dots: true,
		});
		
		$('.logo_carousel').owlCarousel({
			items: 6,
			loop: true,
			margin: 30,
			autoplay: true,
			nav: false,
			dots: false,
		});
		
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
