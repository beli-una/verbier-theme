function toggleSelected( el ){
	
	var siblings = el.siblings();
	siblings.removeClass('selected');
	el.addClass('selected');
}

function mouseleaveMultiple( elementClasses, openFunc, closeFunc ){

	var counter = 0;
	
	$( elementClasses ).on('mouseenter', function(e){
	
		counter = clampNumber( counter + 1, 0, 2 );
		
		openFunc(e);
	});
	
	$( elementClasses ).on('mouseleave', function(e){
	
		counter--;
		
		if( counter === 0 ){
		
			closeFunc(e);
		}
	});
}

function clampNumber( val, min, max ){return Math.min( Math.max( val, min ), max );}

function iFrame(){return ( window.self === window.top ) ? false : true;}

/*
 * ARRAY
*/

Array.prototype.unique = function() {
  
	return this.filter(function(value, index, array) {
	
		return array.indexOf(value, index + 1) < 0;
	});
};

function getIntersect(arr1, arr2) {
	
	var r = [], o = {}, l = arr2.length, i, v;
	
	for (i = 0; i < l; i++) {
		
		o[arr2[i]] = true;
	}
	
	l = arr1.length;
	
	for (i = 0; i < l; i++) {
		
		v = arr1[i];
		
		if (v in o) {
			
			r.push(v);
		}
	}
	
	return r;
}

/*
 * OTHER
*/

function addImageClasses(selector, cont_width, cont_height){
	if(typeof(selector)==='undefined') selector = ".article_small_img" ;
	if(typeof(cont_width)==='undefined') cont_width = 350;
	if(typeof(cont_height)==='undefined') cont_height = 210 ;
	$( selector + ' img').each(function(){

		var img_width = $(this).width();
		var img_height = $(this).height();
		var ratio_width = img_width / cont_width;
		var ratio_height = img_height / cont_height;

		if ( (img_height > 0) && (img_width > 0) ){
			
			if( (ratio_width > ratio_height) && !$(this).hasClass("horizontal")){
				
				$(this).addClass("horizontal");
				var ratio = cont_height / img_height;
				var offset = Math.floor((ratio*img_width -cont_width)/2 * -1) + "px";
				$(this).css("margin-left",function(){ return offset});
				
			}else if((ratio_width < ratio_height) && !$(this).hasClass("vertical")){
				
				$(this).addClass("vertical");
				var ratio = cont_width / img_width;
				var offset = Math.floor((ratio*img_height -cont_height)/2 * -1) + "px";
				$(this).css("margin-top", function(){ return offset});
			}
		}
	}); 
}

function hide_empty_data(dataClass, dataAttr, displayClass, attr_update){
	if ($(dataClass) && $(dataClass).length != 0 ) {
		if($(dataClass).data(dataAttr) === undefined || $(dataClass).data(dataAttr).length === 0 ){
			$(displayClass).hide();
		}else{
			var url = $(dataClass).data(dataAttr);
      // Remove after testing before going live!!!
      if (url == "http://online.citybreak.com/Accommodation/Details.aspx?onlineid=1178740756&PropertyId=77513&show=book") {
        url = "http://online3.citybreak.com/1797402151/fr/fr-ch/hebergements/a407701/chalet-de-flore/details?filter=t%3Dflore&refcur=CHF"
      }
      // Remove after testing before going live!!!
			if (url.indexOf("reservation.verbier.ch") > -1 || url.indexOf("citybreak.com") > -1) {
				url = "/reservations?booking_url=" + encodeURIComponent(url);
			}
			$(displayClass).attr(attr_update,  url );
		}
	}
}

function listToMatrix(list, elementsPerSubArray) {
	var matrix = [], i, k;

	for (i = 0, k = -1; i < list.length; i++) {
		if (i % elementsPerSubArray === 0) {
			k++;
			matrix[k] = [];
		}

		matrix[k].push(list[i]);
	}

	return matrix;
}

function classExists(matchClass) {
	
	var elems = document.getElementsByTagName('*'), i;
	
	for (i in elems) {
		
		if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
			
		   return true;
		}
	}
}

// if structure needs to be from most popular pages to less popular page due to it being n*n
// the lower the page is on the list the longer funciton will take. Pages not on the list will take the longest
function page_checker(){
	if( classExists("home_page") ){
		return "home_page";
	}else if( classExists("bus_listing_page") ){
		return "bus_listing_page";
	}else if( classExists("listing_page") ){
		return "listing_page";
	}else if( classExists("hotel_details_page") ){
		return "hotel_details_page";
	}else if( classExists("trail_details_page")){
		return "trail_details_page";
	}else if(classExists("skiing_verbier_page")){
		return "skiing_verbier_page";
	}else if(classExists("trail_listing_page")){
		return "trail_listing_page";
	}else if(classExists("events_listing_page")){
		return "events_listing_page";
	}
}

$.prototype.trunc = $.prototype.trunc ||
	 function(n,useWordBoundary){
		 $.each(this, function(i, v){
			 var text_s = $(v).text(),
				 toLong = text_s.length > n-1,
				  s_ = toLong ? text_s.substr(0, n-1) : text_s;
			 s_ = useWordBoundary && toLong ? s_.substr(0, s_.lastIndexOf(' ')) : s_;
			 $(v).text( toLong ? s_ + ' ...' : s_ );
			 
		 });
	  };
