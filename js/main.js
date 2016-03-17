$(document).ready(function () {
	"use strict";

	// variables
	var windowHeight = $(window).height();
	var middleElem = $(document.elementFromPoint(500, windowHeight - 200));
	// console.log(windowHeight, middleElem);
	
	// function calls
	// sectionHeights();
	// navMargins();

	// console.log('intro: ', $('#intro').offset());
	// console.log('team: ', $('#team').offset());
	// console.log('problem: ', $('#problem').offset());

	// // event handlers
	// $(window).resize(function () {
	// 	windowHeight = $(window).height();
	// 	navMargins();
	// 	sectionHeights();
	// });

	// functions
	function navMargins() {
		var navs = $('.nav-option'),
			h = $('#nav').height(),
			margin = (windowHeight - h) / navs.length;

		$('.nav-option').each(function () {
			$(this).css('margin-bottom', margin + 'px');
		});
	}

	function sectionHeights() {
		$('section').each(function () {
			$(this).css('min-height', windowHeight + 'px');
		})

	}
});