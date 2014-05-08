<div class="business_flyout" data-index_x="{{x}}" data-index_y="{{y}}">
	<a href="#" class="business_flyout_close">
		<img src="https://factorylabs-unroole.s3.amazonaws.com/system/asset_images/85/original/close_button_flyout.png" />
	</a>
	<div class="column_0">
		<div class="business_map_canvas" data-lat="{{coords.[0]}}" data-lng="{{coords.[1]}}">
		<img src="http://maps.googleapis.com/maps/api/staticmap?center={{coords.[0]}},{{coords.[1]}}&zoom=15&sensor=true&markers=color:red%7C{{coords.[0]}},{{coords.[1]}}&size=380x320&key=AIzaSyA92nN0Kua54tvMskt_1bn_48nqE4PLNbY">
		</div>
	</div>

	<div class="column_1">
  	{{#if address}}
      <p>{{address}}</p>
    {{/if}}
    {{#if phone}}
		  <a href="tel:{{phone}}"> {{phone}}</a>
    {{/if}}
    {{#if fax}}
      <a href="tel:{{fax}}"> {{fax}}</a>
		{{/if}}
    {{#if email}}
      <a href="mailto:{{email}}" target="_blank" class="blue_link">{{email}}</a>
    {{/if}}
    {{#if website}}
		  <a href="{{website}}" target="_blank" class="blue_link">{{website}}</a>
		{{/if}}
    {{#if vcard_url}}
      <a href="{{vcard_url}}" target="_blank" class="vcard">VCARD</a>
	  {{/if}}
  </div>

	<div class="column_2">
		<ul class="opening" >
			<h3> Opening Period </h3>
			{{#each opening_period}}
				<li>{{this}}</li>
			{{/each}}
			{{#each opening_hours}}
				<li>{{this}}</li>
			{{/each}}
		</ul>
    {{#if desc}}
		  <div class="business_flyout_description">
			  <h3> Description </h3>
			  <p>{{desc}}</p>
		  </div>
    {{/if}}
	</div>
</div>
