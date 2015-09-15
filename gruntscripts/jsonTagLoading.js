document.addEventListener('DOMContentLoaded',checkHash(),false);
window.addEventListener('click', function(event) {
				event.preventDefault();
    if (event.target.classList.contains("tag-ajax")) {
        var clickedTag = event.target.id;
        getMatches(clickedTag);

    }
}, false);

function checkHash() {
    if (window.location.hash.length !== 0) {
        theTag = window.location.hash.split('#')[1];
        theTagText = theTag.replace('-',' ');
        console.log(theTagText);
        getMatches(theTag);
    }
}

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
                if (content[i].tag == tagId) {
                  matchingItems.innerHTML += '<li class=\"animated fadeInUp\"><a href=\"' + content[i].url + '\"><img src=\"/assets/images/' + content[i].image + '\"/><section><h5>' + content[i].title + '</h5><p>' + content[i].description + '</p></section></a></li>';
                }
            }
        }
    }
    request.send();
}

// if (content[i].articleTag == tagId) {
//     matchingItems.innerHTML += '<li class="json-tag-match animated fadeInUp"><a  style=\"background-image:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(/assets/images/' + content[i].articleImage + ')\" href=\"' + content[i].articleUrl + '\">' + '<section><h5>' + content[i].articleTitle + '</h5><p>' + content[i].articleDescription + '</p></section></li>';
// }
