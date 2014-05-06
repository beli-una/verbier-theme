function initHotelDetails(){
	$('.rating div').addClass('accommodation_star_'+$('.rating').data('rating'));
	$('.rating div').html("<img src='https://factorylabs-unroole.s3.amazonaws.com/system/asset_images/41/original/stars.png'/>");

	var establishment_type = $(".tourism_establishment").data('establishment_type')
	if( establishment_type && establishment_type != "" ){
		establishment_type = establishment_type.split(",");
		var html="";
		var icon_path;

		$.each(establishment_type, function(i){
			icon_path = unroole.theme_absolute_path + "/media_assets/images/estableshment_type/" + establishment_type[i] + ".png";
			html +="<img src='" + icon_path + "' />";
		});
		$(".tourism_establishment").html(html);
	}

	var payment_method = $(".payment_type").data('payment_type')
	if(payment_method && payment_method.length != "" ){
		payment_method= payment_method.split(",");
		var html="";
		var icon_path;

		$.each(payment_method, function(i){
			icon_path = unroole.theme_absolute_path + "/media_assets/images/payment_icons/" + payment_method[i] + ".png";
			html +="<img src='" + icon_path + "' />";
		});
		$(".payment_type").html(html);
	} else{
		$(".payment_methods_header").hide();
	}
	$('.website_link').attr('href',$('.web').data('web_url'));
	hide_empty_data(".booking","booking_url",".hotels_book_button","href");
	// Rates table
	if($(".uw_ts_rates tr").length < 2 ){
		$(".uw_ts_rates").hide();
	}
	// Details
	if( $(".uw_ts_item_details h3").length < 2 ){
		$(".item_details_details").hide();
	}
	// Rates
	if ($(".uw_ts_rates tr").length < 2 && $(".payment_type img").length == 0 ){
		$(".item_details_rates").hide();
	}
	
	var custome_filter = { filter:{ rating: $(".search_params").data("rating"), exclude_item: $(".search_params").data("id") }};
	vdm = new VerbierDataManager();

	vdm.getData( "hotels.tmpl.js", ".uw_tourism_event_list", custome_filter, basicDataHandler );
}
