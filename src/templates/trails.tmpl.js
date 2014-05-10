<div class="accommodation_container_small">
	<div class="article_small_img">
		<img src="{{header_url}}"></img>
	</div>
	<a class='article_small_img_link' href={{url}}></a>
	<h1>{{name}}</h1>
	<h2>{{village}}</h2>
	<h3 class="upper">{{duratin}}</h3>
	<h3>{{difficulty}}</h3>
	<div id="travel_book_ribbon">
		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="{{json}}">
			<div class="info-text">
				<p class="selected">{{translate "add_travel_book" "translation_templates"}} </p>
				<p>{{translate "remove_travel_book" "translation_templates"}}</p>
			</div>
		</div>
	</div>
</div>
