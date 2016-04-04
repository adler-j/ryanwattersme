$('.video-thumbnail').click(function() {
    var iframe = document.createElement('iframe');
    var theService = $(this).parent().attr('data-streaming');
    var theVideoId = $(this).parent().attr('data-videoid');
    console.log(theVideoId);
    if (theService == "youtube") {
        iframe.setAttribute('src', '//www.youtube.com/embed/' + theVideoId + '?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0&rel=0');
    } else if (theService == "vimeo") {
        iframe.setAttribute('src', '//player.vimeo.com/video/' + theVideoId + '?autoplay=1&title=0&byline=0&portrait=0');
    } else {
        console.log("If you are getting this error in the console, it is probably a sign that the youtube or vimeo api with embedly has changed, especially if the issue is that you are not getting the correct \"videoid\" being written to the page.");
    }
    //The parameters for the video embed are set to show video controls but disallow related information at the video's end.
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('class', 'video-iframe');
    $(this).replaceWith(iframe);
});
