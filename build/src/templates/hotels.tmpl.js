<div class="accommodation_container_small">
	<div class="article_small_img">
		<img src="{{header_url}}"></img>
	</div>
	<a class='article_small_img_link' href={{url}}></a>
	<h1>{{name}}</h1>
	<div class="accommodation_star_{{rating}}">
		<img src="https://factorylabs-unroole.s3.amazonaws.com/system/asset_images/41/original/stars.png?1382024420"/>
	</div>
	<h2>{{village}}</h2>
	<p>{{address}}</p>
	<div class="estatblishment_type">
		{{#each estatblishment_type}}
			<div class="my_travel_book_{{this}}">
			</div>
		{{/each}}
	</div>
	<div id="travel_book_ribbon">
		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="{{json}}">
			<div class="info-text">
				<p class="selected">{{translate "add_travel_book" "translation_templates"}} </p>
				<p>{{translate "remove_travel_book" "translation_templates"}}</p>
			</div>
		</div>
	</div>
</div>
