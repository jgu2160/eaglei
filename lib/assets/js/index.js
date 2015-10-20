$(document).ready(function() {
  console.log($(".vimeo"));
  console.log($(".vimeo").colorbox());
  $(".vimeo").colorbox({iframe:true, innerWidth:640, innerHeight:390});
});
