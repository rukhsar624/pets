// scroll navbar
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	if (scroll > 90) {
		$("#navbar-fixed-top").css("background", "#FFFFFF");
		$("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px")
	}
	else {
		$("#navbar-fixed-top").css("background", "none");
		$("#navbar-fixed-top").css("box-shadow", "none")

	}
})
// MOBILE SCREEN SIDE NAV
var sidebarBox = document.querySelector('#box');
var sidebarBtn = document.querySelector('#btn');
var pageWrapper = document.querySelector('#main-content');

sidebarBtn.addEventListener('click', function (event) {

	if (this.classList.contains('active')) {
		this.classList.remove('active');
		sidebarBox.classList.remove('active');
	} else {
		this.classList.add('active');
		sidebarBox.classList.add('active');
	}
});

pageWrapper.addEventListener('click', function (event) {

	if (sidebarBox.classList.contains('active')) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});
window.addEventListener('keydown', function (event) {

	if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
		sidebarBtn.classList.remove('active');
		sidebarBox.classList.remove('active');
	}
});
// Swiper Slider
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	breakpoints: {
	  // when window width is >= 320px
	  768: {
		slidesPerView: 2,
		spaceBetween: 1
	  },
	  375: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  1920: {
		slidesPerView: 3,
		spaceBetween: 20
	  },
	  1600: {
		slidesPerView: 3,
		spaceBetween: 20
  
	  },
	  1366: {
		slidesPerView: 3,
		spaceBetween: 20
	  },
	  1400: {
		slidesPerView: 3,
		spaceBetween: 20
	  }
	}
  
  });
