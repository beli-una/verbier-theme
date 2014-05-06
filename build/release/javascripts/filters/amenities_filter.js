var amFilter;

$(document).ready(function() {
    0 !== $(".amenities_dropdown").length && (amFilter = new $.verbierFilter($(".amenities_dropdown"), {
        submit: $(".amenities_dropdown .apply_filters_button"),
        mouseenter: function(e) {
            e.preventDefault(), $(".amenities_dropdown .uw_html").fadeIn("medium");
        },
        mouseleave: function(e) {
            e.preventDefault(), $(".amenities_dropdown .uw_html").fadeOut("fast");
        },
        click: function(e) {
            e.preventDefault();
            var amenitiesList = amFilter.getTrackingArray();
            switch ($(amenitiesList).each(function(index, value) {
                0 == index && (AJAX_DATA.filter[value.type] = []), AJAX_DATA.filter[value.type] instanceof Array || (AJAX_DATA.filter[value.type] = []), 
                -1 == $.inArray(value.index, AJAX_DATA.filter[value.type]) && AJAX_DATA.filter[value.type].push(value.index);
            }), $(".amenities_dropdown .uw_html").fadeOut("fast"), $(".additive-filter-clear, .additive-filter").remove(), 
            page_checker()) {
              case "bus_listing_page":
                vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js", 4 ], ".accomidations", AJAX_DATA, businessDataHandler);
                break;

              case "trail_listing_page":
                vdm.getData("trails.tmpl.js", ".accomidations", AJAX_DATA, trailAPI);
                break;

              default:
                vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
            }
        }
    }), $(".amenities_list li a").on("click", function(e) {
        e.preventDefault();
    }), $(".star, .amenities_list li").on("click", function(e) {
        if (e.preventDefault(), $(this).hasClass("selected")) $(this).removeClass("selected"), 
        amFilter.untrack($(this).data("value")); else {
            $(this).addClass("selected");
            var amType = $(this).parent().data("type");
            amFilter.track(amType, this);
        }
    }));
});