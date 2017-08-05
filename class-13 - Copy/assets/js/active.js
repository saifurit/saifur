(function($){
	"use strict";
	
	jQuery(document).ready(function($){
        var homepageSlides = $(".homepage_slides");
        
        homepageSlides.owlCarousel({
            items:1,
            loop:true,
            nav:true,
        });
        
		$('.video-play-btn').magnificPopup({
            type:'video',
        });
	
        homepageSlides.on('translated.owl.carousel', function(event) {
            $(".welcome_text h4").addClass("animated zoomIn");
            $(".welcome_text h1").addClass("animated jackInTheBox");
        });
        homepageSlides.on('translate.owl.carousel', function(event) {
            $(".welcome_text h4").removeClass("animated zoomIn");
            $(".welcome_text h1").removeClass("animated jackInTheBox");
        });  
        
        $(".welcome_area").YTPlayer({
            fitToBackground: true,
            videoId: 'LSmgKRx5pBo'
        });
        
        
    });

        jQuery(window).load(function(){

        });	
})(jQuery);
