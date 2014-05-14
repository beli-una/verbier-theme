function EventDispatcher() {
    this.events = [], this.data = null;
}

function VerbierDataManager() {
    EventDispatcher.call(this);
}

function isDuplicate(txtA) {
    var bool = !1;
    return $.each($(".additive-filter"), function(index, value) {
        var txtB = $(value).find("span:first-child").text();
        txtA === txtB && (bool = !0);
    }), bool;
}

if (!function(e, t, n) {
    function r(t, r) {
        this.internals = {}, this.internals.tag = n.createElement("script"), this.internals.firstScriptTag = n.getElementsByTagName("script")[0], 
        this.internals.playList = [], this.element = t, this.settings = e.extend({}, o, r), 
        this._defaults = o, this._name = i, this.init();
    }
    var i = "verbierWebTV", o = {
        playlistId: "PL28D93E0A194143BD",
        playlistTag: ".playlist",
        videoWidth: "1080",
        videoHeight: "633"
    };
    r.prototype = {
        init: function() {
            var n = this;
            this.internals.tag.src = "https://www.youtube.com/iframe_api", this.internals.firstScriptTag.parentNode.insertBefore(this.internals.tag, this.internals.firstScriptTag), 
            e(this.settings.playlistTag).delegate("li a", "click", function(t) {
                t.preventDefault(), n.internals.player.loadVideoById(e(this).data("video"));
            }), t.onYouTubeIframeAPIReady = this.getPlaylist(this.settings, function(e) {
                n.internals.player = new YT.Player("ytplayer", {
                    height: n.settings.videoHeight,
                    width: n.settings.videoWidth,
                    videoId: e[0]
                });
            });
        },
        updateVideo: function(t) {
            t.preventDefault(), this.internals.player.loadVideoById(e(this).data("video"));
        },
        getPlaylist: function(t, n) {
            var r = "http://gdata.youtube.com/feeds/api/playlists/" + t.playlistId + "?v=2&alt=json&callback=?", i = "http://www.youtube.com/watch?v=", o = [];
            e.getJSON(r, function(r) {
                var a = "";
                return e.each(r.feed.entry, function(t, n) {
                    var r = n.title.$t, s = n.link[1].href, l = s.split("/"), c = e.trim(l[l.length - 2]), u = i + c, p = "http://img.youtube.com/vi/" + c + "/default.jpg";
                    o.push(c), a += '<li class="webtv-playlist-item">                                             <a href="' + u + '" title="' + r + '" data-video="' + c + '">                                                 <img alt="' + r + '" src="' + p + '"/>                                             </a>                                             <h1>' + r + "</h1>                                             </li>";
                }), e(a).appendTo(t.playlistTag), n(o);
            });
        }
    }, e.fn[i] = function(t) {
        return this.each(function() {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new r(this, t));
        });
    };
}(jQuery, window, document), JSON && JSON.stringify && JSON.parse) var Session = Session || function() {
    function Save() {
        win.name = JSON.stringify(store);
    }
    var win = window.top || window, store = win.name ? JSON.parse(win.name) : {};
    return window.addEventListener ? window.addEventListener("unload", Save, !1) : window.attachEvent ? window.attachEvent("onunload", Save) : window.onunload = Save, 
    {
        set: function(name, value) {
            store[name] = value;
        },
        get: function(name) {
            return store[name] ? store[name] : void 0;
        },
        clear: function() {
            store = {};
        },
        dump: function() {
            return JSON.stringify(store);
        }
    };
}();

