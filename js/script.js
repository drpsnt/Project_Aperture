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
$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 500
        },
        hide: {
            effect: "blind",
            duration: 300
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );

(function($) { "use strict";

    //Page cursors


    //Navigation

    var app = function () {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;
        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');
            applyListeners();
        };
        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            });
        };
        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
        };
        init();
    }();


    //Switch light/dark

    $("#switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $("#switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);