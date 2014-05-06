/*
 * WEB TV ( MINIFIED )
*/

!function(e,t,n){function r(t,r){this.internals={},this.internals.tag=n.createElement("script"),this.internals.firstScriptTag=n.getElementsByTagName("script")[0],this.internals.playList=[],this.element=t,this.settings=e.extend({},o,r),this._defaults=o,this._name=i,this.init()}var i="verbierWebTV",o={playlistId:"PL28D93E0A194143BD",playlistTag:".playlist",videoWidth:"1080",videoHeight:"633"};r.prototype={init:function(){var n=this;this.internals.tag.src="https://www.youtube.com/iframe_api",this.internals.firstScriptTag.parentNode.insertBefore(this.internals.tag,this.internals.firstScriptTag),e(this.settings.playlistTag).delegate("li a","click",function(t){t.preventDefault(),n.internals.player.loadVideoById(e(this).data("video"))}),t.onYouTubeIframeAPIReady=this.getPlaylist(this.settings,function(e){n.internals.player=new YT.Player("ytplayer",{height:n.settings.videoHeight,width:n.settings.videoWidth,videoId:e[0]})})},updateVideo:function(t){t.preventDefault(),this.internals.player.loadVideoById(e(this).data("video"))},getPlaylist:function(t,n){var r="http://gdata.youtube.com/feeds/api/playlists/"+t.playlistId+"?v=2&alt=json&callback=?",i="http://www.youtube.com/watch?v=",o=[];e.getJSON(r,function(r){var a="";return e.each(r.feed.entry,function(t,n){var r=n.title.$t,s=n.link[1].href,l=s.split("/"),c=e.trim(l[l.length-2]),u=i+c,p="http://img.youtube.com/vi/"+c+"/default.jpg";o.push(c),a+='<li class="webtv-playlist-item">                                             <a href="'+u+'" title="'+r+'" data-video="'+c+'">                                                 <img alt="'+r+'" src="'+p+'"/>                                             </a>                                             <h1>'+r+"</h1>                                             </li>"}),e(a).appendTo(t.playlistTag),n(o)})}},e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new r(this,t))})}}(jQuery,window,document);



 if (JSON && JSON.stringify && JSON.parse) var Session = Session || (function() {
 
	// window object
	var win = window.top || window;
	
	// session store
	var store = (win.name ? JSON.parse(win.name) : {});
	
	// save store on page unload
	function Save() {
		win.name = JSON.stringify(store);
	};
	
	// page unload event
	if (window.addEventListener) window.addEventListener("unload", Save, false);
	else if (window.attachEvent) window.attachEvent("onunload", Save);
	else window.onunload = Save;

	// public methods
	return {
	
		// set a session variable
		set: function(name, value) {
			store[name] = value;
		},
		
		// get a session value
		get: function(name) {
			return (store[name] ? store[name] : undefined);
		},
		
		// clear session
		clear: function() { store = {}; },
		
		// dump session data
		dump: function() { return JSON.stringify(store); }
 
	};
 
 })();

/*
 * EVENT DISPATCHER
*/

function EventDispatcher() {

    this.events = [];
    this.data = null
}

EventDispatcher.prototype.addEventlistener = function (e, t) {

    this.events[e] = this.events[e] || [];
    
    if (this.events[e]) {
    
        this.events[e].push(t)
    }
};

EventDispatcher.prototype.removeEventlistener = function (e, t) {

    if (this.events[e]) {
    
        var n = this.events[e];
        
        for (var r = n.length - 1; r >= 0; --r) {
        
            if (n[r] === t) {
            
                n.splice(r, 1);
                return true
            }
        }
    }
    
    return false
};

EventDispatcher.prototype.dispatchEvent = function (e, t) {

    this.data = t;
    
    if (this.events[e]) {
    
        this.events[e].data = this.data;
        
        var n = this.events[e];
        var r = n.length;
        
        while (r--) {
        
            n[r](this)
        }
    }
}


/*
 * Slideshow plugin
*/

