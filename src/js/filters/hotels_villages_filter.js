$( document ).ready(function( e ){
	
	$.each( $('.uw_accommodations_dropdown'), function( index, value ) {
		
		var self = this;
		
		var getDataType = function( el ){
		
			return el.filter( '[data-type]' ).data( 'type' );
		}
		
		var dataType = getDataType( $(this) );
		var id = 'uw_accommodations_dropdown_' + index;
		
		$(value).attr( 'id', id );
		
		var filter = new $.verbierFilter($( '#' + id ), {
		
			mouseenter: function(e){
			
				e.preventDefault();
				$(this).addClass('open');
				$(this).find('li').fadeIn('medium');
			},
			
			mouseleave: function(e){
			
				e.preventDefault();
				$(this).removeClass('open');
				$(this).find('li').fadeOut(10);
				$(this).find('li:first-child').fadeIn('medium');
			},
			
			click: function(e){
				
				switch( getDataType( $( self ) ) ){
				
					case 'hotel':
						
						if(typeof($(this).data('link')) !== "undefined"){
							window.location.href = $(this).data('link');
						}
						
					break;
						
					case 'village':
					default:
						
					if( $( this ).index() != 0 ){
						
						$(this).parent().find('li').eq(0).text($(this).text());
						$(this).parent().find('li').removeClass('selected');
						
						$(this).addClass('selected');
						
						var val = $(this).data( 'value' );
						var txt = $(this).text();
						
						if(AJAX_DATA.filter[ dataType ]){
							
							delete AJAX_DATA.filter[ dataType ];
							$('.village').remove();
						}
						
						AJAX_DATA.filter[ dataType ] = [val];
						AJAX_DATA.display[ dataType ] = [txt];

						Session.set('filter', {village: val});
						switch (page_checker()) {
							case 'bus_listing_page':
								vdm.getData(['business.tmpl.js', 'business_bot.tmpl.js'], '.accomidations', AJAX_DATA, businessDataHandler);
								break;
							default:
								vdm.getData( 'hotels.tmpl.js', '.accomidations', AJAX_DATA, basicDataHandler);
								break;
						}
						$(this).parent().removeClass('open');
						$(this).parent().find('li').fadeOut(10);
						$(this).parent().find('li:first-child').fadeIn('medium');
					}
						
					break;
				}
			}
		});
	});
});