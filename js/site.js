$(window).load(function(){
  $("#list-img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display-img img").attr("src", img_src);
  });
});
