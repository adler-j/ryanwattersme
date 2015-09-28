/**
 * Blockquote styling function that only runs on article pages/layouts (ie, including tutorial). This looks for a hyphen in block quotes, assumes the hyphen indicates quote attribution (requires one space on both sides of the hyphen), and then wraps the remaining text in cite.quote-attribution for additional styling. The text in the new span is preceded by a horizontal bar (aka "quotation dash" [&#x2015; in HTML]). This little script is a miniature, client-side extension of markdown's blockquote syntax.
 */
(function() {
  var tutorialLocTest = new RegExp(/tutorials/i),
    articleLocTest = new RegExp(/articles/i),
    currentLoc = window.location.href;
  if (articleLocTest.test(currentLoc) || tutorialLocTest.test(currentLoc)) {
    var blockQuotes = document.querySelectorAll('article blockquote > p');
    var hyphenTest = new RegExp(/\s\-\s/);
    for (var i = 0; i < blockQuotes.length; i++) {
      var bqContent = blockQuotes[i].textContent;
      if (hyphenTest.test(bqContent)) {
      	console.log(blockQuotes[i].innerHTML);
        var newQuoteContent = blockQuotes[i].innerHTML.split(' - ')[0];
        var newAuthorAttr = blockQuotes[i].innerHTML.split(' - ')[1];
        blockQuotes[i].innerHTML = newQuoteContent + '<cite class=\"quote-reference\"> &#x2015; ' + newAuthorAttr + '</cite>';
      }
    }
  }
})();
