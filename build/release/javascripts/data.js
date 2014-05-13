function DataHandler(templateName, listWidgetClass, data) {
    var html = "";
    $(data.items).each(function(index, item) {
        item.json = escape(JSON.stringify(item)), html += Handlebars.templates[templateName](item);
    }), $(listWidgetClass).html(html), $(".article_small_img img").on("load", function() {
        addImageClasses();
    }), filterTravelBook();
}

function trailAPI(templateName, listWidgetClass, data) {
    var html = "";
    $(data.trails).each(function(index, item) {
        item.json = escape(JSON.stringify(item)), html += Handlebars.templates[templateName](item);
    }), $(listWidgetClass).html(html);
    var number_of_results = 10 * (1 * data.pages - 1);
    0 == number_of_results ? (number_of_results = data.trails.length, $(".accommodations_results .results span").text(number_of_results)) : $(".accommodations_results .results span").text(number_of_results + "+"), 
    filterTravelBook();
}

function trailAPIPagination(template, listingSelector, data) {
    var html = "";
    $(data.trails).each(function(index, item) {
        item.json = escape(JSON.stringify(item)), html += Handlebars.templates[template](item);
    }), $(listingSelector).append(html), $(".ajax_pagination").data("page", new_page);
    data.pages > new_page && $(".ajax_pagination a.readmore").fadeIn("medium"), $(".article_small_img img").on("load", function() {
        addImageClasses();
    }), filterTravelBook();
}

function basicDataHandler(templateName, listWidgetClass, data) {
    var html = "";
    $(data.items).each(function(index, item) {
        item.json = escape(JSON.stringify(item)), html += Handlebars.templates[templateName](item);
    }), $(listWidgetClass).html(html), $(".article_small_img img").on("load", function() {
        addImageClasses();
    });
    var totalDisplayed = $(listWidgetClass).data("org_number");
    data.number_of_results > totalDisplayed && $(".ajax_pagination a.readmore").show(), 
    filterTravelBook();
}

function businessDataHandler(templateName, listWidgetClass, data) {
    var col = "undefined" == typeof templateName[2] ? 4 : templateName[2], html = "";
    data_matrix = listToMatrix(data.items, col), $.each(data_matrix, function(index, items) {
        $.each(items, function(i, item) {
            item.x = i, item.y = index, item.json = escape(JSON.stringify(item)), html += Handlebars.templates[templateName[0]](item);
        }), $.each(items, function(i, item) {
            item.json = escape(JSON.stringify(item)), item.x = i, item.y = index, html += Handlebars.templates[templateName[1]](item);
        });
    }), $(listWidgetClass).html(html), filterTravelBook(), businessBottomRender(listWidgetClass), 
    $(".business_small_img img").on("load", function() {
        addImageClasses(".business_small_img", 250, 150);
    });
}

function eventsDataHandler(templateName, listWidgetClass, data) {
    $.each(data.items, function(i, item) {
        $(".event_sum_container").append(Handlebars.templates[templateName[0]](item)), $(".event_full_container").append(Handlebars.templates[templateName[1]](item));
    }), $(".event_sum p").trunc(300, !0), $(".event_sum").first().addClass("active"), 
    $(".event_full").first().show(), $(".event_sum").each(function() {}), $(".event_sum").click(function() {
        $(".event_sum").removeClass("active"), $(this).addClass("active"), evntID = $(this).data("id"), 
        $(".event_full").hide(), $("." + evntID).show(), scroll(".event_full_container", "body,html,document", 100);
    });
}

function businessBottomRender(listWidgetClass) {
    $(".business_small_img img, .article_small_img img").on("load", function() {
        addImageClasses(".business_small_img, .article_small_img", 250, 150);
    }), $(listWidgetClass).on("click", ".business_small_img_link, .article_small_img_link", function(e) {
        e.preventDefault();
        var _this = this;
        $(".business_container_small, .article_container_small").removeClass("selected"), 
        $(_this).closest(".business_container_small, .article_container_small").addClass("selected"), 
        $(".business_flyout").hide(), $($(this).closest(".uw_tourism_event_list").find('.business_flyout[data-index_x="' + $(_this).data("index_x") + '"][data-index_y="' + $(_this).data("index_y") + '"]')).show({
            duration: 0,
            complete: function() {
                scroll(this, "body,html,document", $(this).height() + 100);
            }
        });
    }), $(".business_flyout_close").on("click", function(e) {
        e.preventDefault(), $(".business_container_small, .article_container_small").removeClass("selected"), 
        $(this).parent().hide();
    });
}

