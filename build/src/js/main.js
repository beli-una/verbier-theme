var vdm = new VerbierDataManager(); // Verbier data manager

/*
 * DOCUMENT READY
 */


$(document).ready(function(e) {

    var weather_data = $(".uw_meo_weather_past");
    var text_status = weather_data.data("temp_morn") + "°C " + weather_data.data("temp_aft") + "°C ";
    var icon_path = '<img src="' + unroole.theme_absolute_path + '/media_assets/images/weather_icons_nav/' + weather_data.data("symb_day") + '.png" >';
    var weatherHtml = icon_path + text_status;
    $(".btn_weather span").html(weatherHtml);
    $(".btn_weather span").css("background", "none");
    $(".btn_weather span").css("padding", "0");
    $(".btn_weather span").css("lineHeight", "16px");
    $(".btn_weather span img").css("margin", "0 auto");

    //  initListingFilterRemoval();
    documentReadyHandler();
    initWeatherSlideOut();


    $.each($('.main_menu li'), function(index, value) {
        if ($(this).hasClass('current')) {
            return false;
        }
        var id = window.location.pathname.split("/")[1];


        if ($(value).hasClass(id + '_sidebar')) {

            $(this).addClass('selected');
        }
    });
});

//##############################################
/*
 * VERBIER DATA MANAGER
 */
//##############################################

