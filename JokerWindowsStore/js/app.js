$(function() {
	$.get("json/application.json",
			function(data) {
				var navigation_head = $(".mdl-layout__header .mdl-navigation");
				var navigation = $(".mdl-layout__drawer .mdl-navigation");
				for ( var index_module in data.index_modules) {
					var temp = data.index_modules[index_module];
					navigation.append(components.navigation__link(temp));
					navigation_head.append(components.navigation__link(temp));
				}
			});
});
/**
 * UI组件
 */
var components = {
	"navigation__link" : function(index_module) {
		return $("<a class=\"mdl-navigation__link\" href=\"#1\">"
				+ index_module.name + "</a>");
	},
	"layout__tab_bar" : function(index_module) {
		var is_active = ""
		if (index_module.id == 0) {
			// is_active = " is-active";
		}
		return $("<a class=\"mdl-layout__tab "
				+ is_active
				+ "\" href=\"#fixed-tab-"
				+ index_module.id
				+ "\">"
				+ index_module.name
				+ '<span class="mdl-layout__tab-ripple-container mdl-js-ripple-effect" data-upgraded=",MaterialRipple"><span class="mdl-ripple is-animating" style="width: 273.215px; height: 273.215px; transform: translate(-50%, -50%) translate(91px, 28px);"></span></span>'
				+ "</a>");
	},
	"refreshMDL" : function() {
		// $("#mdl_css").remove();
		// $(document.body)
		// .append(
		// '<link id="mdl_css" href="mdl/material.min.css" rel="stylesheet"
		// />');
		// $("#mdl_js").remove();
		// $(document.body).append(
		// '<script id="mdl_js" src="mdl/material.min.js"></script>');
		// var test=document.getElementsByTagName('html')[0].innerHTML;
		//
		// alert(test);
		// document.getElementsByTagName('html')[0].innerHTML=test;
	}
}