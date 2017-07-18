(function($){
	
	jQuery(document).ready(function($){
		
		var pImg = $('.right_slide').height();
		
		$('.left_slide').css('height', pImg + 'px');
		
		
		
		
		var rImg = $('.recent_left').height();
		var topImg = $('.top_recent_img').height();
		
		$('.recent_right').css('height', rImg + 'px');
		$('.recent_content').css('height', (rImg - topImg) + 'px');
		
        var footerHeight = $('.footer_top_area').height();
		$('.site_main_wrap').css('margin-bottom', footerHeight + 'px');
		
		
		
	});
	
})(jQuery);


