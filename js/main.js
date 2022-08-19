"use strict"
// Jquery
$(document).ready(function(){
  // snb
  $("#snb .main > li").hover(function(){
    $(this).find('.sub').stop().slideDown(300);
  },function(){
    $(this).find('.sub').stop().slideUp(300);
  });

  // slide
    $(".slide__box > div").hide();
    $(".slide__box > div:first").show();
  function slidemove(){
    $(".slide__box > div:first").fadeOut().next().fadeIn().end().appendTo(".slide__box");
  }
  setInterval(slidemove, 3000);

  // tab
  $(".notgall__con > div").hide();
  $(".notgall__con > div:first").show();
  $(".notgall__title a").click(function(){
    let num=$(this).index();
    $(".notgall__title a").removeClass('active');
    $(this).addClass('active');
    $(".notgall__con > div").hide();
    $(".notgall__con > div").eq(num).show();
  });

  // pop
  $("#pop").hide();
  $("#notice ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });
});