(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		
		$('.project_filter li').on('click', function(){
			
			$('.project_filter li').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-filter');
			
			$('.project_list').isotope({
				filter: selector,
			});
		});
		
		
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
