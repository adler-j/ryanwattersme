$(document).ready(function() {
    //Add animate.css class to hero/header/site-intro
    $('.site-title-container').addClass('fadeIn');
    //mobile navigation toggling
    $('#mobile-toggle').on('click', function() {
        if (window.outerWidth < 641) {
            $('.global-navigation').toggleClass('mobile-menu');
            $('#mobile-toggle').toggleClass('active');
        }
    });
    //Add current year to copyright in footer
    var date = new Date();
    var thisYear = date.getFullYear();
    var yearSpan = document.querySelector('.this-year');
    yearSpan.innerHTML = thisYear;
});

$(window).scroll(function() {
    var headerHeight = $('.site-title-container').height(),
        scrollLength = $(window).scrollTop(),
        mobileToggle = $('#mobile-toggle'),
        globalNav = $('.global-navigation');
    if (scrollLength >= headerHeight && window.outerWidth > 640) {
        globalNav.addClass('sticky-nav');
    } else if (scrollLength < headerHeight && window.outerWidth > 640) {
        globalNav.removeClass('sticky-nav');
    }
});
