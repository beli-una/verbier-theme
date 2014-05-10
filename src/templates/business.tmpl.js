<div class="business_container_small">
	<div class="business_small_img">
		<img src="{{header_url}}" />
	</div>
	<a class='business_small_img_link' href="{{url}}" data-index_x="{{x}}" data-index_y="{{y}}"></a>
	<h1>{{name}}</h1>
	<h2>{{village}}</h2>
	<div id="travel_book_ribbon">
		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="{{json}}">
			<div class="info-text">
				<p class="selected">{{translate "add_travel_book" "translation_templates"}} </p>
				<p>{{translate "remove_travel_book" "translation_templates"}}</p>
			</div>
		</div>
	</div>
</div>