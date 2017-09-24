$(document).ready(function() {
  var terminal = $('#terminal-content')[0];
  var content = '<p>Hello World</p>';
  render(terminal, content, 0);
  content = '<p>My name is Shante</p><p>I am a front end developer</p>';
  render(terminal, content, 800);
  content = '<br><p>Are you here to check out my portfolio?</p><p>> Enter [yes] or [no]  :  <span class="cursor"></span></p>';
  render(terminal, content, 2000);

  setTimeout(function() {
    var cursor = $('.cursor')[0];
    content = 'y';
    render(cursor, content, 1000);
    content = 'e';
    render(cursor, content, 1200);
    content = 's';
    render(cursor, content, 1400);

    setTimeout(function() {
      content = '<br><p>Initializing awesomeness...</p>';
      render(terminal, content, 500);
    
      content = '<p>awesomeness complete!</p><br><p>Getting sick wubz...</p>';
      render(terminal, content, 1000);
      content = '<p>sick wubz complete!</p><br><p>Getting projects...</p>';
      render(terminal, content, 2000);
      content = '<p>projects complete!</p><br><p>Getting resume...</p>';
      render(terminal, content, 3000);
      content = '<br><p>Getting resume...</p>';
      render(terminal, content, 4000)
      content = '<br><p>SUCCESS</p>';
      render(terminal, content, 4000, true);
    },1300);
  },2000)
});

function render(targetElement, content, time, complete) {
  setTimeout(function() {
    targetElement.innerHTML += content;
    var height = $('#terminal-content')[0].scrollHeight;
    $('#terminal-content').scrollTop(height);
    if(complete) {
      $('.fade').hide(0).delay(100).fadeOut(500);
      setTimeout(function() {
        $('.terminal').addClass('hide');
        $('.hidden').removeClass('hidden')
        $('.fade').hide(0).delay(100).fadeIn(500);
        $('.columns').each(function(i, el) {
          $(el).hide(0).delay(500*i).fadeIn(800);
        });
      },500)
    }
  },time)
}