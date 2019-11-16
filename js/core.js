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
        console.log(y);
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

    // const featuresSectionTop = $("#core-section").offset().top;
    // const diff = $("#browser").offset().top - featuresSectionTop;
    // let featuresSectionBottom = $("#core-section").offset().top + $("#core-section").height() - diff;
    // const tabsBottom = $("#tabs").offset().top + $("#tabs").height() ;
    // featuresSectionBottom += featuresSectionBottom - tabsBottom;
    // const browserHeight = 400;
    // $(window).scroll(function(){
    //     let curScrollVal = $(window).scrollTop();
    //     let curScrollValDown = curScrollVal + $(window).height();
    //     let browserBottom = $("#browser").offset().top + browserHeight;
    //     if( browserBottom < tabsBottom && curScrollVal >= featuresSectionTop  && curScrollValDown < featuresSectionBottom){
    //         $('#browser').css({'position': 'fixed', 'top': diff+'px', 'bottom':'auto'});
    //         $('.new-contact').first().fadeTo(200,0.3).mouseenter(function() {
    //             $(this).fadeTo(200,1);
    //         });
    //         $('.new-contact').first().mouseleave(function() {
    //             $(this).fadeTo(200,0.3);
    //         })
    //     }
    //     else if( curScrollVal < featuresSectionTop ){
    //         $('#browser').css({'position': 'absolute', 'top': 0, 'bottom': 'auto'});
    //         $('.new-contact').first().fadeTo(200,1);
    //     }
    //     else{
    //         $('#browser').css({'position': 'absolute', 'top': 'auto', 'bottom':'100px'});
    //         $('.new-contact').first().fadeTo(200,1);
    //     }

    // });
});