function scrollNav() {
    var offTop;
    var winWidth = document.outerWidth;
    if (winWidth > 400) {
        offTop = 60;
    } else {
        offTop = 35;
    }
    $('.toc a').click(function() {
        //Toggle Class
        $(".active").removeClass("active");
        $(this).closest('li').addClass("active");
        var theClass = $(this).attr("class");
        $('.' + theClass).parent('li').addClass('active');
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - offTop
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
