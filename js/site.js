$(window).load(function(){
  $("#list-img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display-img img").attr("src", img_src);
  });
});

$(window).load(function(){
  var topBtn=$('#page-top');
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });

});
