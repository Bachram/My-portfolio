$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop()) {
            $('nav').addClass('stickytop');
        }
        else{
            $('nav').removeClass('stickytop');
        }
    });
});