EventDispatcher.prototype.addEventlistener = function(e, t) {
    this.events[e] = this.events[e] || [], this.events[e] && this.events[e].push(t);
}, EventDispatcher.prototype.removeEventlistener = function(e, t) {
    if (this.events[e]) for (var n = this.events[e], r = n.length - 1; r >= 0; --r) if (n[r] === t) return n.splice(r, 1), 
    !0;
    return !1;
}, EventDispatcher.prototype.dispatchEvent = function(e, t) {
    if (this.data = t, this.events[e]) {
        this.events[e].data = this.data;
        for (var n = this.events[e], r = n.length; r--; ) n[r](this);
    }
}, function($) {
    $.widget("unroole.slideshow", {
        options: {
            display: [ 0 ],
            left: ".slideshow_prev_item",
            right: ".slideshow_next_item",
            timeout: null,
            pagination: !1
        },
        _create: function() {
            this.initVariables(), this.initWidget();
        },
        initVariables: function() {
            this.display = this.options.display, this.element.find("ol").addClass("slides"), 
            this.slides = this.element.find("li"), this.slideIndex = 0, this.totalSlides = $(this.slides).size(), 
            this.first = this.slides.eq(0), this.last = $(this.slides).eq($(this.slides).size() - 1), 
            this.left = this.element.find(this.options.left), this.right = this.element.find(this.options.right);
        },
        initWidget: function() {
            this.options.pagination && this.initPagination(), this.updateSlides(this.display), 
            this.initButtons();
        },
        initButtons: function() {
            function init(scp, btn, sld, n) {
                $(btn).unbind("click"), $(btn).on("click", function(e) {
                    e.preventDefault(), "none" === sld.css("display") && ($.each(scp.display, function(index, value) {
                        scp.display[index] = scp.formatIndex(value + n, $(scp.slides).size());
                    }), scp.updateSlides(scp.display)), self.element.trigger($(e.target).hasClass("slideshow_next_item") ? "SLIDESHOW_NEXT" : "SLIDESHOW_PREV", scp.display);
                });
            }
            var self = this;
            init(this, this.left, this.first, -1), init(this, this.right, this.last, 1);
        },
        initPagination: function() {
            var t = this, ol = $("<ol/>");
            ol.addClass("pagination");
            for (var i = 0; i < this.slides.length; i++) {
                var li = $("<li/>");
                0 === i && li.addClass("selected"), li.html(i), li.on("click", function(e) {
                    e.preventDefault(), $(this).siblings().removeClass("selected"), $(this).addClass("selected"), 
                    t.updateSlides([ $(this).index() ]);
                }), ol.append(li);
            }
            this.element.prepend(ol), $(".pagination").wrap("<span></span>"), this.paginationButtons = this.element.find(".pagination li");
        },
        play: function(delay) {
            function timeoutCallback() {
                "none" != t.last.css("display") ? t.updateSlides([ 0 ]) : t.right.trigger("click"), 
                t.timeout = setTimeout(timeoutCallback, 1e3 * delay);
            }
            var t = this;
            delay && 0 != delay && (clearTimeout(t.timeout), t.timeout = setTimeout(timeoutCallback, 5e3));
        },
        pause: function() {
            clearTimeout(this.timeout);
        },
        updateSlides: function(d) {
            this.display = d, this.slides.hide(), this.showSlides(), this.slideIndex = this.element.find(".slides li.selected").index(), 
            0 === this.slideIndex ? this.hideButton(this.left) : this.showButton(this.left), 
            this.slideIndex === this.totalSlides - 1 ? this.hideButton(this.right) : this.showButton(this.right), 
            this.options.pagination && (this.paginationButtons.removeClass("selected"), this.paginationButtons.eq(this.slideIndex).addClass("selected"));
        },
        showSlides: function() {
            var t = this;
            t.slides.removeClass("selected"), $.each(this.display, function(index, value) {
                t.slides.eq(value).addClass("selected"), t.slides.eq(value).show();
            });
        },
        formatIndex: function(index, total) {
            var i = index, t = total - 1;
            return 0 > i ? i = t : i > t && (i = 0), i;
        },
        showButton: function(t) {
            $(t).fadeTo(0, 1).css("cursor", "pointer");
        },
        hideButton: function(t) {
            $(t).fadeTo(0, .5).css("cursor", "default");
        },
        destroy: function() {
            $.Widget.prototype.destroy.call(this);
        },
        _setOption: function(key) {
            switch (key) {
              case "someValue":            }
            $.Widget.prototype._setOption.apply(this, arguments);
        }
    });
}(jQuery, window, document), function($) {
    $.verbierFilter = function(el, options) {
        var defaults = {
            submit: null
        }, plugin = this;
        plugin.settings = {}, plugin.tracking = {};
        var init = function() {
            plugin.settings = $.extend({}, defaults, options), plugin.el = el, plugin.selectable = options.selectable, 
            el.find(".uw_html").hide(), el.on("mouseenter", options.mouseenter), el.on("mouseleave", options.mouseleave), 
            options.submit ? (el.submit = options.submit, el.submit.on("click", options.click)) : el.find("li").on("click", options.click);
        };
        plugin.hideHTML = function() {
            el.find(".uw_html").hide();
        }, plugin.showHTML = function() {
            el.find(".uw_html").show();
        }, plugin.setSelected = function(n) {
            el.find("li").removeClass("selected"), el.find("li").eq(n).addClass("selected");
        }, plugin.getSelectedData = function() {
            return el.find(".selected").data("value");
        }, plugin.getSelectedText = function() {
            return el.find(".selected").text();
        }, plugin.track = function(identifier, value) {
            $(value).data("value") in plugin.tracking || (plugin.tracking[$(value).data("value")] = {
                id: identifier,
                item: value,
                unique: !0
            });
        }, plugin.untrack = function(value) {
            delete plugin.tracking[value];
        }, plugin.untrackAll = function() {
            plugin.tracking = {};
        }, plugin.isTracking = function(value) {
            return plugin.tracking[value];
        }, plugin.getTrackingObject = function() {
            return plugin.tracking;
        }, plugin.clearTrackingObject = function() {
            delete plugin.tracking;
        }, plugin.getTrackingArray = function() {
            var list = [];
            return $.each(plugin.tracking, function(index, value) {
                list.push({
                    type: value.id,
                    index: index
                });
            }), list;
        }, init();
    };
}(jQuery), function($) {
    $.verbierFilterTag = function(el, options) {
        var defaults = {
            display: "",
            value: "",
            defaultClass: "",
            customClass: "",
            click: null
        }, plugin = this;
        plugin.settings = {};
        var init = function() {
            plugin.settings = $.extend({}, defaults, options), plugin.el = el, plugin.display = options.display, 
            plugin.value = options.value, plugin.defaultClass = options.defaultClass, plugin.customClass = options.customClass, 
            plugin.click = options.click, plugin.el.append($("<span/>").append(plugin.display)).append($("<span/>").append("X").addClass("close")).addClass(plugin.defaultClass).addClass(plugin.customClass), 
            plugin.el.attr("data-value", plugin.value), plugin.el.on("click", plugin.click);
        };
        init();
    };
}(jQuery);

