$(document).ready(function() {
    $(".uw_language_menu ul").css("width", "134px"), mouseleaveMultiple(".uw_language_menu li:first-child, .uw_language_menu ul", function() {
        $(".uw_language_menu ul").removeClass("shadow"), $(".uw_language_menu ul").addClass("shadow"), 
        $(".uw_language_menu li").eq(0).removeClass("selected"), $(".uw_language_menu li").eq(0).addClass("selected"), 
        $(".uw_language_menu ul").css("width", "auto");
    }, function() {
        $(".uw_language_menu ul").removeClass("shadow"), $(".uw_language_menu li").eq(0).removeClass("selected"), 
        $(".uw_language_menu ul").css("width", "134px");
    });
});