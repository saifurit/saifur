(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		
        $('.portfolio_list').masonry({
             percentPosition: true,  
        });
        
        $(".single_portfolio").hover(function(){
            $(".single_portfolio .portfolio_hover h2").removeClass("animated slideInUp");
            $(this).find(".portfolio_hover h2").addClass("animated slideInUp");
        });
        
        $(".navbar_toogle").on('click', function(){
            $(".off-canvas-menu").addClass("active");
            $(".off_canvas_menu_overlay").addClass("active");
        });
        
        $(".menu_cross i.fa, .off_canvas_menu_overlay").on('click', function(){
            $(".off-canvas-menu").removeClass("active");
            $(".off_canvas_menu_overlay").removeClass("active");
        });
        
        $(".header_area").headroom();
        
        
        
        
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);