var AJAX_DICTIONARY = null, AJAX_REQUEST = null, AJAX_DATA = {
    filter: {},
    display: {}
};

VerbierDataManager.prototype = new EventDispatcher(), VerbierDataManager.prototype.constructor = VerbierDataManager, 
VerbierDataManager.prototype.getData = function(templateName, listWidgetClass, filterObj, successFunc) {
    null === filterObj && (filterObj = {
        filter: {}
    });
    var self = this, uri = $(listWidgetClass).data("uri"), results = $(".results")[0];
    $(results).css("background-image", "url(" + unroole.theme_absolute_path + "/media_assets/images/status.gif)").css("background-repeat", "no-repeat").css("background-position", "center"), 
    $(results).css("color", "transparent").css("line-heigh", "0"), AJAX_REQUEST = $.ajax(uri, {
        dataType: "JSON",
        data: filterObj,
        success: function(data) {
            $(".accommodations_results .filters").empty();
            var len = $.map(filterObj.filter, function(n, i) {
                return i;
            }).length;
            if ($(results).css("background-image", "none").css("line-height", "13px").css("color", "rgb(163, 163, 163)"), 
            $(".accommodations_results .results span").text(data.number_of_results), len > 0) {
                var cTag = new $.verbierFilterTag($("<div/>"), {
                    display: translation_helper("clear_all", "translation_templates"),
                    value: "",
                    defaultClass: "additive-filter-clear",
                    customClass: "",
                    click: function(e) {
                        e.preventDefault(), self.deleteAllFilters();
                    }
                }), currentDisplay = $.map($(".accommodations_results .filters div"), function(item) {
                    return $(item).data("value");
                });
                for (categories in filterObj.filter) $(filterObj.filter[categories]).each(function(index, item) {
                    if (-1 === $.inArray(item, currentDisplay)) {
                        var matchText, matchValue;
                        switch (categories) {
                          case "rating":
                            matchText = 1 === item ? item + " " + translation_helper("star", "translation_templates") : item + " " + translation_helper("stars", "translation_templates"), 
                            matchValue = item;
                            break;

                          case "rate_range":
                            $(".rate_range").length > 0 && $(".rate_range")[0].remove(), matchText = filterObj.filter[categories].low + "-" + filterObj.filter[categories].high, 
                            matchValue = filterObj.filter[categories].item;
                            break;

                          case "dates":
                            $(".dates").length > 0 && $(".dates")[0].remove(), matchText = filterObj.filter[categories].begin + "-" + filterObj.filter[categories].end, 
                            matchValue = filterObj.filter[categories].item;
                            break;

                          default:
                            try {
                                "undefined" != typeof filterObj.display && "undefined" != typeof filterObj.filter && (matchText = filterObj.display[categories][0], 
                                matchValue = filterObj.filter[categories][0]);
                            } catch (error) {
                                matchText = $(amFilter.getTrackingObject()[item].item).text(), matchValue = $(amFilter.getTrackingObject()[item].item).data("value");
                            }
                        }
                        var fTag = new $.verbierFilterTag($("<div/>"), {
                            display: matchText,
                            value: matchValue,
                            defaultClass: "additive-filter",
                            customClass: categories,
                            click: function(e) {
                                e.preventDefault();
                                var clone = $(this).clone().removeClass("additive-filter");
                                self.deleteFilter(clone.attr("class"), this), clone.remove();
                            }
                        });
                        $(".accommodations_results .filters").append(fTag.el);
                    }
                });
            }
            $(".accommodations_results .filters div").length > 0 && $(".accommodations_results .filters").prepend(cTag.el), 
            successFunc(templateName, listWidgetClass, data);
        },
        error: function() {}
    });
}, VerbierDataManager.prototype.setFilter = function(index, value) {
    AJAX_DATA.filter[index] = value;
}, VerbierDataManager.prototype.deleteFilter = function(index, item) {
    var removeItem = $(item).data("value"), len = 0;
    AJAX_DATA.filter[index] = jQuery.grep(AJAX_DATA.filter[index], function(value) {
        return value != removeItem;
    }), "village" == index && ($("#uw_accommodations_dropdown_1 li:first-child").text("VILLAGES"), 
    Session.clear());
    for (categories in AJAX_DATA.filter) len += $.map(AJAX_DATA.filter[categories], function(n, i) {
        return i;
    }).length;
    amFilter && amFilter.untrack(removeItem), $("*[data-value='" + removeItem + "']").removeClass("selected"), 
    amFilter && Object.keys(amFilter.tracking).length < 1 && this.dispatchEvent("DELETE_ALL_FILTERS", null), 
    0 == len ? this.dispatchEvent("DELETE_ALL_FILTERS", null) : (this.dispatchEvent("DELETE_FILTER", {
        item: item
    }), amFilter && amFilter.untrack($(item).data("value")));
}, VerbierDataManager.prototype.deleteAllFilters = function() {
    $.each(AJAX_DATA.filter, function(index) {
        delete AJAX_DATA.filter[index];
    }), $("#uw_accommodations_dropdown_1 li:first-child").text("VILLAGES"), amFilter && amFilter.untrackAll(), 
    Session.clear(), this.dispatchEvent("DELETE_ALL_FILTERS", null);
}, VerbierDataManager.prototype.getFiltersTotal = function() {
    var i = 0;
    return $.each(AJAX_DATA.filter, function() {
        i++;
    }), i;
};