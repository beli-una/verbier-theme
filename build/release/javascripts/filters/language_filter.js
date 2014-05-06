$(document).ready(function() {
    $.each($(".verbier_dropdown"), function(index, value) {
        var id = "verbier_dropdown_" + index;
        $(value).attr("id", id);
        var dataType = $("#" + id).find("[data-type]").data("type"), filter = new $.verbierFilter($("#" + id), {
            mouseenter: function(e) {
                e.preventDefault(), filter.showHTML();
            },
            mouseleave: function(e) {
                e.preventDefault(), filter.hideHTML();
            },
            click: function(e) {
                e.preventDefault(), filter.setSelected($(this).index());
                var val = filter.getSelectedData(), txt = filter.getSelectedText();
                switch (AJAX_DATA.filter[dataType] && (delete AJAX_DATA.filter[dataType], $("." + dataType).remove()), 
                AJAX_DATA.filter[dataType] = [ val ], AJAX_DATA.display[dataType] = [ txt ], page_checker()) {
                  case "bus_listing_page":
                    vdm.getData([ "business.tmpl.js", "business_bot.tmpl.js", 4 ], ".accomidations", AJAX_DATA, businessDataHandler);
                    break;

                  case "trail_listing_page":
                    vdm.getData("trails.tmpl.js", ".accomidations", AJAX_DATA, trailAPI);
                    break;

                  default:
                    vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
                }
                filter.hideHTML();
            }
        });
    });
});