var texts = ['Hello World.', 'I\'m Blake.', 
	'I\'m a fullstack developer and API junkie.', 'Shall we?'];

var fontColor = ['rgb(226, 224, 217)'];

// function([string1, string2],target id,[color1,color2])    
consoleText(texts, 'text', fontColor);

// after animation runs once, scroll down to about me if user hasn't already scrolled past it.
setTimeout(function() {
	if ($(window).scrollTop() < 560) {
		$('html, body').animate({scrollTop: $('.about-me').offset().top}, 1500);
		// fade in about me image
		$('.about-me-image').fadeIn();
	}
}, 25300);

// Handles about-me-img fade in if user scrolls before the animation is over.
$(document).on('scroll', document, function() {
	// if img is hidden, fade it in
	if ($('.about-me-image').css('display') === 'none') {
		$('.about-me-image').fadeIn();
	}
});

function consoleText(words, id, colors) {
	// sets default color
	if (colors === undefined) colors = ['#fff'];
	// used for the blink
	var visible = true;

	var con = document.getElementById('console');
	var letterCount = 1;
	var x = 1;
	var waiting = false;
	var target = document.getElementById(id);
	target.setAttribute('style', 'color:' + colors[0]);

	window.setInterval(function() {
		if (letterCount === 0 && waiting === false) {
			waiting = true;
			target.innerHTML = words[0].substring(0, letterCount);
			window.setTimeout(function() {
				var usedColor = colors.shift();
				colors.push(usedColor);
				var usedWord = words.shift();
				words.push(usedWord);
				x = 1;
				target.setAttribute('style', 'color:' + colors[0]);
				letterCount += x;
				waiting = false;
			}, 1000);
		} else if (letterCount === words[0].length + 1 && waiting === false) {
			waiting = true;
			window.setTimeout(function() {
				x = -1;
				letterCount += x;
				waiting = false;
			}, 1000);
		} else if (waiting === false) {
			target.innerHTML = words[0].substring(0, letterCount);
			letterCount += x;
		}
	}, 120);

	// handles cursor blink
	window.setInterval(function() {
		if (visible === true) {
			con.className = 'console-underscore hidden';
			visible = false;
		} else {
			con.className = 'console-underscore';
			visible = true;
		}
	}, 400);
}