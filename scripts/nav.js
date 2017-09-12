var $menu = $("#nav-menu");
var toggle = $('#nav-toggle');

toggle.click(function () {
  $(this).toggleClass("is-active");
  $menu.toggleClass("is-active");
});