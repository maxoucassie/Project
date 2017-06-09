$(function() {

		$(window).scroll(function () {

		var wScroll = $(this).scrollTop();
		var menu = $(".menu");

		if(wScroll >= 485) {
			menu.addClass("bg");
		}
		else {
			menu.removeClass("bg");
		}
	});
});
