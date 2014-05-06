function shimAJAXSlideshow(el) {
    var prev = $("<a/>");
    prev.attr("class", "slideshow_prev_item");
    var next = $("<a/>");
    next.attr("class", "slideshow_next_item"), $(el).find("img").wrap("<li></li>"), 
    $(el).find("li").addClass("slideshow_item").addClass("slideshow_image").wrapAll("<ol></ol>"), 
    $(el).find("div").prepend(prev), $(el).find("div").append(next);
}

function initAJAXSlideshow(el) {
    shimAJAXSlideshow(el), initSlideshow(el);
}

function initSlideshow(el) {
    $.each($(el), function() {
        var ss = $(this).slideshow({
            display: [ 0 ],
            pagination: !0
        });
        ss.slideshow("play", parseInt($(el).data("rotation-speed")));
    }), $(el).on("mouseleave", function() {
        $(el).slideshow("play", parseInt($(el).data("rotation-speed")));
    }), $(el).on("mouseenter", function() {
        $(el).slideshow("pause");
    });
}

function slideshowHandler(event) {
    event.data, event.data[0];
}

function paginationHandler(event) {
    {
        var data = event.data;
        event.data[0];
    }
    $(".slideshow_text li").hide(), $(".slideshow_text li").eq(data[1]).show();
}