;(function ( $, window, document, undefined ) {

    $.widget( 'unroole.slideshow' , {

        options: {
            display : [0],
            left : '.slideshow_prev_item',
            right : '.slideshow_next_item',
            timeout : null,
            pagination : false
        },

        _create: function () {
            
            this.initVariables();
            this.initWidget();
        },
        
        initVariables: function(){
            
            // Display
            this.display = this.options.display;
    
            // Slides
            this.element.find('ol').addClass('slides');
            this.slides = this.element.find('li');
            this.slideIndex = 0;
            this.totalSlides = $( this.slides ).size();
            
            // First & last items
            this.first = this.slides.eq( 0 );
            this.last = $( this.slides ).eq( $( this.slides ).size() - 1 );
            
            // Left & right buttons
            this.left = this.element.find( this.options.left );
            this.right = this.element.find( this.options.right );            
        },
        
        initWidget: function(){
            
            if( this.options.pagination ){
            
                this.initPagination();
            }
            
            this.updateSlides( this.display );
            this.initButtons();
        },
        
        initButtons: function(){
			
			var self = this;
        
            init( this, this.left, this.first, -1 );
            init( this, this.right, this.last, 1 );
            
            function init( scp, btn, sld, n ){
				
				$( btn ).unbind( 'click' );
				
                $( btn ).on('click', function( e ){
            
                    e.preventDefault();
					
                    if( sld.css( 'display') === 'none'){
                        
                        $.each( scp.display, function( index, value ){
                            
                            scp.display[ index ] = scp.formatIndex( value + n, $(scp.slides).size() );
                        });
                        
                        scp.updateSlides( scp.display );
                    }
					
					self.element.trigger( ($( e.target ).hasClass('slideshow_next_item')) ? 'SLIDESHOW_NEXT' : 'SLIDESHOW_PREV', scp.display );
                });
            }
        },
        
        initPagination: function(){
            
            var t = this;
        
            var ol = $( '<ol/>');
            ol.addClass('pagination');
            
            for(var i= 0; i < this.slides.length; i++ ){
             
                var li = $( '<li/>' );
                
                if( i === 0 ){
                    
                    li.addClass( 'selected' );// Problem is here
                }
                
                li.html( i );
                
                li.on( 'click', function( e ){
                    
                    e.preventDefault();
                    
                    $(this).siblings().removeClass( 'selected' );
                    $(this).addClass( 'selected' );
                    
                    t.updateSlides([$( this ).index()]);
                });
                
                ol.append( li );
            }
            
            this.element.prepend( ol );
			
			$('.pagination').wrap('<span></span>');
            
            // Pagination Variables
            this.paginationButtons = this.element.find('.pagination li');
        },

        play: function( delay ){
            
            var t = this;
            
            if( delay && ( delay != 0 )){
                
                clearTimeout( t.timeout );
                
                function timeoutCallback(){
                    
                    ( t.last.css('display') != 'none' ) ? t.updateSlides( [0] ) : t.right.trigger('click');
                    t.timeout = setTimeout( timeoutCallback, delay * 1000 );
                }
                
                t.timeout = setTimeout( timeoutCallback, 5000 );
            }
        },

        pause: function(){
        	clearTimeout(this.timeout);
        },
        
        updateSlides: function( d ){
        
            // Display
            this.display = d;
            
            // Slides
            this.slides.hide();
            this.showSlides();
            
            // Buttons
            this.slideIndex = this.element.find('.slides li.selected').index();
            
            ( this.slideIndex === 0 ) ? this.hideButton( this.left ) : this.showButton( this.left );
            ( this.slideIndex === this.totalSlides - 1 ) ? this.hideButton( this.right ) : this.showButton( this.right );
            
            if( this.options.pagination ){
                
                // Pagination
                this.paginationButtons.removeClass('selected');
                this.paginationButtons.eq( this.slideIndex ).addClass('selected');
            }
        },
        
        showSlides: function() {
            
            var t = this;
            
            t.slides.removeClass('selected');
            
            $.each( this.display, function( index, value ){
            
                t.slides.eq( value ).addClass('selected');
                t.slides.eq( value ).show();
            });
        },
        
        formatIndex: function ( index, total ) {
            
            var i = index;
            var t = total - 1;
            
            if( i < 0 ){
                
                i = t;
            
            }else if( i > t ){
                
                i = 0;
            }
            
            return i;
        },
        
        showButton: function ( t ) { $( t ).fadeTo( 0, 1.0 ).css( 'cursor', 'pointer' ); },
        hideButton: function ( t ) { $( t ).fadeTo( 0, 0.5 ).css( 'cursor', 'default' ); },
        destroy: function () {$.Widget.prototype.destroy.call(this);},
        
        // Respond to any changes the user makes to the
        // option method
        _setOption: function ( key, value ) {
            switch (key) {
            case "someValue":
                //this.options.someValue = doSomethingWith( value );
                break;
            default:
                //this.options[ key ] = value;
                break;
            }

            // For UI 1.8, _setOption must be manually invoked
            // from the base widget
            $.Widget.prototype._setOption.apply( this, arguments );
            // For UI 1.9 the _super method can be used instead
            // this._super( "_setOption", key, value );
        }
    });

})( jQuery, window, document );

/**
 * Verbier Filter
*/

