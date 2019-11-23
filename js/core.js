$(function() {
    var btns = $('#accordion li a');
    var wrapper = $('#accordion li');
    $('div[id^="tabs-"]').fadeOut(0);
    $('#tabs-1').fadeIn(0);
    $(btns).not('.active').parent().find('.addon').removeClass('fadein').fadeOut(300);
    $(btns).on('click', function() {
        if($(this).hasClass('active'))
            return;
        $(btns).removeClass('active');
        $(btns).parent().find('.addon').removeClass('fadein').slideUp(300);
        $('div[id^="tabs-"]').fadeOut(300);
      
        $(this).addClass('active');
        $(this).parent().find('.addon').addClass('fadein').slideDown(300);
        $tab = $(this).attr("targetTab");
        $("#"+$tab).fadeIn(300);
    });


    if($(window).width()>1000){
        var navWrap = $('#tabs'),
            nav = $('#browser'),
            diff = 80,
            startPosition = nav.offset().top - diff,
            stopPosition = startPosition + navWrap.outerHeight() - 2 * nav.outerHeight() + diff;

        var contact = $("#new-contact");
        contact.mouseenter(function(){
            $(this).stop();
            $(this).fadeTo(100,1); 
        });

        contact.mouseleave(function(){
            var y = $(document).scrollTop();
            if(y > startPosition && y < stopPosition)
            {
                $(this).stop();
                $(this).fadeTo(200,0.3); 
            }
        });

        $(document).scroll(function () {
            //stick nav to top of page
            var y = $(this).scrollTop();

            if (y > startPosition) {
                nav.addClass('browser-fixed');
                if (y > stopPosition) {
                    nav.css('top', stopPosition - y + diff);
                   contact.stop().fadeTo(100,1); 
                } else {
                    nav.css('top', diff);
                    contact.stop().fadeTo(200,0.3)
                }
            } else {
                nav.removeClass('browser-fixed');
                nav.css('top', 0);
                contact.stop().fadeTo(100,1); 
            } 
        });
    }
});