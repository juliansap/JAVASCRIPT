$(document).ready(function(){
  $(".weird").click(function(){
    var div = $(".auto");
    div.animate({left: '800px'}, "slow");
  });
});

$(document).ready(function(){
  $(".weird").click(function(){
    var div = $(".wiel");
    div.animate({left: '0px'}, "slow");
    div.addClass('draai');
  });
});

$(document).ready(function(){
  $(".goed").click(function(){
    var div = $(".auto");
    div.animate({left: '800px'}, "slow");
  });
});

$(document).ready(function(){
  $(".goed").click(function(){
    var div = $(".wiel");
    div.animate({left: '0px'}, "slow");
    var div = $(".wiel1");
    var div2 = $(".wiel2");
    div.addClass('draai');
    div2.addClass('draai');
  });
});
