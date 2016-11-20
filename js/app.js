/**
 * Created by mradul on 19/11/16.
 */

$(function(){

    //resize fill-screen to window's height
    $('.fill-screen').css('height',window.innerHeight);
    $(window).on("resize", function () {
        $('.fill-screen').css("height", window.innerHeight);
    });


    //add scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    })

    //smooth scrolling
    $('nav a, .down-button a').bind('click', function(){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //add parallax
    parallax = paraxify('.fill-screen')

    //initialize wow
    new WOW().init();
});