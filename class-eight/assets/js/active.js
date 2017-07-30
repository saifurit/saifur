(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		$('.product_carousel').owlCarousel({
            items:4,
            margin:30,
            nav:true,
            loop:true,
            navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-left'></i>"]
        });
	});
	
	
	jQuery(window).load(function(){
		
	});
	       
})(jQuery);