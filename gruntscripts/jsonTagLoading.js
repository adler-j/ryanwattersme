document.addEventListener('DOMContentLoaded', checkHash(), false);
window.addEventListener('click', function(event) {
  if (event.target.className == "tag-ajax") {
    setTimeout(function() {
      window.scrollTo(0, 0);
    }, 1);
    var theTag = event.target.id;
    var tagString = event.target.dataset.tagstring;
    getMatches(theTag, tagString);
  }
}, false);

window.onpopstate = function(event) {
  console.log(currentHash);
  if (currentHash.length > 0) {
    checkHash();
  }
  currentHash = window.location.hash;
  console.log('And now the hash equals ' + currentHash);
};


function checkHash() {
  if (window.location.hash.length !== 0) {
    var theTag = window.location.hash.split('#')[1];
    var theTagList = document.getElementsByTagName('a');
    for (var i = 0; i < theTagList.length; i++) {
      if (theTagList[i].dataset.tagstring === theTag) {
        var theString = theTagList[i].dataset.tagstring;
      }

    }
    getMatches(theTag, theString);
  }
}

function getMatches(thetag, thestring) {
  var tagId = thetag,
    idString = thestring,
    theIdSpan = document.getElementById('selected-tag'),
    request = new XMLHttpRequest;
  theIdSpan.innerHTML = '- ' + idString;
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