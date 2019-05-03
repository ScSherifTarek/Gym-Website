$(function() {
    var btns = $('#accordion li a');
    var wrapper = $('#accordion li');
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
    const featuresSectionBottom = 1830;
//    const featuresSectionBottom =  featuresSectionTop + $("#tabs").height() -100;
    console.log(featuresSectionBottom);
    const browserTopOffset = $("#browser").offset().top;
    const diff = browserTopOffset - featuresSectionTop;
//    const endPos = featuresSectionBottom - $(window).height();
//    console.log(featuresSectionBottom)
    $(window).scroll(function(){
        var curScrollVal = $(window).scrollTop();
        console.log(curScrollVal+" "+featuresSectionBottom)
        if( curScrollVal >= featuresSectionTop && curScrollVal < featuresSectionBottom){
            $('#browser').css({'position': 'fixed', 'top': diff+'px', 'bottom':'auto'});
        }
        else if( curScrollVal > featuresSectionBottom ){
            $('#browser').css({'position': 'absolute', 'top': 'auto', 'bottom':0});
        }
        else if( curScrollVal < featuresSectionTop ){
            $('#browser').css({'position': 'absolute', 'top': 0, 'bottom': 'auto'});
        }

    });
});