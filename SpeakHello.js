(function(window) {
	var speakWord = "Good Bye";
	var ByeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}
	
	window.ByeSpeaker = ByeSpeaker;

})(window);
(function(window) {
	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);