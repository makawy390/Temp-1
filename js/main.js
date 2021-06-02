$(function (){
    'use strick'

    //Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winH - (upperH + navH));

    //Features Work 
    $('.feature-work ul li').on('click' , function () {
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).data('class'));
        if ($(this).data('class') === 'all') {
            $('.shaffle-images .col-sm').css('opacity' , 1);
        }
        else{
            $('.shaffle-images .col-sm').css('opacity' , 0.1);
            $($(this).data('class')).parent().css('opacity' , 1);

        }
    });
}); 
