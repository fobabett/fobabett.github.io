$(document).ready(function() {
  $('html,body').animate({ "opacity": 1 }, 1000, "linear");
  $(window).scroll(function() {
    var bottomOfWindow = $(window).scrollTop() + $(window).height();
    $(".project").each(function(i, el) {
      var bottomOfEl = $(this).position().top + $(this).outerHeight();
      if (bottomOfWindow > bottomOfEl) {
        var scrambleEl = '.project .scramble';
        $(this).addClass('active')
        let counter = 0;
        if($(scrambleEl)[i]) {
          let phrases = [$(scrambleEl)[i].getAttribute('data-text')];
          const fx = new TextScramble($(scrambleEl)[i]);
          if(!$(scrambleEl)[i].className.includes('scrambled')) {
            $(scrambleEl)[i].className += ' scrambled';
            fx.setText(phrases[counter]);
          }
        }
      }
    });
    $(".hidden").each(function(i, el) {
      var bottomOfEl = $(el).position().top + $(el).outerHeight();
      if (bottomOfWindow > bottomOfEl) {
        $(el).animate({ opacity: 1 }, 1000);
      }
    });
    var bottomOfProjects = $('#projects').position().top + $('#projects').outerHeight();
  });
  $('.fa-arrow-down').click(function() {
    $('html,body').animate({ scrollTop: $("#projects").offset().top }, 500, 'swing');
  });
  $('#logo a').click(function() {
    $('html,body').animate({ scrollTop: $("#hero").offset().top }, 500, 'swing');
  });
});
