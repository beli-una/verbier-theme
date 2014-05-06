function initVisitVillages() {
    $(".collapse_button").on("click", function(e) {
        e.preventDefault(), parent = $(this).parent(), parent.hasClass("full") ? (parent.removeClass("full"), 
        parent.removeClass("middle"), parent.addClass("small")) : parent.hasClass("middle") ? (parent.removeClass("middle"), 
        parent.addClass("small")) : parent.addClass("middle");
    }), $(".contact_button").on("click", function(e) {
        e.preventDefault(), $(this).closest(".vtv_left_content, .vtv_right_content").hasClass("full") ? $(this).closest(".vtv_left_content, .vtv_right_content").removeClass("full") : $(this).closest(".vtv_left_content, .vtv_right_content").addClass("full");
    }), $.each($(".description_text_container"), function() {
        parent = $(this).closest(".content_description"), number_of_pages = Math.ceil($(this).height() / 125), 
        class_name = "vtv_" + number_of_pages + "_pag", parent.addClass(class_name), parent.addClass("vtv_pag_selected_1"), 
        1 >= number_of_pages && $(this).closest(".vtv_description_container").find(".description_navigation .vtv_pag").hide();
    }), $(".vtv_pag").on("click", function(e) {
        e.preventDefault(), page_number = $(this).attr("class").split(" ")[1].split("_")[1], 
        parent = $(this).closest(".content_description"), classes_all = parent.attr("class").split(" "), 
        classes_all.pop(), classes_all.push("vtv_pag_selected_" + page_number), parent.attr("class", classes_all.join(" "));
    }), $(".amenities_button").on("click", function(e) {
        e.preventDefault();
    }), $(".amenities_button").on("mouseenter", function() {
        $(this).addClass("hover"), $(this).siblings(".vtv_amenities_dropdown").show();
    }), $(".blue_navigation").on("mouseleave", function() {
        $(this).find(".amenities_button").removeClass("hover"), $(this).find(".vtv_amenities_dropdown").hide();
    }), $(".vtv_amenities_dropdown").on("mouseleave", function() {
        $(".amenities_button").removeClass("hover"), $(this).hide();
    });
}