;(function($) {

    $.verbierFilter = function(el, options) {

        var defaults = {
			submit: null
		}
		
        var plugin = this;
        plugin.settings = {};
		plugin.tracking = {};

        var init = function() {
			
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
			plugin.selectable = options.selectable;
			
			el.find('.uw_html').hide();
			el.on('mouseenter', options.mouseenter );
			el.on('mouseleave', options.mouseleave );
			
			if(options.submit){
			
				el.submit = options.submit;
				el.submit.on('click', options.click );
				
			}else{
				
				el.find('li').on('click', options.click );
			}
        }
		
		/**
		 * Hide & show
		*/
		
		plugin.hideHTML = function() {el.find('.uw_html').hide();}
		plugin.showHTML = function() {el.find('.uw_html').show();}
		
		/**
		 * Selection
		*/
		
		plugin.setSelected = function(n){
			el.find('li').removeClass('selected');
			el.find('li').eq(n).addClass('selected');
		}
		
		plugin.getSelectedData = function(){return el.find('.selected').data('value');}
		plugin.getSelectedText = function(){return el.find('.selected').text();}
		
		/**
		 * Tracking
		*/
		
		plugin.track = function( identifier, value ){ 
			
			if( !($(value).data('value') in plugin.tracking) ){
				plugin.tracking[ $(value).data('value') ] = { id: identifier, item: value, unique: true };
			}
		
		}
		
		plugin.untrack = function( value ){
			
			delete plugin.tracking[ value ];
		}
		
		plugin.untrackAll = function(){
			plugin.tracking = {};
		}
		
		plugin.isTracking = function( value ){return plugin.tracking[ value ];}
		plugin.getTrackingObject = function(){ return plugin.tracking; }
		plugin.clearTrackingObject = function(){ 
			
			delete plugin.tracking;
			//plugin.tracking = {}; 
		}
		
		plugin.getTrackingArray = function( identifier ){
			
			var list = [];
			
			$.each(plugin.tracking, function( index, value ){
				list.push( {type: value.id, index: index} );
			});
			
			return list;
		}

        init();
    }

})(jQuery);

;(function($) {

    $.verbierFilterTag = function(el, options) {

        var defaults = {
            display: '',
			value: '',
			defaultClass: '',
            customClass: '',
			click: null
        }

        var plugin = this;

        plugin.settings = {}

        var init = function() {
			
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
			plugin.display = options.display;
			plugin.value = options.value;
			plugin.defaultClass = options.defaultClass;
			plugin.customClass = options.customClass;
			plugin.click = options.click;
			
			plugin.el.append( $('<span/>').append( plugin.display ) ).append( $('<span/>').append('X').addClass('close') ).addClass(plugin.defaultClass).addClass( plugin.customClass );
			plugin.el.attr( 'data-value', plugin.value );
			plugin.el.on('click', plugin.click);
        }

        //plugin.foo_public_method = function() {}
		//var foo_private_method = function() {}

        init();

    }

})(jQuery);


/*
 * VARIABLES
*/

// A dictionary that keeps references of AJAX requests so that they can be removed
var AJAX_DICTIONARY = null;

// A global AJAX request object
var AJAX_REQUEST = null;

// Stores the filter keys for use when making AJAX calls to the API
var AJAX_DATA = { 'filter' : {}, 'display' : {} };

/*
 * VERBIER DATA MANAGER - CONSTRUCTOR
*/

function VerbierDataManager() {
    
    EventDispatcher.call( this );
}

VerbierDataManager.prototype = new EventDispatcher;
VerbierDataManager.prototype.constructor = VerbierDataManager;

/*
 * VERBIER DATA MANAGER - METHODS
*/

