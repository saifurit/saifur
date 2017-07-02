(function($){
	"use strict";
	
	jQuery(document).ready(function($){
		var mymap = {lat: 23.5874946, lng: 90.8445465};
		$('.map')
		  .gmap3({
			zoom: 12,
			scrollwheel: false,
			center: mymap,
			mapTypeId: "shadeOfGrey", // to select it directly
			mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
			}
			
		  })
		.styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#ff0000"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#777777"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#999999"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#cccccc"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#dddddd"},{"lightness":17}]}
        ],
        {name: "Shades of Grey"}
      )
		.infowindow({
			position: mymap,
			content: "Hello World!"
		  })
			.marker({
			position: mymap,
			icon: 'assets/img/map-marker.png'
//			icon: 'http://maps.google.com/mapfiles/marker_brown.png'
			})
		.then(function (infowindow) {
        var map = this.get(0);
        var marker = this.get(1);
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
			
			
      });
		
		
	});
	
	
	jQuery(window).load(function(){
		
	});
	
})(jQuery);
