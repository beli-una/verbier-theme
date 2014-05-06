function initListingFilterRemoval(){

    vdm.addEventlistener( 'DELETE_FILTER', function( e, item ){

        AJAX_DATA.page = 1;
        $(".ajax_pagination").data("page", 1);
        $(e.data.item).remove();

        switch(page_checker()){
        case 'bus_listing_page':
            vdm.getData( ['business.tmpl.js',  'business_bot.tmpl.js', 4], '.accomidations', AJAX_DATA, businessDataHandler);
            break;
            
        case 'trail_listing_page':
            vdm.getData('trails.tmpl.js', '.accomidations', AJAX_DATA, trailAPI);
            break;
            
        default:
            if (AJAX_DATA["filter"]["village"].length == 0 ){
                var village_top = $($("ul[data-type='village'] li:first"));
                village_top.text(village_top.data('value').toUpperCase());
            }
            vdm.getData('hotels.tmpl.js' , '.accomidations', AJAX_DATA, basicDataHandler);
        }       
    });

    vdm.addEventlistener( 'DELETE_ALL_FILTERS', function( e ){

        $(".ajax_pagination").data("page", 1);
        AJAX_DATA.page = 1;
        resetFilterUI();

        switch(page_checker()){
        case 'bus_listing_page':
            vdm.getData( ['business.tmpl.js',  'business_bot.tmpl.js', 4], '.accomidations', AJAX_DATA, businessDataHandler);
            break;
            
        case 'trail_listing_page':
            vdm.getData('trails.tmpl.js', '.accomidations', AJAX_DATA, trailAPI);
            break;
            
        default:
            if ((typeof AJAX_DATA["filter"]["village"] !== "undefined" )&&(AJAX_DATA["filter"]["village"].length == 0 )){
                var village_top = $($("ul[data-type='village'] li:first"));
                village_top.text(village_top.data('value').toUpperCase());
            }
            vdm.getData('hotels.tmpl.js' , '.accomidations', AJAX_DATA, basicDataHandler);
        }       

    });

}

function resetFilterUI(){
    
    /*
     * Hotels & Villages
    */
    
    // Remove Classes
    $('.uw_accommodations_dropdown').removeClass('open');
    $('.uw_accommodations_dropdown li').removeClass('selected');
    
    // Hide & Show
    $('.uw_accommodations_dropdown li').fadeOut('fast');
    $('.uw_accommodations_dropdown li:first-child').fadeIn('medium');
    
    /*
     * Trip Dates
    */
    
    // Remove Classes
    $('.ui-datepicker-calendar td').removeClass('dp-start-highlight');
    $('.ui-datepicker-calendar td').removeClass('dp-highlight');
    
    // Hide & Show
    $('.uw_datepicker').fadeOut('fast');
    
    /*
     * Language
    */
	$('.verbier_dropdown li').removeClass('selected');
	
	/*
	 * Amenities
	*/
	
	$('.amenities_dropdown li').removeClass('selected');
	
	/*
	 * Rates range slider
	*/
	
	var low = 50;
	var high = 1450;
	$( '.gutter' ).slider('values', 0, low );
	$( '.gutter' ).slider('values', 1, high );
	$('.uw_slider_filter .details .low span').text( "50" );
	$('.uw_slider_filter .details .high span').text( "1,450" );
}
