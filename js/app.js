$(document).ready(function() {
	
	$("#slider-wrap").on('init reInit beforeChange afterChange', function(event, slick) {
		fillNavigation(slick)
	})
	
	$("#slider-wrap").slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		nextArrow: $(".slider_next"),
		prevArrow: $(".slider_prev"),
		swipeToSlide: true,
		draggable: true,
		swipe: true,
	})


	function fillNavigation(slick) {
		$(".slider_current").html(slick.currentSlide + 1)
		$(".slider_all").html(slick.slideCount)
	}
	

	$(".btn_blue").magnificPopup({
		type: 'inline',
		focus: ".form_inp",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#10006</button>'
	})

	$(".header_burger").on("click", function() {
		$(".navigation").toggleClass("navigation_open")
		$(".header_burger").toggleClass("header_burger_open")
	})


	function close(className, classNameClose) {
		$(className).removeClass(classNameClose)
		$(".body_modal").removeClass("body_modal")

	}
	
	$(".header_search").on("click", function() {
		if($(window).width() <= '756') {
			$(".search_mobile").toggleClass("search_mobile_open")
			$("body").toggleClass("body_modal")

			$(".search_mobile").on("click", function(e) {
			if(e.target == $(".search_mobile")[0] ) {
				close(".search_mobile_open", "search_mobile_open")
			}
			$(".search_mobile").keyup(function(e) {
				if (e.key === "Escape" || e.keyCode === 27) {
					close(".search_mobile_open", "search_mobile_open")
					
				}
			});
		})
		}
	})
	

})