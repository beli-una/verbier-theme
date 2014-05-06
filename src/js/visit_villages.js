function initVisitVillages(){
	// Creates hide and show for left for collapse manu
	$('.collapse_button').on('click', function(e){
		e.preventDefault();
		parent = $(this).parent();
		if(parent.hasClass('full')){
			parent.removeClass('full');
			parent.removeClass('middle');
            parent.addClass('small');
		} else if (parent.hasClass('middle')){
			parent.removeClass('middle');
            parent.addClass('small');
		} else {
			parent.addClass('middle');
		}
	});

	// Create transitions for the contant button
	$('.contact_button').on('click', function(e){
		e.preventDefault();
		if($(this).closest('.vtv_left_content, .vtv_right_content').hasClass('full')){
			$(this).closest('.vtv_left_content, .vtv_right_content').removeClass('full');
		} else {
			$(this).closest('.vtv_left_content, .vtv_right_content').addClass('full');
		}
	});

	// Creates pagination
	$.each($('.description_text_container'), function(){
		parent = $(this).closest('.content_description');

		number_of_pages = Math.ceil($(this).height()/125);
		class_name = "vtv_" + number_of_pages + "_pag";

		parent.addClass(class_name);
		parent.addClass('vtv_pag_selected_1');
		
		if(number_of_pages <= 1){
			$(this).closest('.vtv_description_container').find('.description_navigation .vtv_pag').hide();
		}

	});

	$('.vtv_pag').on('click', function(e){

		e.preventDefault();
		page_number = $(this).attr('class').split(' ')[1].split('_')[1];

		parent = $(this).closest('.content_description');

		classes_all = parent.attr('class').split(' ');
		classes_all.pop();
		classes_all.push('vtv_pag_selected_' + page_number );
		parent.attr('class', classes_all.join(' '));
	});
	
	$('.amenities_button').on('click', function(e){
		e.preventDefault();
	});
	
	$('.amenities_button').on('mouseenter', function(e){
		$(this).addClass('hover');
		$(this).siblings('.vtv_amenities_dropdown').show();
	});
    
    $('.blue_navigation').on('mouseleave', function(e){
		$(this).find('.amenities_button').removeClass('hover');
		$(this).find('.vtv_amenities_dropdown').hide();
	});
    
	$('.vtv_amenities_dropdown').on('mouseleave', function(e){
		$('.amenities_button').removeClass('hover');
		$(this).hide();
	});	
}