$(document).ready(function() {
    $.each($(".uw_accommodations_dropdown"), function(index, value) {
        var self = this, getDataType = function(el) {
            return el.filter("[data-type]").data("type");
        }, dataType = getDataType($(this)), id = "uw_accommodations_dropdown_" + index;
        $(value).attr("id", id);
        new $.verbierFilter($("#" + id), {
            mouseenter: function(e) {
                e.preventDefault(), $(this).addClass("open"), $(this).find("li").fadeIn("medium");
            },
            mouseleave: function(e) {
                e.preventDefault(), $(this).removeClass("open"), $(this).find("li").fadeOut(10), 
                $(this).find("li:first-child").fadeIn("medium");
            },
            click: function() {
                switch (getDataType($(self))) {
                  case "hotel":
                    "undefined" != typeof $(this).data("link") && (window.location.href = $(this).data("link"));
                    break;

                  case "village":
                  default:
                    if (0 != $(this).index()) {
                        $(this).parent().find("li").eq(0).text($(this).text()), $(this).parent().find("li").removeClass("selected"), 
                        $(this).addClass("selected");
                        var val = $(this).data("value"), txt = $(this).text();
                        switch (AJAX_DATA.filter[dataType] && (delete AJAX_DATA.filter[dataType], $(".village").remove()), 
                        AJAX_DATA.filter[dataType] = [ val ], AJAX_DATA.display[dataType] = [ txt ], Session.set("filter", {
                            village: val
                        }), page_checker()) {
                          case "bus_listing_page":
                            vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js" ], ".accomidations", AJAX_DATA, businessDataHandler);
                            break;

                          default:
                            vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
                        }
                        $(this).parent().removeClass("open"), $(this).parent().find("li").fadeOut(10), $(this).parent().find("li:first-child").fadeIn("medium");
                    }
                }
            }
        });
    });
});