$(function () {

	"use strict";

	$(".panel img").height($(window).height() * .65);


	$(".card-link").each(function () {

		if ($(this).parent().siblings(".collapse").hasClass("show")) {

			$(this).children(".fa-minus").show();
			$(this).children(".fa-plus").hide();

		} else {

			$(this).children(".fa-minus").hide();
			$(this).children(".fa-plus").show();

		}
	});



	$(".card-link").each(function () {
		$(this).on("click ", function () {

			if ($(this).parent().siblings(".collapse").hasClass("show")) {

				$(this).children(".fa-minus").hide();
				$(this).children(".fa-plus").show();
				$()

			} else {

				$(this).children(".fa-minus").show();
				$(this).children(".fa-plus").hide();
			}
		});
	});


});
