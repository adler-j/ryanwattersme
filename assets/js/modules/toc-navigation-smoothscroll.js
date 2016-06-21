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
            offset: -60,
            easing: 'ease-in-out'
        });
    });
});
