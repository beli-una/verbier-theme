<div class="event_container_small">
	<h1>{{name}}</h1>
	<h2>{{start_date}}</h2>
	<p>{{desc}}</p>
	<div id="travel_book_ribbon">
		<div class="my_travel_book_icon" onclick="addTravelBook(this)" data-item="{{json}}">
			<div class="info-text">
				<p class="selected">{{translate "add_travel_book" "translation_templates"}} </p>
				<p>{{translate "remove_travel_book" "translation_templates"}}</p>
			</div>
		</div>
	</div>
</div>
