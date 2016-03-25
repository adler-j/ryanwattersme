// var clickOrTouchStart;
// if ('ontouchstart' in document.documentElement) {
//     clickOrTouchStart = "touchstart";
// } else {
//     clickOrTouchStart = "click";
// }
// var headerToggle = document.getElementById('site-header-toggle');
// var headerCancel = document.getElementById('close-menu');
// var mainContent = document.querySelector('main');
// mainContent.addEventListener(clickOrTouchStart, toggleHeader, false);
// headerToggle.addEventListener(clickOrTouchStart, toggleHeader, false);
// headerCancel.onclick = function(event) {
//     event.preventDefault();
//     document.querySelector('body > header').classList.remove('open');
//     document.querySelector('main').classList.remove('open');
//     document.querySelector('body > footer').classList.remove('open');
// }


// function toggleHeader(event) {
//     var header = document.querySelector('body > header');
//     var mainContent = document.querySelector('main');
//     if (header.classList.contains('open')) {
//         event.preventDefault();
//         document.querySelector('body > header').classList.remove('open');
//         document.querySelector('main').classList.remove('open');
//         document.querySelector('body > footer').classList.remove('open');
//     } else if ((event.target.id === "site-header-toggle") && !(header.classList.contains('open'))) {
//         event.preventDefault();
//         document.querySelector('body > header').classList.add('open');
//         document.querySelector('main').classList.add('open');
//         document.querySelector('body > footer').classList.add('open');
//     }

// }