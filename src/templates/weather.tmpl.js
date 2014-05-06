{{#each village}}
<div class="mountain_container">
	<div class="today_container">
		<h1>{{name}}</h1>
		<div class="symbol_large sun"><img data-src="{{symbol}}"/></div>
		<span class="temp1">{{temp_morn}}<sup>&deg;</sup>/{{temp_aft}}<sup>&deg;</sup></span>
		<span class="windspeed">{{wind_speed}}<b>km/h</b></span>
		<span class="direction">{{wind_direction}}</span>
	
	</div>
	<div class="days_container">
		{{#each day}}
		<div class="day_container">
			<h1>{{short_day}}</h1>
			<div class="symbol_small"><img data-src="{{symbol}}"/></div>
			<span>{{temp_morn}}<b>&deg;</b>/ {{temp_aft}}<b>&deg;</b><span>
		</div>
		{{/each}}
	</div>
</div>
{{/each}}