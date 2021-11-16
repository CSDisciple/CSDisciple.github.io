/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('#nav a, .scrolly').scrolly({
		speed: 1000,
		offset: function () { return $nav.height(); }
	});

	$window.on('load', function () {
	function typeWriter() {


			var i = 0;
			var txt = 'Hi. I\'m Oleksandr Stasyev.';
			var speed = 100;

			for(i = 0; i <= txt.length; i++) {
				document.getElementById("write").innerHTML += txt.charAt(i);
				
			}

			setTimeout(typeWriter, speed);
		}

		
	});



})(jQuery);

