setTimeout(function() {
  $(".social-icons li").each(function(i, el) {
    if (i === 0) {
      var speed = 500;
    } else {
      var speed = 200 * i;
    }
    $(el).css({ left: "-600px" }).animate({ left: "0px" }, speed, "linear");
  });
  $('.navbar-menu').animate({ "opacity": 1 }, "slow", "linear");
  $('.fa.fa-arrow-down').css({ "visibility": "visible" }).animate({ "visibility": 'visible' }, "slow", "linear");
}, 2000);
