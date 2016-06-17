// function scrollNav() {
//     var offTop;
//     var winWidth = document.outerWidth;
//     if (winWidth > 400) {
//         offTop = 60;
//     } else {
//         offTop = 35;
//     }
//     $('.toc a').click(function() {
//         //Toggle Class
//         $(".active").removeClass("active");
//         $(this).closest('li').addClass("active");
//         var theClass = $(this).attr("class");
//         $('.' + theClass).parent('li').addClass('active');
//         //Animate
//         $('html, body').stop().animate({
//             scrollTop: $($(this).attr('href')).offset().top - offTop
//         }, 400);
//         return false;
//     });
//     $('.scrollTop a').scrollTop();
// }
// REWRITING TO LEVERAGE VELOCITY.JS

$(document).ready(function () {
    // bind click event to all internal page anchors
    $('.toc a').on('click', function (e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr('href');
        // scroll to each target
        $(target).velocity('scroll', {
            duration: 500,
            offset: -40,
            easing: 'ease-in-out'
        });
    });
});
