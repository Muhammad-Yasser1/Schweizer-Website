/*global $*/

$(function () {

	"use strict";


	var placeholderVal;


	$(".options .btn").on("click", function (e) {
		e.preventDefault();
		$(this).addClass("active").siblings(".btn").removeClass("active");
	});


	$("input").on("focus", function () {
		placeholderVal = $(this).prop("placeholder");
		$(this).prop("placeholder", "");
	});


	$("input").on("blur", function () {
		$(this).prop("placeholder", placeholderVal);
	});


	$("footer").css("top", $(".left").height());


	$(".panel img").height($(window).height() * .65);


	$(".act").on("click", function () {
		$("#up").toggleClass("active");
		$("[href='#login']").toggleClass("active");
		$("#register").addClass("active show");
		$("#login").removeClass("active show");
		$("footer").css("top", $(".left").height());

	});

	$("#up").on("click", function () {

		if ($(window).width() <= 768) {
			$("footer").css("top", $(".left").height() + 700);
		}

	});

	if ($("#register").hasClass("show")) {
		$("#up").addClass("active");
		$("[href='#login']").removeClass("active");
	} else {
		$("#up").removeClass("active");
		$("[href='#login']").addClass("active");
	}


	if ($(".sel select").hasClass("spread")) {
		$(".sel select").siblings(".arrow").children(".up").show();
		$(".sel select").siblings(".arrow").children(".down").hide();
	} else {
		$(".sel select").siblings(".arrow").children(".up").hide();
		$(".sel select").siblings(".arrow").children(".down").show();
	}


	$(".sel select").each(function () {
		$(this).on("click", function () {
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

	if ($(location).attr("href") == "file:///F:/Projects/Andreas/login/login.html#register") {
		$("#up").trigger("click");
	}

	$("#reg").click(function () {
		$("#up").trigger("click");
	});
});
