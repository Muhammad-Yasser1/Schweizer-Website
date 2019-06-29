/*global $*/

$(function() {
  "use strict";

  var placeholderVal;

  $(".chevs").on("click", function() {
    $(this)
      .children(".fa-chevron-right")
      .toggle();
    $(this)
      .children(".fa-chevron-down")
      .toggle();
  });

  $(".options .btn").on("click", function(e) {
    e.preventDefault();
    $(this)
      .addClass("active")
      .siblings(".btn")
      .removeClass("active");
  });

  $(".form-control").on("focus", function() {
    placeholderVal = $(this).prop("placeholder");
    $(this).prop("placeholder", "");
  });

  $(".form-control").on("blur", function() {
    $(this).prop("placeholder", placeholderVal);
  });

  $("footer").css(
    "top",
    $("header .left").height() + $(".results .wrap").height()
  );

  $(".results .wrap").css("top", $("header .left").height() - 190);

  $(".panel img").height($(window).height() * 0.65);

  $(window).resize(function() {
    $("footer").css(
      "top",
      $("header .left").height() + $(".results .wrap").height()
    );

    $(".results .wrap").css("top", $("header .left").height() - 190);

    $(".panel img").height($(window).height() * 0.65);
  });

  $("#ri").on("click", function() {
    $("footer").css(
      "top",
      $("header .left").height() + $(".results .wrap").height() + 700
    );

    $(".results .wrap").css("top", $("header .left").height() + 550);
  });

  $("#dow").on("click", function() {
    $("footer").css(
      "top",
      $("header .left").height() + $(".results .wrap").height() - 700
    );

    $(".results .wrap").css("top", $("header .left").height() - 850);
  });
});
