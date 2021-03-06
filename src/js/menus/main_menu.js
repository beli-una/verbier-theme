$( document ).ready(function( e ){
    
	
	$( '.uw_navigation .nav_item_level_0:first li' ).on('click', tier1Handler);
	
	//
	$('.main_menu li').removeClass('current');
	$('.main_menu li>span>.current').parent().parent().addClass('current');
	//    
	
    mouseleaveMultiple( '#accommodations_slideout, .accommodations_slideout', function(){$('#accommodations_slideout').stop().fadeIn('medium')}, function(){ $('#accommodations_slideout').stop(true, true).fadeOut('fast') });
	 // FACTORY ANIMATIONS: ROUND 1
	
    mouseleaveMultiple( '#gosee_slideout, .gosee_slideout', function(){$('#gosee_slideout').stop().fadeIn('medium')}, function(){ $('#gosee_slideout').stop(true, true).fadeOut('fast')}); // FACTORY ANIMATIONS: ROUND 1
    
    mouseleaveMultiple( '#eatdrink_slideout, .eatdrink_slideout', function(){$('#eatdrink_slideout').stop().fadeIn('medium')}, function(){ $('#eatdrink_slideout').stop(true, true).fadeOut('fast')}); // FACTORY ANIMATIONS: ROUND 1
    
    mouseleaveMultiple( '#village_map_slideout, .village_map_slideout', function(){$('#village_map_slideout').stop().fadeIn('medium')}, function(){$('#village_map_slideout').stop(true, true).fadeOut('fast')}); // FACTORY ANIMATIONS: ROUND 1
    
    mouseleaveMultiple( '#traveller_slideout, .traveller_slideout', function(){ $('#traveller_slideout').stop().fadeIn('medium')}, function(){ $('#traveller_slideout').stop(true, true).fadeOut('fast')});  // FACTORY ANIMATIONS: ROUND 1
	
	$('#hs_activities_winter>span>a').on('click', function(e){
	
		e.preventDefault();
		$('#hs_activities_winter').addClass("selected");
		$('#hs_activities_summer').removeClass("selected");
		$('#hs_activities_summer .nav_item_level_1').hide();
		$('#hs_activities_winter .nav_item_level_1').show();
	});
	
	$('#hs_activities_summer>span>a').on('click', function(e){
		
		e.preventDefault();
		$('#hs_activities_winter').removeClass("selected");
		$('#hs_activities_summer').addClass("selected");
		$('#hs_activities_winter .nav_item_level_1').hide();
		$('#hs_activities_summer .nav_item_level_1').show();
	});
	
});

function tier1Handler( e ){
	
    //e.preventDefault();
	
	$('.main_menu li').removeClass('current');
	$('.main_menu li>span>.current').parent().parent().addClass('current');
	
    toggleSelected( $(this) );
}
