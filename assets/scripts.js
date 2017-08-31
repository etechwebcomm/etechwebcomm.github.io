jQuery(document).foundation();

//jQuery(document).ready(function($){

          //  var BV = new $.BigVideo({
				//container:$('.video-bg'),
				// shrinkable:true
				
				//});
			//BV.init();
			//BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true});
			
	   // });

jQuery(window).load(function(){
	'use strict';
	 jQuery('.grid').masonry({
	  columnWidth: 186,
	  itemSelector: '.grid-item',
	  'gutter': 10
	});
 
});

/**
 * Handles toggling the sidebar widgets for small screens.
 */
jQuery( document ).ready( function( $ ) {
	$( ".widget-title-collapse" ).click(function() {
		 if(Foundation.utils.is_small_only()) {
			$(this).next( ".widget-collapse" ).toggleClass('hide-for-small-only');
		 }
});
	
} );