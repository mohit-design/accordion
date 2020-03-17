$(document).ready(function() {
	$(".accordian > ul > li > a").click(function(e) {
		e.preventDefault();
		$(this).parent().parent().find('ul').slideUp();
		if(!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
	});
});