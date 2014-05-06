$( document ).ready(function( e ){
	
	var dataType = $( '.uw_slider_filter' ).find( '[data-type]' ).data( 'type' );
    
   $( '.gutter' ).slider({
        
        range: true,
		min: 50,
		max: 1450,
        values: [ 50, 1450 ],
        slide: function( event, ui ) {
            
            $('.uw_slider_filter .details .low span').empty();
            $('.uw_slider_filter .details .high span').empty();

			$('.uw_slider_filter .details .low span').text( ui.values[ 0 ] );
            $('.uw_slider_filter .details .high span').text( ui.values[ 1 ] );
        },
        
        stop: function( event, ui ) {
            var low = ui.values[ 0 ];
            var high = ui.values[ 1 ];
			AJAX_DATA.filter[ dataType ] = {low: low, high: high, item: 'rate_range' };
            vdm.getData( 'hotels.tmpl.js', '.accomidations', AJAX_DATA, basicDataHandler);
        }
    }); 
});