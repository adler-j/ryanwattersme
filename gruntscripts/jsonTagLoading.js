var tagId = '';
$('.tag-ajax').on('click', function(event) {
    tagId = event.target.id;
    var request = new XMLHttpRequest;
    request.open('GET', '../assets/scripts/tags.json', true);
    request.onreadystatechange = function() {
        if ((request.status === 200) && (request.readyState === 4)) {
            var rawContent = JSON.parse(request.responseText),
                content = rawContent.siteContent,
                matchingItems = document.getElementById('matching-items');
            $('.matching-items > li').fadeOut();
            matchingItems.innerHTML = '';
            for (var i = 0; i < content.length; i++) {
                if (content[i].articleTag == tagId) {
                    matchingItems.innerHTML += '<li class="json-tag animated fadeInUp"><a href=\"' + content[i].articleUrl + '\">' + '<h5>' + content[i].articleTitle + '</h5>' + '<img class="tag-list" src=\"/assets/images/' + content[i].articleImage + '\"/></a><p>' + content[i].articleDescription + '</p></li>';
                }
            }
        }
    }
    request.send();
});


$(document).ready(function() {
    if (window.location.hash.length !== 0) {
        tagId = window.location.hash.split('#')[1];
        console.log(window.location.href + ' ' + tagId);
    }
});
