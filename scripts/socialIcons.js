setTimeout(function() {
  $(".social-icons li").each(function(i, el) {
    if (i === 0) {
      var speed = 800;
    } else {
      var speed = 800 * i;
    }
    $(el).animate({ opacity: 1  }, 2000, "linear");
    // $(el).css({ left: "-600px" }).animate({ left: "0px" }, speed, "linear");
  });
  $('.navbar-menu').animate({ "opacity": 1 }, 2000, "linear");
  $('.arrow').css({ "visibility": "visible",
  opacity: 0 }).animate({ "visibility": 'visible', opacity: 1 }, 2000, "linear");
}, 2000);
