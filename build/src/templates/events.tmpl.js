<div class="article_container_small">
    <a class='article_small_img_link' href="{{href}}" data-index_x="{{x}}" data-index_y="{{y}}">&nbsp;</a>
    <div class="article_small_img">
        <img src="{{header_url}}" />
    </div>
    <div class="article_container_small_text">
        <h1>{{name}}</h1>
        {{#each opening_period}}
          <h2>{{this}}</h2>
        {{/each}}
        <p>{{address}}</p>
        <p>{{desc}}</p>
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
