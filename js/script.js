$(document).ready(function (){
    $('.header_burger').click(function (event){
        $('.header_menu,.header_burger').toggleClass('burger_active');
        $('body').toggleClass('no-scroll');
    })
});
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout: 5000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },

            1000:{
                items:4
            }
        }
    });
});