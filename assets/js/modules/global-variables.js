var isIos = (function(){
	return (/iPhone|iPad/i.test(navigator.userAgent));
})();

var isMac = (function() {
	return (/Mac/i.test(navigator.userAgent));
})();