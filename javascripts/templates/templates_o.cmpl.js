 this["JST"] = this["JST"] || {};

this["JST"]["business.tmpl.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"business_container_small\">\n	<div class=\"business_small_img\">\n		<img src=\"";
  if (stack1 = helpers.header_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.header_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	</div>\n	<a class='business_small_img_link' href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-index_x=\"";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['x']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-index_y=\"";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['y']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></a>\n	<h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<h2>";
  if (stack1 = helpers.village) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.village); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<div id=\"travel_book_ribbon\">\n		<div class=\"my_travel_book_icon\" onclick=\"addTravelBook(this)\" data-item=\"";
  if (stack1 = helpers.json) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.json); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n		<div class=\"info-text\">\n			<p class=\"selected\">Add to My Travel Book</p>\n			<p>Remove from My Travel Book</p>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["business_bot.tmpl.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += "\n				<li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n			";
  return buffer;
  }

  buffer += "<div class=\"business_flyout\" data-index_x=\"";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['x']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-index_y=\"";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['y']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<a href=\"#\" class=\"business_flyout_close\">\n		<img src=\"https://factorylabs-unroole.s3.amazonaws.com/system/asset_images/85/original/close_button_flyout.png\" />\n	</a>\n	<div class=\"column_0\">\n		<div class=\"business_map_canvas\" data-lat=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.coords)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-lng=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.coords)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n		<img src=\"http://maps.googleapis.com/maps/api/staticmap?center="
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.coords)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.coords)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&zoom=15&sensor=true&markers=color:red%7C"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.coords)),stack1 == null || stack1 === false ? stack1 : stack1[0])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.coords)),stack1 == null || stack1 === false ? stack1 : stack1[1])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&size=380x320&key=AIzaSyA92nN0Kua54tvMskt_1bn_48nqE4PLNbY\">\n		</div>\n	</div>\n\n	<div class=\"column_1\">\n		<p>";
  if (stack2 = helpers.address) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.address); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n		<a href=\"tel:";
  if (stack2 = helpers.phone) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.phone); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> ";
  if (stack2 = helpers.phone) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.phone); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n		<a href=\"tel:";
  if (stack2 = helpers.fax) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.fax); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> ";
  if (stack2 = helpers.fax) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.fax); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n		<a href=\"mailto:";
  if (stack2 = helpers.email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.email); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\" class=\"blue_link\">";
  if (stack2 = helpers.email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.email); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n		<a href=\"";
  if (stack2 = helpers.website) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.website); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\" class=\"blue_link\">";
  if (stack2 = helpers.website) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.website); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n		<a href=\"";
  if (stack2 = helpers.vcard_url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.vcard_url); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\" class=\"vcard\">VCARD</a>\n	</div>\n\n	<div class=\"column_2\">\n		<ul class=\"opening\" >\n			<h3> Opening Period </h3>\n			";
  stack2 = helpers.each.call(depth0, (depth0 && depth0.opening_period), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</ul>\n		<div class=\"business_flyout_description\">\n			<h3> Description </h3>\n			<p>";
  if (stack2 = helpers.desc) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.desc); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["event.tmpl.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"article_container_small\">\n	<div class=\"article_small_img\">\n		<img src=\"";
  if (stack1 = helpers.header_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.header_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n	</div>\n	<a class='article_small_img_link' href=\"#\"></a>\n	<h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<h2>";
  if (stack1 = helpers.start_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start_date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<p>";
  if (stack1 = helpers.desc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.desc); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n	<div id=\"travel_book_ribbon\">\n		<div class=\"my_travel_book_icon\" onclick=\"addTravelBook(this)\" data-item=\"";
  if (stack1 = helpers.json) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.json); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n		<div class=\"info-text\">\n			<p class=\"selected\">Add to My Travel Book</p>\n			<p>Remove from My Travel Book</p>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["JST"]["events.tmpl.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"article_container_small\">\n	<a class='article_small_img_link' href=\"";
  if (stack1 = helpers.href) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.href); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-index_x=\"";
  if (stack1 = helpers['x']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['x']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-index_y=\"";
  if (stack1 = helpers['y']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0['y']); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;</a>\n    <div class=\"article_small_img\">\n        <img src=\"";
  if (stack1 = helpers.header_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.header_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n    </div>\n    <div class=\"article_container_small_text\">\n        <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n        <h2>";
  if (stack1 = helpers.start_date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.start_date); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n        <p>";
  if (stack1 = helpers.desc) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.desc); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </div>\n</div>";
  return buffer;
  });

