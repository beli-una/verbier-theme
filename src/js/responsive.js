$( document ).ready(function( e ){$( window ).resize( responsiveHandler );});
$(window).load(function( e ){$( window ).trigger( 'resize' );});

function responsiveHandler( e ){
	
    var wh = parseInt( $( window ).height() );
    
	$('.main_menu_box').css('height', 'auto' );// Forces the side bar to the bottom of the screen
    //$('.main_menu_box').css('height', $(document).height().toString() + 'px' );// Forces the side bar to the bottom of the screen
    
    if( wh >= 750 ){
		
			/**
			 * General
			*/
			
	        $( 'body' ).removeClass( 'responsive_height' );
			
			/**
			 * Hero images
			*/
			
			if( $("#heroimage .uw_feature_slideshow").length !== 0){
				
				$("#heroimage .uw_feature_slideshow").height(700);
				$("#heroimage .slideshow_text").css("margin-top", "200px");
			}
			if( $(".uw_listing_slideshow").length !== 0){
					$(".uw_listing_slideshow").height(530);
			}
        
    }else{
		
		/**
		 * Logo
		*/
        
        if( !$( '.logo' ).hasClass( 'responsive_height' ) ){
        
            $( 'body' ).addClass( 'responsive_height' );
        }
		
			/**
			 * Hero image
			*/
			if( $("#heroimage .uw_feature_slideshow").length !== 0){
				
				$("#heroimage .uw_feature_slideshow").height(500);
				$("#heroimage .slideshow_text").css("margin-top", "150px");
			}
			if( $(".uw_listing_slideshow").length !== 0){
				$(".uw_listing_slideshow").height(330);
			}
    }	
}