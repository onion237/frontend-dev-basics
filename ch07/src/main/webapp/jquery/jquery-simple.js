var $ = function(selector){
	if(!selector){
		return;
	}
	
	if(typeof(selector) == 'function'){
		window.addEventListener('load', selector)
		return;
	}
	
	if(typeof(selector) == 'string'){
		var elements = document.querySelectorAll(selector)
		return new _jQuery(elements)
	}
}

var _jQuery = function(elements){
	this.length = elements && elements.length || 0
	this.__proto__ = jQuery.prototype
}

window.jQuery = $;