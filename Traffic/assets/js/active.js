(function($){
	"use strict";
	
	jQuery(document).ready(function($){
        /*===============
        owl carousel
        =================*/
        var caseStudyCarouselTheme2 = $('.case-study-carousel.theme-2');
        caseStudyCarouselTheme2.owlCarousel({
            items: 3,
            nav: false,
            dots: false,
            loop: true,
            margin: 0,
        });
        
        var caseStudyCarousel = $('.case-study-carousel');
        caseStudyCarousel.owlCarousel({
            items: 3,
            nav: false,
            dots: false,
            loop: true,
            margin: 30,
        });
        
        var tesimonialCarousel = $('.testimonial-carousel');
        tesimonialCarousel.owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
        });
        
        var brandLogoCarousel = $('.brand-logo-carousel');
        brandLogoCarousel.owlCarousel({
            items: 6,
            nav: false,
            dots: false,
            loop: true,
        });
        
        var homePageSlider = $('.home-page-slider');
        homePageSlider.owlCarousel({
            items: 1,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"],
            dots: false,
            loop: true,
        });
        
        /*===============
        adding class
        =================*/
        $('.theme-3 .single-testimonial-item').hover(function(){
            $('.theme-3 .single-testimonial-item').removeClass('active');
            $(this).addClass('active');
        });
        
        /*===============
        off canvas menu
        =================*/
        $('.menu_trigger').on('click', function() {
			$('.off_canvas_menu').addClass('active');
			$('.off_canvas_menu_shade').addClass('active');
		});
		
		$('.off_canvas_menu_shade, .menu_close').on('click', function() {
			$('.off_canvas_menu').removeClass('active');
			$('.off_canvas_menu_shade').removeClass('active');
		});
        
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
