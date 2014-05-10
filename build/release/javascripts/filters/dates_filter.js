$(document).ready(function() {
    var dp_dates = [];
    $(".datepicker").datepicker({
        inline: !0,
        dayNamesMin: translation_helper("date_names", "translate_dates"),
        dateFormat: "yy-mm-dd",
        beforeShowDay: function(date) {
            return dp_dates[0] && date.getTime() == dp_dates[0].getTime() ? [ !0, "dp-start-highlight" ] : dp_dates[1] && date.getTime() == dp_dates[1].getTime() ? [ !0, "dp-start-highlight" ] : [ !0, dp_dates[0] && (date.getTime() == dp_dates[0].getTime() || dp_dates[1] && date >= dp_dates[0] && date <= dp_dates[1]) ? "dp-highlight" : "" ];
        },
        onSelect: function(dateText) {
            var selectedDate = $.datepicker.parseDate("yy-mm-dd", dateText);
            dp_dates.length >= 2 && dp_dates.shift(), dp_dates[0] > selectedDate && dp_dates.shift(), 
            dp_dates.push(selectedDate);
        }
    });
    var datePickerOpen = !1;
    $(".uw_datepicker").fadeOut("fast"), $(".trip_dates_dropdown").on("mouseenter", function() {
        datePickerOpen || (datePickerOpen = !0, $(".uw_datepicker").fadeIn("medium"));
    }), $(".trip_dates_dropdown").on("mouseleave", function() {
        datePickerOpen && (datePickerOpen = !1, $(".uw_datepicker").fadeOut("fast"));
    }), $(".uw_datepicker .apply_filters_button").on("click", function(e) {
        if (e.preventDefault(), $(".uw_datepicker").fadeOut("fast"), 2 === dp_dates.length) {
            var val = jQuery.map(dp_dates, function(n) {
                return n.toLocaleDateString();
            });
            AJAX_DATA.filter.dates && (delete AJAX_DATA.filter.dates, $(".dates").remove()), 
            AJAX_DATA.filter.dates = {
                begin: val[0],
                end: val[1],
                item: "date_range"
            }, vdm.getData("hotels.tmpl.js", ".accomidations", AJAX_DATA, basicDataHandler);
        }
    });
});