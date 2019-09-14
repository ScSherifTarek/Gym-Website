$isOpened = false;
$(document).ready(function() {
    $('.sec-img-container').click(function() {
        if($isOpened) {
            
            $(this).css({
                "width":"14.64vw",
                "top":"auto",
                "left":"auto",
                "right":"2.93vw",
                "bottom":"2.19vw",
                "padding":"0.146vw" 
            });
            $isOpened = false; 
            $(".sec-img-container").css("animation-name", "bounce");
        }
        else
        {
            $(this).css({
            "width":"auto",
            "top":"0",
            "left":"0",
            "right":"0",
            "bottom":"0",
            "padding":"2.93vw 7.32vw" 
            });
            $isOpened = true; 
            $(".sec-img-container").css("animation-name", "non");
        }
    });    




});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
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
          scrollTop: target.offset().top - 220
        }, 1000);
      }
    }
  });

$("body").css({"padding-top": $("#header").height() });



// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector('.menuIcon');
//$nav = $('.options.active');

menuIcon.addEventListener('click', () => {
    respMenufun();
});
$("div.options.active a").click(function() {
    respMenufun();
    respIconfun();
});
$resOpened = false;
function respMenufun()
{
    if (!$resOpened) {
        $('.options.active').fadeIn(500);
        $('.options.active').css('transform','translateX(0)');
        $resOpened = true;
    } else { 
        $('.options.active').css('transform','translateX(-100%)');
        $('.options.active').hide();
        $resOpened = false;
    }
}
// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

function respIconfun()
{
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
}
toggleIcon.addEventListener('click', () => {
    respIconfun();
});

/* End Navbar */


