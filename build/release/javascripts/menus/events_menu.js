function eventsClickHandler(e) {
    e.preventDefault(), toggleSelected($(this));
    var i = $(this).index();
    $(".event_menu_tab").fadeOut("fast"), $(".event_menu_tab").eq(i).fadeIn("medium"), 
    addImageClasses(), $(".main_menu_box").css("height", "auto");
}

$(document).ready(function() {
    $(".uw_events_menu .nav_item_level_0 li").eq(0).addClass("selected"), $(".uw_events_menu .nav_item_level_0 li").on("click", eventsClickHandler), 
    $(".uw_events_menu .nav_item_level_0 li").eq(0).trigger("click");
});