$(document).ready(function() {
      var spnavi = $('#sp-navi-menu');
      spnavi.css('display','none');
      $('#sp-navi-btn').on('click', function() {
        spnavi.slideToggle(500);
      });
});

