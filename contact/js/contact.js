$(function () {

	"use strict";

	$(".panel img").height($(window).height() * .65);


	$(".ins input, .ins textarea").each(function () {
		var holder = $(this).prop("placeholder");

		$(this).on("focus", function () {
			$(this).prop("placeholder", "");
		});

		$(this).on("blur", function () {
			$(this).prop("placeholder", holder);
		});


	});



	if ($(".sel select").hasClass("spread")) {
		$(".sel select").siblings(".arrow").children(".up").show();
		$(".sel select").siblings(".arrow").children(".down").hide();
	} else {
		$(".sel select").siblings(".arrow").children(".up").hide();
		$(".sel select").siblings(".arrow").children(".down").show();
	}


	$(".sel select").on("click", function () {
		$(this).toggleClass("spread");
		if ($(this).hasClass("spread")) {
			$(this).siblings(".arrow").children(".up").show();
			$(this).siblings(".arrow").children(".down").hide();
		} else {
			$(this).siblings(".arrow").children(".up").hide();
			$(this).siblings(".arrow").children(".down").show();

		}
	});
});
