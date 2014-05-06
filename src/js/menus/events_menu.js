$( document ).ready(function( e ){
    
    $( '.uw_events_menu .nav_item_level_0 li' ).eq(0).addClass('selected');
    $( '.uw_events_menu .nav_item_level_0 li' ).on('click', eventsClickHandler);
    $( '.uw_events_menu .nav_item_level_0 li' ).eq(0).trigger('click');
});

/*
 * EVENTS MENU
*/

function eventsClickHandler( e ){
    
    e.preventDefault();
    
    toggleSelected( $(this) );
    
    var i = $(this).index();
    
    $( '.event_menu_tab' ).fadeOut('fast');
    $( '.event_menu_tab' ).eq( i ).fadeIn('medium');
    addImageClasses(); // the function is not working for none displayed elements 
    $('.main_menu_box').css('height', 'auto' );// Forces the side bar to the bottom of the screen
    //$('.main_menu_box').css('height', $(document).height().toString() + 'px' );// Forces the side bar to the bottom of the screen
}