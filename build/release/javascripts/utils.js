function toggleSelected(el) {
    var siblings = el.siblings();
    siblings.removeClass("selected"), el.addClass("selected");
}

function mouseleaveMultiple(elementClasses, openFunc, closeFunc) {
    var counter = 0;
    $(elementClasses).on("mouseenter", function(e) {
        counter = clampNumber(counter + 1, 0, 2), openFunc(e);
    }), $(elementClasses).on("mouseleave", function(e) {
        counter--, 0 === counter && closeFunc(e);
    });
}

function clampNumber(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

function iFrame() {
    return window.self === window.top ? !1 : !0;
}

function getIntersect(arr1, arr2) {
    var i, v, r = [], o = {}, l = arr2.length;
    for (i = 0; l > i; i++) o[arr2[i]] = !0;
    for (l = arr1.length, i = 0; l > i; i++) v = arr1[i], v in o && r.push(v);
    return r;
}

function addImageClasses(selector, cont_width, cont_height) {
    "undefined" == typeof selector && (selector = ".article_small_img"), "undefined" == typeof cont_width && (cont_width = 350), 
    "undefined" == typeof cont_height && (cont_height = 210), $(selector + " img").each(function() {
        var img_width = $(this).width(), img_height = $(this).height(), ratio_width = img_width / cont_width, ratio_height = img_height / cont_height;
        if (img_height > 0 && img_width > 0) if (ratio_width > ratio_height && !$(this).hasClass("horizontal")) {
            $(this).addClass("horizontal");
            var ratio = cont_height / img_height, offset = Math.floor((ratio * img_width - cont_width) / 2 * -1) + "px";
            $(this).css("margin-left", function() {
                return offset;
            });
        } else if (ratio_height > ratio_width && !$(this).hasClass("vertical")) {
            $(this).addClass("vertical");
            var ratio = cont_width / img_width, offset = Math.floor((ratio * img_height - cont_height) / 2 * -1) + "px";
            $(this).css("margin-top", function() {
                return offset;
            });
        }
    });
}

function hide_empty_data(dataClass, dataAttr, displayClass, attr_update) {
    if ($(dataClass) && 0 != $(dataClass).length) if (void 0 === $(dataClass).data(dataAttr) || 0 === $(dataClass).data(dataAttr).length) $(displayClass).hide(); else {
        var url = $(dataClass).data(dataAttr);
        (url.indexOf("reservation.verbier.ch") > -1 || url.indexOf("citybreak.com") > -1) && (url = "/reservations?booking_url=" + encodeURIComponent(url)), 
        $(displayClass).attr(attr_update, url);
    }
}

function listToMatrix(list, elementsPerSubArray) {
    var i, k, matrix = [];
    for (i = 0, k = -1; i < list.length; i++) i % elementsPerSubArray === 0 && (k++, 
    matrix[k] = []), matrix[k].push(list[i]);
    return matrix;
}

function classExists(matchClass) {
    var i, elems = document.getElementsByTagName("*");
    for (i in elems) if ((" " + elems[i].className + " ").indexOf(" " + matchClass + " ") > -1) return !0;
}

function page_checker() {
    return classExists("home_page") ? "home_page" : classExists("bus_listing_page") ? "bus_listing_page" : classExists("listing_page") ? "listing_page" : classExists("hotel_details_page") ? "hotel_details_page" : classExists("trail_details_page") ? "trail_details_page" : classExists("skiing_verbier_page") ? "skiing_verbier_page" : classExists("trail_listing_page") ? "trail_listing_page" : classExists("events_listing_page") ? "events_listing_page" : void 0;
}

Array.prototype.unique = function() {
    return this.filter(function(value, index, array) {
        return array.indexOf(value, index + 1) < 0;
    });
}, $.prototype.trunc = $.prototype.trunc || function(n, useWordBoundary) {
    $.each(this, function(i, v) {
        var text_s = $(v).text(), toLong = text_s.length > n - 1, s_ = toLong ? text_s.substr(0, n - 1) : text_s;
        s_ = useWordBoundary && toLong ? s_.substr(0, s_.lastIndexOf(" ")) : s_, $(v).text(toLong ? s_ + " ..." : s_);
    });
};