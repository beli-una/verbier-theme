function responsiveHandler() {
    var wh = parseInt($(window).height());
    $(".main_menu_box").css("height", "auto"), wh >= 750 ? ($("body").removeClass("responsive_height"), 
    0 !== $("#heroimage .uw_feature_slideshow").length && ($("#heroimage .uw_feature_slideshow").height(700), 
    $("#heroimage .slideshow_text").css("margin-top", "200px")), 0 !== $(".uw_listing_slideshow").length && $(".uw_listing_slideshow").height(530)) : ($(".logo").hasClass("responsive_height") || $("body").addClass("responsive_height"), 
    0 !== $("#heroimage .uw_feature_slideshow").length && ($("#heroimage .uw_feature_slideshow").height(500), 
    $("#heroimage .slideshow_text").css("margin-top", "150px")), 0 !== $(".uw_listing_slideshow").length && $(".uw_listing_slideshow").height(330));
}

$(document).ready(function() {
    $(window).resize(responsiveHandler);
}), $(window).load(function() {
    $(window).trigger("resize");
});