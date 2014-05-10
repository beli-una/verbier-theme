$( document ).ready(function( e ){
   
    var dp_dates = [];
    
    $( '.datepicker' ).datepicker({
        
        inline: true,
        dayNamesMin: translation_helper("date_names","translate_dates"),
        dateFormat: 'yy-mm-dd',
        
        beforeShowDay: function( date ) {
            
            if(dp_dates[0] && (date.getTime() == dp_dates[0].getTime())){
                
                return [true, 'dp-start-highlight'];
                
            } else if ( dp_dates[1] && (date.getTime() == dp_dates[1].getTime()) ){
                
                return [true, 'dp-start-highlight'];
            }

            return [true, dp_dates[0] && ((date.getTime() == dp_dates[0].getTime()) || (dp_dates[1] && date >= dp_dates[0] && date <= dp_dates[1])) ? 'dp-highlight' : ''];
        },
        
        onSelect: function( dateText, inst ) {
            
            var selectedDate = $.datepicker.parseDate( 'yy-mm-dd' , dateText );
            
            if(dp_dates.length >= 2){
                
                dp_dates.shift();
            }
                                        
            if(dp_dates[0] > selectedDate){
                
                dp_dates.shift();
            }
            
            dp_dates.push(selectedDate);
        } 
    });
    
    var datePickerOpen = false;
    
    $('.uw_datepicker').fadeOut('fast');
    
    $('.trip_dates_dropdown').on('mouseenter', function( e ){
        
        if(!datePickerOpen){
        
            datePickerOpen = true;
            $('.uw_datepicker').fadeIn('medium');
        }
    });
    
    $('.trip_dates_dropdown').on('mouseleave', function( e ){
    
        if(datePickerOpen){
        
            datePickerOpen = false;
            $('.uw_datepicker').fadeOut('fast');
        }
    });
    
    $('.uw_datepicker .apply_filters_button').on('click', function(e){
    
        e.preventDefault();
        
        $('.uw_datepicker').fadeOut('fast');
        
        if( dp_dates.length === 2 ){
            
            var val = jQuery.map(dp_dates, function(n) {
                  
                return  n.toLocaleDateString();
            });
            
            if(AJAX_DATA.filter['dates']){
                
                delete AJAX_DATA.filter[ 'dates' ];
                
                $('.dates').remove();
            }
            
            AJAX_DATA.filter['dates'] = { begin: val[0], end: val[1], item: "date_range" };
            
            vdm.getData( 'hotels.tmpl.js', '.accomidations', AJAX_DATA, basicDataHandler);
        }
    });
});
