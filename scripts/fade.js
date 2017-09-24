$(document).ready(function() {
  $(".fade").hide(0).delay(100).fadeIn(500);
  $(".columns").each(function(i, el) {
    $(el).hide(0).delay(500 * i).fadeIn(800);
  });

  $(window).scroll(function() {
    $(".hidden").each(function(i, el) {
      var bottomOfEl = $(this).position().top + $(this).outerHeight();
      var bottomOfWindow = $(window).scrollTop() + $(window).height();
      if (bottomOfWindow > bottomOfEl) {
        $(this).animate({ opacity: "1" }, 500);
      }
    });
  });
});
