function stickyHeader() {
	if($('.js-header').length) {
		var main = $('.main'),
				header = $('.js-header'),
				headerHeight = header.outerHeight();
		header.css('margin-bottom',-headerHeight);
		main.css('padding-top',headerHeight);
	}
}
stickyHeader();

function anchorAnimation() {
	if($('.js-anchor').length) {
		$('.js-anchor').on('click', function(event) {
			event.preventDefault();
			var id = $(this).attr('href'),
					headerHeight = $('.js-header').outerHeight(),
					top = $(id).offset().top - headerHeight;
			$('body, html').animate({scrollTop: top}, 500);
		})
	}
}
anchorAnimation();

function rSlider() {
	$(".js-slider").responsiveSlides({
		nav: true
	});
}
rSlider();

function toTop() {
	$('.js-totop').on('click', function () {
		$('html, body').animate({
				scrollTop: 0
		}, 600);
		return false;
	});
	$(window).on('scroll', function() {
		if($(window).scrollTop() > 200) {
			$('.js-totop').show(300);
		} else if($(window).scrollTop() < 200) {
			$('.js-totop').hide(300);
		}
	})
}
toTop();

function initMap() {
	var uluru = {lat: 38.745360, lng: -76.969062};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: uluru
	});

	var contentString = '<div id="content"><h3 id="firstHeading" class="firstHeading">2619 Old Fort Rd Fort Washington, PA 19034</h3></div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var image = 'images/location.png';
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		title: 'Uluru',
		icon: image
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
}
initMap();

function autoFooter() {
	if($('.js-footer').length) {
		var wrapper = $('.wrapper'),
				footer = $('.js-footer'),
				footerHeight = footer.outerHeight();
		footer.css('margin-top',-footerHeight);
		wrapper.css('padding-bottom',footerHeight);
	}
}



$(document).on('ready', function() {
	
	anchorAnimation();
	rSlider();
	toTop();
	initMap();
})

$(window).on('load', function() {
	autoFooter();
	stickyHeader();
});

$(window).on('resize', function() {
	autoFooter();
	stickyHeader();
})