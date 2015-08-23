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
    console.log(thisYear);
});