function tourismLoadMore(listingSelector, template, callBackMethod) {
    "undefined" == typeof callBackMethod && (callBackMethod = paginationCallBack), new_page = $(".ajax_pagination").data("page") + 1, 
    AJAX_DATA.page = new_page, void 0 != $(".filters").data("village") ? vdm.getData(template, ".accomidations", $.extend(!0, {
        filter: {
            village: $(".filters").data("village")
        }
    }, AJAX_DATA), callBackMethod) : vdm.getData(template, ".accomidations", AJAX_DATA, callBackMethod);
}

function paginationBusinessCallBack(template, listingSelector, data) {
    var col = "undefined" == typeof template[2] ? 4 : template[2], totalDisplayed = ($(".ajax_pagination").data("page", new_page), 
    $(listingSelector).data("org_number") * new_page);
    data.number_of_results >= totalDisplayed && $(".ajax_pagination a.readmore").fadeIn("medium"), 
    data_matrix = listToMatrix(data.items, col);
    var html = $(listingSelector).html(), index_offset = $(listingSelector).find(".business_flyout").last().data("index_y") + 1;
    $.each(data_matrix, function(index, items) {
        $.each(items, function(i, item) {
            item.json = escape(JSON.stringify(item)), item.x = i, item.y = index_offset + index, 
            html += Handlebars.templates[template[0]](item);
        }), $.each(items, function(i, item) {
            item.json = escape(JSON.stringify(item)), item.x = i, item.y = index_offset + index, 
            html += Handlebars.templates[template[1]](item);
        });
    }), $(listingSelector).html(html), filterTravelBook(), businessBottomRender(listingSelector);
}

function paginationCallBack(template, listingSelector, data) {
    var html = "";
    $(data.items).each(function(index, item) {
        item.json = escape(JSON.stringify(item)), html += Handlebars.templates[template](item);
    }), $(listingSelector).append(html), $(".ajax_pagination").data("page", new_page);
    var totalDisplayed = $(listingSelector).data("org_number") * new_page;
    data.number_of_results > totalDisplayed && $(".ajax_pagination a.readmore").fadeIn("medium"), 
    $(".article_small_img img").on("load", function() {
        addImageClasses();
    }), filterTravelBook();
}

function current_time_filter() {
    var today = new Date(), dd = today.getDate(), mm = today.getMonth() + 1, yyyy = today.getFullYear();
    start_limit = mm + "/" + dd + "/" + yyyy, end_limit = mm + "/" + dd + "/" + (1 * yyyy + 10);
    var custome_filter = {
        filter: {
            dates: {
                begin: start_limit,
                end: end_limit
            }
        }
    };
    return custome_filter;
}

function initWeatherSlideOut() {
    $.ajax($(".uw_meo_weather").data("uri"), {
        dataType: "JSON",
        success: function(data) {
            var html = Handlebars.templates["weather.tmpl.js"](data);
            $(".uw_meo_weather").html(html), $.each($(".uw_meo_weather img"), function() {
                var src = unroole.theme_absolute_path + "/media_assets/images/weather_icons/" + $(this).data("src") + ".png";
                $(this).attr("src", src);
            }), $(".btn_weather").on("click", function(e) {
                e.preventDefault, $("#weather_slideout").hasClass("weather_slideout_on") ? ($("#weather_slideout").removeClass("weather_slideout_on"), 
                $("#weather_slideout").addClass("weather_slideout_off")) : ($("#weather_slideout").removeClass("weather_slideout_off"), 
                $("#weather_slideout").addClass("weather_slideout_on"));
            }), $("#close").on("click", function(e) {
                e.preventDefault, $("#weather_slideout").removeClass("weather_slideout_on"), $("#weather_slideout").addClass("weather_slideout_off");
            });
        }
    });
}

function initAutoLoad(targetClass, template, callBackMethod) {
    $(".ajax_pagination").data("page", 1), $(".ajax_pagination a.readmore").on("click", function(e) {
        e.preventDefault(), $(".ajax_pagination a.readmore").hide(), tourismLoadMore(targetClass, template, callBackMethod);
    });
}

function initListingPageAnimations() {
    $elMainSection = $(".main_section"), $elMainSection.addClass("animate"), $elMainSection.parent().one("transitionend", function() {});
}

function listTravelBook() {
    var info;
    return getCookie(function(o) {
        info = o;
    }), null == info ? {} : info;
}

function setItemSize(data) {
    $("#travelbook-nav .value").text(data.size);
}

function filterTravelBook() {
    var data = listTravelBook();
    $.each(data, function(key) {
        "size" !== key && $(data[key].items).each(function(i, v) {
            $("[data-item='" + v + "']").addClass("selected"), $("[data-item='" + v + "']").find(".info-text p").toggleClass("selected");
        });
    });
}

