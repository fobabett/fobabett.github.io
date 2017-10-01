$(document).ready(function() {
  $(window).scroll(function() {
    $(".project").each(function(i, el) {
      var bottomOfEl = $(this).position().top + $(this).outerHeight();
      var bottomOfWindow = $(window).scrollTop() + $(window).height();
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
  });
  // $(".fade").each(function(i, el) {
  //     var bottomOfEl = $(this).position().top + $(this).outerHeight();
  //     var bottomOfWindow = $(window).scrollTop() + $(window).height();
  //     if (bottomOfWindow > bottomOfEl) {
  //       $(this).removeClass('fade');
  //     }
  //   });
  // });
  $('.fa-arrow-down').click(function() {
    $('html,body').animate({ scrollTop: $("#projects").offset().top }, 500, 'swing');
  });
});
