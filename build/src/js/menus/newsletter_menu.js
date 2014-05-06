$( document ).ready(function( e ){
    
    $('.uw_newsletter_dialog').hide();
    
    mouseleaveMultiple( '.uw_newsletter_button, .uw_newsletter_dialog', newsOpen, newsClose);
	    
    $('.uw_newsletter_dialog form').on('submit', subscribeToNewsletter ); 
});

function newsOpen(){
     $('.uw_newsletter_button').addClass('selected');
     $('.uw_newsletter_dialog').show();
 }

 function newsClose(){ 
      $('.uw_newsletter_button').removeClass('selected');
      $('.uw_newsletter_dialog').hide();
 }

function restartCapcha(){
	
    Recaptcha.widget = Recaptcha.$("recaptcha_widget_div"); 
	Recaptcha.challenge_callback();
	Recaptcha.reload();
	
    
	mouseleaveMultiple( '.uw_newsletter_button, .uw_newsletter_dialog', newsOpen, newsClose);
}

function subscribeToNewsletter( e ){
    
    e.preventDefault();
    
    // Append form response to widget
    $('.newsletter_form_response').remove();
	$('.uw_newsletter_dialog').prepend('<div class="newsletter_form_response"></div>');

    $.ajax({
        
        type: 'POST',
        dataType: 'json',
        data: $('.uw_newsletter_dialog form').serialize(),
        
        success: function(data){
            
            if(typeof data.errors === 'undefined'){
                
				$('.uw_newsletter_dialog div')[1].remove();
                $('.newsletter_form_response').append( 'Thank you for signing up for our newsletter.' );
				setTimeout(function(){
					mouseleaveMultiple( '.uw_newsletter_button, .uw_newsletter_dialog', newsOpen, newsClose);
				}, 1000);
                
            } else {
                
                // Populate newsletter form response
				$( data.errors ).each(function( index, value ){
					if(typeof value.recaptcha !== 'undefined'){
						$('.newsletter_form_response').append( "<p>" + value.recaptcha[0] + "</p>" );
					} else {
						$('.newsletter_form_response').append( "<p>" + value.error.unroole_feedback_form_fields[0] + "</p>" );
					}
                });
				restartCapcha();
            }
        },
        
        error: function(jqXHR, textStatus, errorMessage) {
           
            $('.uw_newsletter_dialog form').hide();
            $('.newsletter_form_response').append( "<p>" + errorMessage + "</p>" );
        }
    });
}