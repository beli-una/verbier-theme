function translation_helper(translation_item, translation_object) {
    var translation = window[translation_object];
    return translation[translation_item];
}

function documentReadyHandler() {
    switch (vdm = new VerbierDataManager(), page_checker()) {
      case "home_page":
        vdm.getData([ "events.tmpl.js", "business_bot.tmpl.js", 3 ], ".restaurants", null, businessDataHandler), 
        vdm.getData([ "events.tmpl.js", "business_bot.tmpl.js", 3 ], ".activities", null, businessDataHandler), 
        vdm.getData([ "events.tmpl.js", "business_bot.tmpl.js", 3 ], ".art", null, businessDataHandler), 
        vdm.getData([ "events.tmpl.js", "business_bot.tmpl.js", 3 ], ".culture", null, businessDataHandler), 
        vdm.getData([ "events.tmpl.js", "business_bot.tmpl.js", 3 ], ".accomidations", current_time_filter(), businessDataHandler), 
        initAutoLoad(".accomidations", [ "events.tmpl.js", "business_bot.tmpl.js", 3 ], paginationBusinessCallBack), 
        initSlideshow(".uw_feature_slideshow"), $(".slideshow_text li").fadeOut("fast"), 
        $(".slideshow_text li").eq(0).fadeIn("medium"), $(".Events li").click(function() {
            scroll(this, "body,html,document", 100, function() {});
        });
        break;

      case "listing_page":
        var filters = decodeParams() || Session.get("filter") || {
            village: "Verbier"
        };
        initListingPageAnimations(), initSlideshow(".uw_listing_slideshow"), initListingFilterRemoval(), 
        initAutoLoad(".accomidations", "hotels.tmpl.js"), "" !== filters ? $("#uw_accommodations_dropdown_1").children().each(function(i, v) {
            if ("undefined" != typeof $(v).data("value") && $(v).data("value").toUpperCase() === filters.village.toUpperCase()) {
                $("#uw_accommodations_dropdown_1 li:first-child").text($(v).text());
                var val = $(v).data("value"), txt = $(v).text();
                AJAX_DATA.filter.village = [ val ], AJAX_DATA.display.village = [ txt ], Session.set("filter", {
                    village: val
                }), vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
            }
        }) : vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
        break;

      case "bus_listing_page":
        var filters = decodeParams() || Session.get("filter") || "";
        initListingPageAnimations(), initListingFilterRemoval(), initSlideshow(".uw_listing_slideshow");
        var custome_filter = {
            filter: {},
            display: {}
        };
        void 0 != $(".filters").data("village") && (custome_filter = {
            filter: {
                village: $(".filters").data("village")
            }
        }), $(".ul").hasClass("current_only") && (custome_filter = current_time_filter()), 
        "" !== filters ? ($("#uw_accommodations_dropdown_1").children().each(function(i, v) {
            if ("undefined" != typeof $(v).data("value") && $(v).data("value").toUpperCase() === filters.village.toUpperCase()) {
                $("#uw_accommodations_dropdown_1 li:first-child").text($(v).text());
                var val = $(v).data("value"), txt = $(v).text();
                custome_filter.filter.village = [ val ], custome_filter.display.village = [ txt ], 
                Session.set("filter", {
                    village: val
                }), vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js" ], ".accomidations", custome_filter, businessDataHandler);
            }
        }), 0 === $("#uw_accommodations_dropdown_1").children().length && vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js" ], ".accomidations", custome_filter, businessDataHandler)) : vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js" ], ".accomidations", custome_filter, businessDataHandler), 
        initAutoLoad(".accomidations", [ "business.tmpl.js", "business_bot.tmpl.js" ], paginationBusinessCallBack);
        break;

      case "trail_listing_page":
        initListingFilterRemoval();
        var custome_filter = null;
        void 0 != $(".filters").data("village") && (custome_filter = {
            filter: {
                village: $(".filters").data("village")
            }
        }), vdm.getData("trails.tmpl.js", ".accomidations", custome_filter, trailAPI), initAutoLoad(".accomidations", "trails.tmpl.js", trailAPIPagination);
        break;

      case "trail_details_page":
        initAJAXSlideshow(".uw_trails_slideshow");
        break;

      case "hotel_details_page":
        initAJAXSlideshow(".uw_hotels_slideshow"), initHotelDetails(), filterTravelBook();
        break;

      case "skiing_verbier_page":
        $(".skiing_verbier_info").fadeOut("fast"), $(".skiing_verbier_info").eq(0).fadeIn("medium"), 
        $(".skiing_verbier_small").eq(0).addClass("selected"), $(".skiing_verbier_small").on("click", function(e) {
            e.preventDefault(), $(".skiing_verbier_small").removeClass("selected"), $(".skiing_verbier_small").eq($(this).index()).addClass("selected"), 
            $(".skiing_verbier_info").fadeOut("fast"), $(".skiing_verbier_info").eq($(this).index()).fadeIn("medium");
        });
        break;

      case "events_listing_page":
        initListingFilterRemoval();
        var custome_filter = current_time_filter();
        vdm.getData([ "event_sum.tmpl.js", "event_full.tmpl.js" ], ".accomidations", custome_filter, eventsDataHandler);
    }
    initListingPageAnimations();
}

var vdm = new VerbierDataManager();

$(document).ready(function() {
    var weather_data = $(".uw_meo_weather_past"), text_status = weather_data.data("temp_morn") + "°C " + weather_data.data("temp_aft") + "°C ", icon_path = '<img src="' + unroole.theme_absolute_path + "/media_assets/images/weather_icons_nav/" + weather_data.data("symb_day") + '.png" >', weatherHtml = icon_path + text_status;
    $(".btn_weather span").html(weatherHtml), $(".btn_weather span").css("background", "none"), 
    $(".btn_weather span").css("padding", "0"), $(".btn_weather span").css("lineHeight", "16px"), 
    $(".btn_weather span img").css("margin", "0 auto"), Handlebars.registerHelper("translate", translation_helper), 
    documentReadyHandler(), initWeatherSlideOut(), $.each($(".main_menu li"), function(index, value) {
        if ($(this).hasClass("current")) return !1;
        var id = window.location.pathname.split("/")[1];
        $(value).hasClass(id + "_sidebar") && $(this).addClass("selected");
    });
}), $(window).load(function() {
    switch (page_checker()) {
      case "home_page":
        vdm.getData([ "events.tmpl.js", "business_bot.tmpl.js", 3 ], ".popular_events_data", current_time_filter(), businessDataHandler), 
        vdm.getData([ "events.tmpl.js", "business_bot.tmpl.js", 3 ], ".agenda_data", current_time_filter(), businessDataHandler);
    }
}), $(document).ajaxComplete(function() {
    switch ($(".my_travel_book_icon").mouseenter(function(e) {
        e.stopImmediatePropagation(), $(this).find(".info-text p").stop(!0, !0).animate({
            right: "10px"
        });
    }), $(".my_travel_book_icon").mouseleave(function(e) {
        e.stopImmediatePropagation(), $(this).find(".info-text p").stop(!0, !0).animate({
            right: "-200px"
        });
    }), page_checker()) {
      case "home_page":
        $(".article_container_small_text p").trunc(150, !0);
    }
    $("a.article_small_img_link").hover(function() {
        $(this).css("background", "url(" + translation_helper("hover_image", "translation_templates") + ")");
    }, function() {
        $(this).css("background", "");
    });
});