this["JST"]["hotels.tmpl.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"accommodation_container_small\">\n	<div class=\"article_small_img\">\n		<img src=\"";
  if (stack1 = helpers.header_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.header_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></img>\n	</div>\n	<a class='article_small_img_link' href=";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "></a>\n	<h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<div class=\"accommodation_star_";
  if (stack1 = helpers.rating) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.rating); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n		<img src=\"https://factorylabs-unroole.s3.amazonaws.com/system/asset_images/41/original/stars.png?1382024420\"/>\n	</div>\n	<h2>";
  if (stack1 = helpers.village) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.village); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<p>";
  if (stack1 = helpers.address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.address); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n	<div id=\"travel_book_ribbon\">\n		<div class=\"my_travel_book_icon\" onclick=\"addTravelBook(this)\" data-item=\"";
  if (stack1 = helpers.json) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.json); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n		<div class=\"info-text\">\n			<p class=\"selected\">Add to My Travel Book</p>\n			<p>Remove from My Travel Book</p>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["JST"]["trails.tmpl.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"accommodation_container_small\">\n	<div class=\"article_small_img\">\n		<img src=\"";
  if (stack1 = helpers.header_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.header_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></img>\n	</div>\n	<a class='article_small_img_link' href=";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "></a>\n	<h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<h2>";
  if (stack1 = helpers.village) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.village); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<h3 class=\"upper\">";
  if (stack1 = helpers.duratin) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.duratin); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n	<h3>";
  if (stack1 = helpers.difficulty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.difficulty); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n	<div id=\"travel_book_ribbon\">\n		<div class=\"my_travel_book_icon\" onclick=\"addTravelBook(this)\" data-item=\"";
  if (stack1 = helpers.json) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.json); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n		<div class=\"info-text\">\n			<p class=\"selected\">Add to My Travel Book</p>\n			<p>Remove from My Travel Book</p>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  });

this["JST"]["weather.tmpl.js"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"mountain_container\">\n	<div class=\"today_container\">\n		<h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n		<div class=\"symbol_large sun\"><img data-src=\"";
  if (stack1 = helpers.symbol) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.symbol); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n		<span class=\"temp1\">";
  if (stack1 = helpers.temp_morn) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.temp_morn); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		<span class=\"temp2\">/ ";
  if (stack1 = helpers.temp_aft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.temp_aft); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n		<span class=\"windspeed\">";
  if (stack1 = helpers.wind_speed) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.wind_speed); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "<b>km/h</b></span>\n		<span class=\"direction\">";
  if (stack1 = helpers.wind_direction) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.wind_direction); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n	\n	</div>\n	<div class=\"days_container\">\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.day), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"day_container\">\n			<h1>";
  if (stack1 = helpers.short_day) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.short_day); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n			<div class=\"symbol_small\"><img data-src=\"";
  if (stack1 = helpers.symbol) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.symbol); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></div>\n			<span>";
  if (stack1 = helpers.temp_morn) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.temp_morn); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "<b>&deg;</b>/ ";
  if (stack1 = helpers.temp_aft) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.temp_aft); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "<b>&deg;</b><span>\n		</div>\n		";
  return buffer;
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.village), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
 
Handlebars.templates = this["JST"]