setTimeout(function() {
  $('.social-icons li').each(function(i, el) {
    $(el).css({left:"-600px"}) .animate({"left": "0px"}, 200*i, "linear");
  });
},2000);