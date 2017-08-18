(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		
        /*
         * ----------------------------------------------------------------------------------------
         *  owl-carousel
         * ----------------------------------------------------------------------------------------
         */
        var welcome_slider = $('.welcome_slider');
        welcome_slider.owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            autoplay: true,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        });
        
        var partner_slide = $('.partner_slide');
        partner_slide.owlCarousel({
            loop: true,
            margin: 30,
            responsive : {
                0 : {
                    items: 3
                },
                768 : {
                    items: 5
                },
                992 : {
                   items: 7 
                }
            }
            
        });
        
        /*
         * ----------------------------------------------------------------------------------------
         *  owl-carousel Animatation
         * ----------------------------------------------------------------------------------------
         */
        $('.welcome_slider').on('translate.owl.carousel', function(){
            $('.welcome_text h2, .welcome_text p').addClass('animated fadeInUp').css('opacity', '0');
        });
        $('.welcome_slider').on('translated.owl.carousel', function(){
            $('.welcome_text h2, .welcome_text p').removeClass('animated fadeInUp').css('opacity', '1');
        });
        
        // Slicknav js
        $('#mainmenu').slicknav();
        
        
        
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
