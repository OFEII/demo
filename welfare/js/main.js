// swiper滑动
var swiper = new Swiper('.swiper-container',{
	loop: true,
	pagination: {
    el: '.swiper-pagination',

  },

});

$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#card').addClass('fixed');
		} else {
			$('#card').removeClass('fixed');
		}
	});


});	 
	