function shimAJAXSlideshow( el ){

    // Create buttons
    var prev = $('<a/>');
    prev.attr('class', 'slideshow_prev_item');
    
    var next = $('<a/>');
    next.attr('class', 'slideshow_next_item');
    
    // Wrapping the images in li tags
    $( el ).find( 'img' ).wrap('<li></li>');
    
    // Wrapping the li tags in an ol
    $( el ).find('li').addClass('slideshow_item').addClass('slideshow_image').wrapAll('<ol></ol>');
    
    // Add the link buttons
    $( el ).find('div').prepend( prev );
    $( el ).find('div').append( next );
}

function initAJAXSlideshow( el ){

    shimAJAXSlideshow( el );
    initSlideshow( el );
}

function initSlideshow( el ){
	
	$.each( $( el ), function( index, val ){
		
		var ss = $( this ).slideshow({

			display: [0],
			pagination: true
		});
	
		ss.slideshow('play', parseInt( $(el).data('rotation-speed') ));
	});

    $(el).on('mouseleave', function(){
        $(el).slideshow('play', parseInt( $(el).data('rotation-speed') ));
    });

    $(el).on('mouseenter', function(){
        $(el).slideshow('pause');
    });
}

/*
 * EVENTS
*/

function slideshowHandler( event ){
	
    var data = event.data;
	var instance = event.data[0];
}

function paginationHandler( event ){

    var data = event.data;
	var instance = event.data[0];
    
    $('.slideshow_text li').hide();
    $('.slideshow_text li').eq(data[1]).show();
}