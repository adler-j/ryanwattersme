$('.video-thumbnail').click(function() {
    var iframe = document.createElement('iframe');
    //assign theService to the provider added, but set to lower case to control for youtube, YouTube, etc.
    var theService = $(this).parent().attr('data-streaming').toLowerCase();
    var theVideoId = $(this).parent().attr('data-videoid');
    if (theService == "youtube") {
        iframe.setAttribute('src', '//www.youtube.com/embed/' + theVideoId + '?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0&rel=0');
    } else if (theService == "vimeo") {
        iframe.setAttribute('src', '//player.vimeo.com/video/' + theVideoId + '?autoplay=1&title=0&byline=0&portrait=0');
    } else {
        console.log("If you are getting this error in the console, it is probably a sign that the youtube or vimeo api has changed.");
    }
    //The parameters for the video embed are set to show video controls but disallow related information at the video's end.
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('class', 'video-iframe');
    $(this).replaceWith(iframe);
});
var vimObject = {};
var getVimeoThumbnail = function(id,vidDiv) {
    var imgUrl = "";
    $.ajax({
        type:'GET',
        url: '//vimeo.com/api/v2/video/' + id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data){
            imgUrl = data[0].thumbnail_large;
            vidDiv.style.backgroundImage = "url(" + imgUrl + ")";
        }
    });
};

var allThumbs = document.querySelectorAll('.video-thumbnail');
if (allThumbs.length > 0) {
    for (var i = 0; i < allThumbs.length; i++) {
        if(allThumbs[i].dataset.isVimeo === "true"){
            var vidId = allThumbs[i].dataset.videoid;
            getVimeoThumbnail(vidId,allThumbs[i]);
        }
    }
}
