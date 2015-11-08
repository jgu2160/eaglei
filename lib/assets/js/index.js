$(document).ready(function() {
  $('a[href*="vimeo.com"]').each(function() {
    $this = $(this);
    var href = 'https://player.vimeo.com/video/' + $this.attr('href').split('/').pop() + '?autoplay=1';
    $this.attr('href',href);
    $this.colorbox({
      iframe:true,
      innerWidth:640,
      innerHeight:360
    });
  });
});