VerbierDataManager.prototype.getData = function( templateName, listWidgetClass, filterObj, successFunc ){
	
    if( filterObj === null ) filterObj = {filter:{}};
    
	var self = this;
    var uri = $( listWidgetClass ).data( 'uri' );
	var results = $(".results")[0];
	
	$(results).css('background-image', 'url(' + unroole.theme_absolute_path + '/media_assets/images/status.gif)').css('background-repeat','no-repeat').css('background-position','center');
	$(results).css('color', 'transparent').css('line-heigh', '0');
	
    AJAX_REQUEST = $.ajax( uri, {
    
        dataType: 'JSON',
        data: filterObj,
        
        success: function ( data, textStatus, jqXHR ){
			
			// Clear the filters div
			$('.accommodations_results .filters').empty();
			
			var len = $.map(filterObj.filter, function(n, i) { return i; }).length;
			
			$(results).css('background-image', 'none').css('line-height', '13px').css('color', "rgb(163, 163, 163)");
			
			$('.accommodations_results .results span').text( data.number_of_results );
			//$('.accommodations_results .results span').text( data.number_of_results.toString() );
			
			if( len > 0 ){
				
					
				var cTag = new $.verbierFilterTag($('<div/>'), {
					
					display: 'clear all',
					value: '',
					defaultClass: 'additive-filter-clear',
					customClass: '',
					
					click: function(e){
					
						e.preventDefault();	
                    	self.deleteAllFilters();
					}
				});
				
				var currentDisplay = $.map($('.accommodations_results .filters div'), function(item){
						
						return $(item).data('value');
				});
				
				for(categories in filterObj.filter){
					
					$(filterObj.filter[categories]).each(function(index, item){ 
						
						if($.inArray(item, currentDisplay) === -1){
							
							var matchText, matchValue;
							
							switch(categories){
								
								case 'rating':
								
								if( item === 1 ){
								
									matchText = item + ' Star';
								
								}else{
								
									matchText = item + ' Stars';
								}
								
								matchValue = item;
								break;
									
								case 'rate_range':
								if($('.rate_range').length > 0){
									
									$('.rate_range')[0].remove();
								}	
								matchText = filterObj.filter[categories].low + '-' + filterObj.filter[categories].high;
								matchValue = filterObj.filter[categories].item;
								break;
							
								case 'dates':
								if($('.dates').length > 0){
									
									$('.dates')[0].remove();
								}
								matchText = filterObj.filter[categories].begin + '-' + filterObj.filter[categories].end;
								matchValue = filterObj.filter[categories].item;
								break;
								
								default:
									
									try{
									
										/**
										 * This is used for the rates / amenities combination filter
										*/
										if(typeof(filterObj.display) !== "undefined" && typeof(filterObj.filter) !== "undefined") {
											matchText = filterObj.display[categories][0];
											matchValue = filterObj.filter[categories][0];
										}
									
									}catch(error){
									
										/**
										 * This is used an amenities filter
										*/
										matchText = $( amFilter.getTrackingObject()[ item ].item ).text();
										matchValue = $( amFilter.getTrackingObject()[ item ].item ).data('value');
								

									}
							}
							
							var fTag = new $.verbierFilterTag($('<div/>'), {
								
								display: matchText,
								value: matchValue,
								defaultClass: 'additive-filter',
								customClass: categories,
								
								click: function(e){
								
									e.preventDefault(); 
									var clone = $(this).clone().removeClass('additive-filter');
									self.deleteFilter( clone.attr('class'), this );
									clone.remove();
								}
							});
							
							$('.accommodations_results .filters').append( fTag.el );
						}
					});
				}
			}
			if($('.accommodations_results .filters div').length > 0){
				
				$('.accommodations_results .filters').prepend( cTag.el );
			}

			successFunc( templateName, listWidgetClass, data );
        },
        
        error: function(jqXHR, textStatus, errorThrown) {}
    });
}

VerbierDataManager.prototype.setFilter = function( index, value ){AJAX_DATA.filter[ index ] = value;}

VerbierDataManager.prototype.deleteFilter = function( index, item ){
	
	var removeItem = $(item).data("value");
	var len = 0;

	AJAX_DATA.filter[index] = jQuery.grep(AJAX_DATA.filter[index], function(value) {
		return value != removeItem;
	});

	if(index == "village"){
		$("#uw_accommodations_dropdown_1 li:first-child").text("VILLAGES");
		Session.clear();
	}
	
	for(categories in AJAX_DATA.filter){	
		len += $.map(AJAX_DATA.filter[categories], function(n, i) { return i; }).length;
	}
	
	amFilter.untrack(removeItem);
	$("*[data-value='" + removeItem + "']").removeClass("selected");
	
	if(Object.keys(amFilter.tracking).length < 1){
		this.dispatchEvent('DELETE_ALL_FILTERS', null );
	}
	
	
	if(len == 0){
		
		this.dispatchEvent('DELETE_ALL_FILTERS', null );
		
	} else {
		
		this.dispatchEvent('DELETE_FILTER', { item: item });
		
		amFilter.untrack( $(item).data('value') );
	}
}

VerbierDataManager.prototype.deleteAllFilters = function(){
	
    $.each(AJAX_DATA.filter, function( index, value ){
		
		delete AJAX_DATA.filter[ index ];
	});
	
	$("#uw_accommodations_dropdown_1 li:first-child").text("VILLAGES");
	amFilter.untrackAll();
	Session.clear();
    this.dispatchEvent('DELETE_ALL_FILTERS', null );
}

VerbierDataManager.prototype.getFiltersTotal = function(){
    
    var i = 0;
    $.each(AJAX_DATA.filter, function ( index, value ) {i++;});
    return i;
}

function isDuplicate( txtA ){
    
    var bool = false;
    
    $.each( $('.additive-filter'), function( index, value ){
        
        var txtB = $( value ).find('span:first-child').text();
    
        if(txtA === txtB){
        
            bool = true;
        }
    });
    
    return bool;
}

/*
 * PAGES - DATA (Will be migrated to pages.js once these pages are built)
*/

//function getHotelData() {getData( "hotels.tmpl.js", ".uw_tourism_event_list", null );}
//function getTrailData() {getData( "trails.tmpl.js", ".uw_geotrail_list", null );}

//#################################################################
