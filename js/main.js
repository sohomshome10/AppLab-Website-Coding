$(function(){
    // console.log('hello world');
    $('.hamburger').click(function(){
        $(this).toggleClass('navactive');
        $('.navbar ul').slideToggle();
    });
    $('.scroll').click(function(){
        var getelem = $(this).attr('href');
        var target = 120;
        if($(getelem).length) {
            var getoffset = $(getelem).offset().top;
            $('html').animate({
                scrollTop:getoffset - target
            },500);
        }
        return false;
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".headerwrapper").css("box-shadow", "0 2px 14px 2px #000");
        }else{
            $(".headerwrapper").css("box-shadow", "none");
        }
    })
    $('body').append('<a href="#home" class="top scroll"><i class="fas fa-chevron-up"></i></a>');

    
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
        }else{
             $('.top').fadeOut('slow');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });
});