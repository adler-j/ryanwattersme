// $(function() {
//     if (history.pushState) {
//         var newHash = "",
//             $mainContent = $(".main"),
//             $pageWrap = $("#page-wrap"),
//             baseHeight = 0,
//             $el;
//         $pageWrap.height($pageWrap.height());
//         baseHeight = $pageWrap.height() - $mainContent.height();
//         $(".next-and-previous-links").delegate("a", "click", function() {
//             var _link = $(this).attr("href");
//             history.pushState(null, null, _link);
//             loadContent(_link);
//             return false;
//         });
//         function loadContent(href) {
//             $mainContent.fadeOut(200, function() {
//                 $mainContent.hide().load(href + " #main", function() {
//                     $mainContent.fadeIn(200, function() {
//                         $pageWrap.animate({
//                             height: baseHeight + $mainContent.height() + "px"
//                         });
//                     });
//                     console.log(href);
//                 });
//             });
//         }
//         $(window).bind('popstate', function() {
//             _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
//             loadContent(_link);
//         });
//     } // otherwise, history is not supported, so nothing fancy here.
// });
