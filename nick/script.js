$(document).on('keypress', function(e) {
	if (e.which === 121)
		$('body').css('background-color', 'yellow');
	if (e.which === 114)
		$('body').css('background-color', 'red');
	if (e.which === 98)
		$('body').css('background-color', 'blue');
	if (e.which === 119)
		$('body').css('background-color', 'white');
});

$('div#hide1').on('click', function() {
	var p = $('p#one');
	p.toggle();
});

$('div#hide2').on('click', function() {
	var p = $('img#two');
	p.toggle();
});

$('div#hide3').on('click', function() {
	var p = $('img#three');
	p.toggle();
});