function documentReadyHandler() {

    vdm = new VerbierDataManager();

    switch (page_checker()) {

        case 'home_page':

            // Normally it would call these methods and get data from the API

            vdm.getData(['events.tmpl.js', 'business_bot.tmpl.js', 3], ".restaurants", null, businessDataHandler);
            vdm.getData(['events.tmpl.js', 'business_bot.tmpl.js', 3], ".activities", null, businessDataHandler);
            vdm.getData(['events.tmpl.js', 'business_bot.tmpl.js', 3], ".art", null, businessDataHandler);
            vdm.getData(['events.tmpl.js', 'business_bot.tmpl.js', 3], ".culture", null, businessDataHandler);
            vdm.getData(['events.tmpl.js', 'business_bot.tmpl.js', 3], ".accomidations", null, businessDataHandler);

            initAutoLoad(".accomidations", ['events.tmpl.js', 'business_bot.tmpl.js', 3], paginationBusinessCallBack);
            // Home page
            initSlideshow('.uw_feature_slideshow');

            $('.slideshow_text li').fadeOut('fast'); // FACTORY ANIMATIONS: ROUND 1
            $('.slideshow_text li').eq(0).fadeIn('medium'); // FACTORY ANIMATIONS: ROUND 1

            $(".Events li").click(function() {
                scroll(this, "body,html,document", 100, function() {});
            });

            break;

        case 'listing_page':

            var filters = decodeParams() || Session.get('filter') || {
                village: "Verbier"
            };

            initListingPageAnimations();

            // Listing Details
            initSlideshow('.uw_listing_slideshow');

            initListingFilterRemoval();
            //vdm.getData('hotels.tmpl.js' , '.accomidations', AJAX_DATA, DataHandler);
            initAutoLoad(".accomidations", "hotels.tmpl.js");

            if (filters !== "") {
                $("#uw_accommodations_dropdown_1").children().each(function(i, v) {
                    if (typeof $(v).data('value') !== "undefined") {
                        if ($(v).data("value").toUpperCase() === filters.village.toUpperCase()) {
                            $("#uw_accommodations_dropdown_1 li:first-child").text($(v).text());

                            var val = $(v).data('value');
                            var txt = $(v).text();

                            AJAX_DATA.filter["village"] = [val];
                            AJAX_DATA.display["village"] = [txt];

                            Session.set('filter', {
                                village: val
                            });

                            vdm.getData('hotels.tmpl.js', '.accomidations', AJAX_DATA, basicDataHandler);
                        }
                    }

                });
            } else {
                vdm.getData('hotels.tmpl.js', '.accomidations', AJAX_DATA, basicDataHandler); // Accommodations data
            }

            break;
        case 'bus_listing_page':

            var filters = decodeParams() || Session.get('filter') || "";

            initListingPageAnimations();
            initListingFilterRemoval();

            initSlideshow('.uw_listing_slideshow');

            var custome_filter = {
                'filter': {},
                'display': {}
            };
            if ($('.filters').data('village') != undefined) {
                custome_filter = {
                    filter: {
                        village: $('.filters').data('village')
                    }
                };
            }

            if ($('.ul').hasClass('current_only')) {
                custome_filter = current_time_filter();
            }

            if (filters !== "") {
                $("#uw_accommodations_dropdown_1").children().each(function(i, v) {
                    if (typeof $(v).data('value') !== "undefined") {
                        if ($(v).data("value").toUpperCase() === filters.village.toUpperCase()) {
                            $("#uw_accommodations_dropdown_1 li:first-child").text($(v).text());

                            var val = $(v).data('value');
                            var txt = $(v).text();

                            custome_filter.filter["village"] = [val];
                            custome_filter.display["village"] = [txt];

                            Session.set('filter', {
                                village: val
                            });

                            //vdm.getData( 'hotels.tmpl.js', '.accomidations', AJAX_DATA, basicDataHandler);
                            vdm.getData(['business.tmpl.js', 'business_bot.tmpl.js'], '.accomidations', custome_filter, businessDataHandler);
                        }
                    }

                });
            } else {
                //vdm.getData('hotels.tmpl.js' , '.accomidations', AJAX_DATA, basicDataHandler);// Accommodations data
                vdm.getData(['business.tmpl.js', 'business_bot.tmpl.js'], '.accomidations', custome_filter, businessDataHandler);
            }



            initAutoLoad(".accomidations", ['business.tmpl.js', 'business_bot.tmpl.js'], paginationBusinessCallBack);


            break;

        case 'trail_listing_page':

            initListingFilterRemoval();

            var custome_filter = null;
            if ($('.filters').data('village') != undefined) {
                custome_filter = {
                    filter: {
                        village: $('.filters').data('village')
                    }
                };
            }

            vdm.getData('trails.tmpl.js', '.accomidations', custome_filter, trailAPI);
            initAutoLoad(".accomidations", "trails.tmpl.js", trailAPIPagination);

            break;

        case 'trail_details_page':

            // Trails Details
            initAJAXSlideshow('.uw_trails_slideshow');

            break;

        case 'hotel_details_page':
            // Hotels Details
            initAJAXSlideshow('.uw_hotels_slideshow');
            initHotelDetails();
            filterTravelBook();
            break;

        case 'skiing_verbier_page':

            /*
             * INFO PANELS
             */

            // Hide the info panels

            $('.skiing_verbier_info').fadeOut('fast');

            // Show the first info panels

            $('.skiing_verbier_info').eq(0).fadeIn('medium');
            $('.skiing_verbier_small').eq(0).addClass('selected');

            // When the user clicks show the selected info panels

            $('.skiing_verbier_small').on('click', function(e) {

                e.preventDefault();

                $('.skiing_verbier_small').removeClass('selected');
                $('.skiing_verbier_small').eq($(this).index()).addClass('selected');

                $('.skiing_verbier_info').fadeOut('fast');
                $('.skiing_verbier_info').eq($(this).index()).fadeIn('medium');
            });

            break;
        case 'events_listing_page':

            initListingFilterRemoval();

            var custome_filter = current_time_filter();

            vdm.getData(['event_sum.tmpl.js', 'event_full.tmpl.js'], '.accomidations', custome_filter, eventsDataHandler);

            break;

        default:
            null;
    }
    initListingPageAnimations();
}
/*
 * WINDOW LOAD
 */

$(window).load(function(e) {

    switch (page_checker()) {

        case 'home_page':

            // Events data
            vdm.getData(['events.tmpl.js', 'business_bot.tmpl.js', 3], ".popular_events_data", current_time_filter(), businessDataHandler);
            vdm.getData(['events.tmpl.js', 'business_bot.tmpl.js', 3], ".agenda_data", current_time_filter(), businessDataHandler);

            break;

        default:
            null;
    }
});

$(document).ajaxComplete(function() {
    $('.my_travel_book_icon').mouseenter(function(e) {
        e.stopImmediatePropagation();
        $(this).find('.info-text p').stop(true, true).animate({
            right: "10px"
        });
    });

    $('.my_travel_book_icon').mouseleave(function(e) {
        e.stopImmediatePropagation();
        $(this).find('.info-text p').stop(true, true).animate({
            right: "-200px"
        });
    });
    $(".main_section").height($(document).height());
    switch (page_checker()) {
        case 'home_page':
            $('.article_container_small_text p').trunc(150, true);
            break;
    }
});
