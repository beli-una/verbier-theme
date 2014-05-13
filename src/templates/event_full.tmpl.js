<div class="event_full {{id}}" >
	<img src="{{header_url}}" />
	<h1>{{name}}</h1>
  {{#each opening_period}}
		<h2>{{this}}</h2>
	{{/each}}
	<div class="event_full_description">
		<p>{{desc}}</p>
	</div>
  <div>
    <div class="event_map">
      <div class="event_map_canvas" data-lat="{{coords.[0]}}" data-lng="{{coords.[1]}}">
      <img src="http://maps.googleapis.com/maps/api/staticmap?center={{coords.[0]}},{{coords.[1]}}&zoom=15&sensor=true&markers=color:red%7C{{coords.[0]}},{{coords.[1]}}&size=380x320&key=AIzaSyA92nN0Kua54tvMskt_1bn_48nqE4PLNbY">
      </div>
    </div>

    <div class="event_additional_details">
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
  </div>
</div>
