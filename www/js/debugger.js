if (typeof app == 'undefined') {
	app = {};
}
app.debugMode = (function() {
	var isDebug = false;

	var enableDebug = function (){
		isDebug = true
	}

	var disableDebug = function (){
		isDebug = false
	}

	var log = function (message, obj){
		if (isDebug) {
			console.log(message + ': ', obj);
		}
	}

	return {
		enableDebug : enableDebug,
		disableDebug : disableDebug,
		log : log
	}
})()