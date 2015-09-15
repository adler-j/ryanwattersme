// var tagId = '';
// $('.tag-ajax').on('click', function(event) {
//     tagId = event.target.id;
//     var request = new XMLHttpRequest;
//     request.open('GET', '../assets/scripts/tags.json', true);
//     request.onreadystatechange = function() {
//         if ((request.status === 200) && (request.readyState === 4)) {
//             var rawContent = JSON.parse(request.responseText),
//                 content = rawContent.siteContent,
//                 matchingItems = document.getElementById('matching-items');
//             $('.matching-items > li').fadeOut();
//             matchingItems.innerHTML = '';
//             for (var i = 0; i < content.length; i++) {
//                 if (content[i].articleTag == tagId) {
//                     matchingItems.innerHTML += '<li class="json-tag-match animated fadeInUp"><a href=\"' + content[i].articleUrl + '\">' + '<section style=\"background-image:url(/assets/images/' + content[i].articleImage + ')\"><h5>' + content[i].articleTitle + '</h5><p>' + content[i].articleDescription + '</p></section></li>';
//                 }
//             }
//         }
//     }
//     request.send();
// });


$(document).ready(function() {
    if (window.location.hash.length !== 0) {
        theTag = window.location.hash.split('#')[1];
        getMatches(theTag);
    }
});

$('.tag-ajax').on('click', function(event) {
    var clickedTag = event.target.id;
    getMatches(clickedTag);
});

function getMatches(el) {
    var tagId = el;
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
                    matchingItems.innerHTML += '<li class="json-tag-match animated fadeInUp"><a  style=\"background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/assets/images/' + content[i].articleImage + ')\" href=\"' + content[i].articleUrl + '\">' + '<section><h5>' + content[i].articleTitle + '</h5><p>' + content[i].articleDescription + '</p></section></li>';
                }
            }
        }
    }
    request.send();

}
