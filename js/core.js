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
});