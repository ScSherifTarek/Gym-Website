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

    const featuresSectionTop = $("#core-section").offset().top;
    const diff = $("#browser").offset().top - featuresSectionTop;
    let featuresSectionBottom = $("#core-section").offset().top + $("#core-section").height() - diff;
    const tabsBottom = $("#tabs").offset().top + $("#tabs").height() ;
    featuresSectionBottom += featuresSectionBottom - tabsBottom;
    const browserHeight = 400;
    $(window).scroll(function(){
        let curScrollVal = $(window).scrollTop();
        let curScrollValDown = curScrollVal + $(window).height();
        let browserBottom = $("#browser").offset().top + browserHeight;
        if( browserBottom < tabsBottom && curScrollVal >= featuresSectionTop  && curScrollValDown < featuresSectionBottom){
            $('#browser').css({'position': 'fixed', 'top': diff+'px', 'bottom':'auto'});
        }
        else if( curScrollVal < featuresSectionTop ){
            $('#browser').css({'position': 'absolute', 'top': 0, 'bottom': 'auto'});
        }
        else{
            $('#browser').css({'position': 'absolute', 'top': 'auto', 'bottom':'100px'});
        }

    });
});