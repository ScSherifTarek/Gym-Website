// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]').not('[href^="#tab"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });

$(window).ready(function() {
    // Video effect
    $(".js-modal-btn").modalVideo({channel:'youtube'});

    // Clients Carousel
    $(function(){
      $('#clients #clients-carousel').slick({
        dots: true,
        // arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 15000,
        lazyLoad: 'ondemand'
      });
    });
});