function addTravelBook(tab) {
    var info = $(tab).data("item"), type = $(tab).closest(".inner_box").find(".tb-id").data("type") || $(tab).closest(".travel-block").attr("id") || $(".uw_heading > div > h1").text().trim().toLowerCase();
    type = type.replace(/_/g, " "), -1 === checkTravelItem(type, info) ? (setCookie(type, info, function() {
        return !0;
    }), $(tab).addClass("selected"), $(tab).find(".info-text p").toggleClass("selected")) : removeCookie(type, info, function() {
        0 != $(tab).closest(".travel-block").length && ($(tab).closest(".business_container_small").siblings().length <= 0 && $(tab).closest(".travel-block").remove(), 
        $(tab).closest(".business_container_small").remove()), $(tab).removeClass("selected"), 
        $(tab).find(".info-text p").toggleClass("selected");
    });
}

function removeCookie(cname, cvalue, callback) {
    var data = listTravelBook(), storage = cname.replace(/[_\W]+/g, "-"), index = $.inArray(cvalue, data[storage].items);
    data[storage].items.splice(index, 1), data.size--, setItemSize(data), 0 == data[storage].items.length && delete data[storage], 
    $.ajax($(".uw_server_cookie").data("uri"), {
        method: "POST",
        dataType: "JSON",
        data: {
            data: JSON.stringify(data)
        },
        success: function() {
            return "function" == typeof callback ? callback(!0) : !0;
        }
    });
}

function setCookie(cname, cvalue, callback) {
    var info, storage;
    if (checkLocalCookie()) info = listTravelBook(); else {
        var d = new Date();
        d.setTime(d.getTime() + 6048e5);
        var expires = "expires=" + d.toGMTString();
        document.cookie = "server_cookie=" + Math.random().toString(36).substr(2) + ";" + expires + "; path=/;", 
        info = {
            size: 0
        };
    }
    ("undefined" == typeof cname || null == cname) && (cname = "misc"), storage = cname.replace(/[_\W]+/g, "-"), 
    "undefined" == typeof info.size && (info.size = 0), info.hasOwnProperty(storage) || (info[storage] = {
        name: null,
        items: []
    }, info[storage].name = cname), info[storage].items.push(cvalue), info.size++, setItemSize(info), 
    $.ajax($(".uw_server_cookie").data("uri"), {
        method: "POST",
        dataType: "JSON",
        data: {
            data: JSON.stringify(info)
        },
        success: function(data) {
            return "function" == typeof callback ? callback(data) : !0;
        }
    });
}

function deleteCookie(callback) {
    $.ajax($(".uw_server_cookie").data("uri"), {
        method: "DELETE",
        dataType: "JSON",
        success: function() {
            return "function" == typeof callback ? callback(!0) : !0;
        }
    });
}

function getCookie(callback) {
    return checkLocalCookie() ? void $.ajax($(".uw_server_cookie").data("uri"), {
        method: "GET",
        async: !1,
        dataType: "JSON",
        success: function(data) {
            try {
                return callback(JSON.parse(data.data));
            } catch (e) {
                return {
                    size: 0
                };
            }
        }
    }) : callback(!1);
}

function displayTravelBook() {
    var info = listTravelBook(), data = {
        items: []
    };
    $(".travelbook").html("");
    for (var key in info) if ("size" !== key) {
        var loc = key.replace(/\s/g, "_");
        $(info[key].items).each(function(i, v) {
            data.items.push(JSON.parse(unescape(v)));
        }), data.name = info[key].name, $(".travelbook").append("<div id='" + key + "' class='travel-block'>"), 
        $("#" + loc).append("<div class='uw uw_heading travel_heading'><div><h2>" + data.name + "</h2></div></div>"), 
        $("#" + loc).append("<div class='uw_tourism_event_list accomidations' data='" + key + "'>"), 
        DataHandler("business.tmpl.js", "#" + loc + " .accomidations", data), data = {
            items: []
        };
    }
    $(".my_travel_book_icon").addClass("selected"), $("#travel_book_ribbon p").toggleClass("selected");
}

function checkLocalCookie() {
    for (var name = "server_cookie=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (0 == c.indexOf(name)) return !0;
    }
    return !1;
}

function checkTravelItem(cname, cvalue, callback) {
    var data = listTravelBook(), storage = cname.replace(/[_\W]+/g, "-");
    return data.hasOwnProperty(storage) ? "function" == typeof callback ? callback($.inArray(cvalue, data[storage].items)) : $.inArray(cvalue, data[storage].items) : -1;
}

function scroll(element, parent, offset) {
    offset = offset || 0, $(parent).animate({
        scrollTop: $(element).offset().top - offset
    }, {
        duration: "slow",
        easing: "swing"
    });
}

function decodeParams() {
    var search = location.search.substring(1);
    return 0 == search.length ? "" : JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

var vdm = new VerbierDataManager();