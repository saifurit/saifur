(function($){
	"use strict";
	
	jQuery(document).ready(function($){
    
        $(".poutfolio_filter li").on('click',function(){

            var filterValue = $(this).attr('data-filter');
            $(".portfolio_list").isotope({
                filter: filterValue,
            });
            
            $(".poutfolio_filter li").removeClass("active");
            $(this).addClass("active");
        });
        $(".portfolio_list").isotope({
                itemSelector: '.single_portfolio',
                percentPosition: true,
                masonry: {
                    // use element for option
                columnWidth: '.single_portfolio',
                horizontalOrder: true,    
                }
        });
        
        $("body").perfectScrollbar();
        $(".another_scrollbar").perfectScrollbar({
            theme:'yellow',
        });
        
    });
    
    

    
    
    
    
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
