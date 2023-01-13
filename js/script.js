$(document).ready(function (){
    $('.header_burger').click(function (event){
        $('.header_menu,.header_burger').toggleClass('burger_active');
        $('body').toggleClass('no-scroll');
    })
})