$hasBeenTrigged = 0;
$(document).ready(function(){
    $(window).scroll(function(){
        navChange();
    });
});
function navChange()
{
    if($(window).scrollTop() < $('#section2').position().top - $("#header").height() - 80 && $(window).scrollTop() >= $('#section1').position().top - $("#header").height() - 80 && $hasBeenTrigged != 0)
    {
        $('.options').eq($hasBeenTrigged).hide();
        $('.sec-link').eq($hasBeenTrigged).removeClass('active');
        $('.options').eq($hasBeenTrigged).removeClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).removeClass('active');
        $hasBeenTrigged = 0;
        $('.sec-link').eq($hasBeenTrigged).addClass('active');
        $('.options').eq($hasBeenTrigged).addClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).addClass('active');
        
        if($resOpened || $(window).width() > 1000)
        {
            $('.options').eq($hasBeenTrigged).fadeIn(500);
            $('.options').eq($hasBeenTrigged).css('transform','translateX(0)');
        }
            

    }
    else if($(window).scrollTop() < $('#section3').position().top - $("#header").height() - 80 &&  $(window).scrollTop() >= $('#section2').position().top - $("#header").height() - 80 && $hasBeenTrigged != 1)
    {
        $('.options').eq($hasBeenTrigged).hide();
        $('.sec-link').eq($hasBeenTrigged).removeClass('active');
        $('.options').eq($hasBeenTrigged).removeClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).removeClass('active');
        $hasBeenTrigged = 1;    
        $('.sec-link').eq($hasBeenTrigged).addClass('active');
        $('.options').eq($hasBeenTrigged).addClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).addClass('active');
        if($resOpened || $(window).width() > 1000)
        {
            $('.options').eq($hasBeenTrigged).fadeIn(500);
            $('.options').eq($hasBeenTrigged).css('transform','translateX(0)');
        }
    }
    else if($(window).scrollTop() < $('#section4').position().top - $("#header").height() - 80 &&  $(window).scrollTop() >= $('#section3').position().top - $("#header").height() - 80 && $hasBeenTrigged != 2)
    {
        $('.options').eq($hasBeenTrigged).hide();
        $('.sec-link').eq($hasBeenTrigged).removeClass('active');
        $('.options').eq($hasBeenTrigged).removeClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).removeClass('active');
        $hasBeenTrigged = 2;    
        $('.sec-link').eq($hasBeenTrigged).addClass('active');
        $('.options').eq($hasBeenTrigged).addClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).addClass('active');
        if($resOpened || $(window).width() > 1000)
        {
            $('.options').eq($hasBeenTrigged).fadeIn(500);
            $('.options').eq($hasBeenTrigged).css('transform','translateX(0)');
        }
    }
    else if($(window).scrollTop() < $('#section5').position().top - $("#header").height() - 80 &&  $(window).scrollTop() >= $('#section4').position().top - $("#header").height() - 80 && $hasBeenTrigged != 3)
    {
        $('.options').eq($hasBeenTrigged).hide();
        $('.sec-link').eq($hasBeenTrigged).removeClass('active');
        $('.options').eq($hasBeenTrigged).removeClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).removeClass('active');
        $hasBeenTrigged = 3;    
        $('.sec-link').eq($hasBeenTrigged).addClass('active');
        $('.options').eq($hasBeenTrigged).addClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).addClass('active');
        if($resOpened || $(window).width() > 1000)
        {
            $('.options').eq($hasBeenTrigged).fadeIn(500);
            $('.options').eq($hasBeenTrigged).css('transform','translateX(0)');
        }
    }
    else if($(window).scrollTop() < $('#section6').position().top - $("#header").height() - 80 &&  $(window).scrollTop() >= $('#section5').position().top - $("#header").height() - 80 && $hasBeenTrigged != 4)
    {
        $('.options').eq($hasBeenTrigged).hide();
        $('.sec-link').eq($hasBeenTrigged).removeClass('active');
        $('.options').eq($hasBeenTrigged).removeClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).removeClass('active');
        $hasBeenTrigged = 4;    
        $('.sec-link').eq($hasBeenTrigged).addClass('active');
        $('.options').eq($hasBeenTrigged).addClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).addClass('active');
        if($resOpened || $(window).width() > 1000)
        {
            $('.options').eq($hasBeenTrigged).fadeIn(500);
            $('.options').eq($hasBeenTrigged).css('transform','translateX(0)');
        }
    }
    else if($(window).scrollTop() < $('#section7').position().top - $("#header").height() - 80 &&  $(window).scrollTop() >= $('#section6').position().top - $("#header").height() - 80 && $hasBeenTrigged != 5)
    {
        $('.options').eq($hasBeenTrigged).hide();
        $('.sec-link').eq($hasBeenTrigged).removeClass('active');
        $('.options').eq($hasBeenTrigged).removeClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).removeClass('active');
        $hasBeenTrigged = 5;    
        $('.sec-link').eq($hasBeenTrigged).addClass('active');
        $('.options').eq($hasBeenTrigged).addClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).addClass('active');
        if($resOpened || $(window).width() > 1000)
        {
            $('.options').eq($hasBeenTrigged).fadeIn(500);
            $('.options').eq($hasBeenTrigged).css('transform','translateX(0)');
        }
    }
    else if( $(window).scrollTop() >= $('#section7').position().top - $("#header").height() - 80 && $hasBeenTrigged != 6)
    {
        $('.options').eq($hasBeenTrigged).hide();
        $('.sec-link').eq($hasBeenTrigged).removeClass('active');
        $('.options').eq($hasBeenTrigged).removeClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).removeClass('active');
        $hasBeenTrigged = 6;    
        $('.sec-link').eq($hasBeenTrigged).addClass('active');
        $('.options').eq($hasBeenTrigged).addClass('active');
        $('.sec-img-container').eq($hasBeenTrigged).addClass('active');
        if($resOpened || $(window).width() > 1000)
        {
            $('.options').eq($hasBeenTrigged).fadeIn(500);
            $('.options').eq($hasBeenTrigged).css('transform','translateX(0)');
        }
    }
}
function goToby($i)
{
    $i += $hasBeenTrigged;
    if($i > 6)
        $i = 0;
    else if($i < 0 )
        $i = 6;
    $('html, body').animate({
          scrollTop: $('.section').eq($i).position().top - $("#header").height() - 40
        }, 1000);
    navChange();
}

$(window).on('resize', function(){
   if($(window).width() > 1000)
   {
       $('.options.active').fadeIn(500);
       $('.options.active').css('transform','translateX(0)');
       respIconfun();
   }
});


$(document).ready(function() {
    navChange();
});





/* icons inputs */

$('input[name="icon"]').focus(function() {
    $(this).attr("value","fa fa-");
});
