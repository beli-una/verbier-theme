function initListingFilterRemoval() {
    vdm.addEventlistener("DELETE_FILTER", function(e) {
        switch (AJAX_DATA.page = 1, $(".ajax_pagination").data("page", 1), $(e.data.item).remove(), 
        page_checker()) {
          case "bus_listing_page":
            vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js", 4 ], ".accomidations", AJAX_DATA, businessDataHandler);
            break;

          case "trail_listing_page":
            vdm.getData("trails.tmpl.js", ".accomidations", AJAX_DATA, trailAPI);
            break;

          default:
            if (0 == AJAX_DATA.filter.village.length) {
                var village_top = $($("ul[data-type='village'] li:first"));
                village_top.text(village_top.data("value").toUpperCase());
            }
            vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
        }
    }), vdm.addEventlistener("DELETE_ALL_FILTERS", function() {
        switch ($(".ajax_pagination").data("page", 1), AJAX_DATA.page = 1, resetFilterUI(), 
        page_checker()) {
          case "bus_listing_page":
            vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js", 4 ], ".accomidations", AJAX_DATA, businessDataHandler);
            break;

          case "trail_listing_page":
            vdm.getData("trails.tmpl.js", ".accomidations", AJAX_DATA, trailAPI);
            break;

          default:
            if ("undefined" != typeof AJAX_DATA.filter.village && 0 == AJAX_DATA.filter.village.length) {
                var village_top = $($("ul[data-type='village'] li:first"));
                village_top.text(village_top.data("value").toUpperCase());
            }
            vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
        }
    });
}

function resetFilterUI() {
    $(".uw_accommodations_dropdown").removeClass("open"), $(".uw_accommodations_dropdown li").removeClass("selected"), 
    $(".uw_accommodations_dropdown li").fadeOut("fast"), $(".uw_accommodations_dropdown li:first-child").fadeIn("medium"), 
    $(".ui-datepicker-calendar td").removeClass("dp-start-highlight"), $(".ui-datepicker-calendar td").removeClass("dp-highlight"), 
    $(".uw_datepicker").fadeOut("fast"), $(".verbier_dropdown li").removeClass("selected"), 
    $(".amenities_dropdown li").removeClass("selected");
    var low = 50, high = 1450;
    $(".gutter").slider("values", 0, low), $(".gutter").slider("values", 1, high), $(".uw_slider_filter .details .low span").text("50"), 
    $(".uw_slider_filter .details .high span").text("1,450");
}