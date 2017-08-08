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
            autoplay: true,
            margin: 0,
            responsive : {
                0 : {
                    items: 1
                },
                480 : {
                    items: 1
                },
                768 : {
                    items: 2
                },
                992 : {
                   items: 3 
                }
                
            }
        });
        
        var caseStudyCarousel = $('.case-study-carousel');
        caseStudyCarousel.owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive : {
                0 : {
                    items: 1
                },
                480 : {
                    items: 1
                },
                768 : {
                    items: 2
                },
                992 : {
                   items: 3 
                }
                
            }
        });
        
        var tesimonialCarousel = $('.testimonial-carousel');
        tesimonialCarousel.owlCarousel({
            items: 1,
            nav: false,
            dots: true,
            loop: true,
            autoplay: true,
        });
        
        var brandLogoCarousel = $('.brand-logo-carousel');
        brandLogoCarousel.owlCarousel({
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            responsive : {
                0 : {
                    items: 2
                },
                768 : {
                    items: 4
                },
                992 : {
                   items: 6 
                }
                
            }
        });
        
        var homePageSlider = $('.home-page-slider');
        homePageSlider.owlCarousel({
            items: 1,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"],
            dots: false,
            loop: true,
            autoplay: true,
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
        
        // magnific popup for video
		$('.video-play-btn').magnificPopup({
			type: 'video',
		});
        
        
        // Slicknav js
        $('#traffic-menu').slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true
        });
        
        // responsive trigger
        $('.responsive-trigger').on('click', function(){
            $(this).toggleClass('active');
            $('.responsive-checker-form').toggleClass('active');
        });
        
        
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
