(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		
		$('.theme_one_select').on('click', function(){
			$('#theme').addClass('theme_one').removeClass('theme_two');
			
			return false;
		});
		$('.theme_two_select').on('click', function(){
			$('#theme').addClass('theme_two').removeClass('theme_one');
			
			return false;
		});
		
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
