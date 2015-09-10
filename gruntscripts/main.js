/**
 * All user interactions for the site are written in vanilla Javascript so as to preclude the jQuery dependency--although the Grunt build/concatenate will pull jquery through first, thereby allowing you to add additional scripts using jq syntax. If you decide to break the scripts up in the "gruntscripts" folder, be careful of adding the "async" attribute on your script tags, since this may have unreliable results if using jquery syntax before the jquery library has been loaded.
 */

window.addEventListener('keyup', keyToggles, false);
window.onload = init;

function init() {
    var mobileToggle = document.getElementById('mobile-toggle'),
        searchToggle = document.getElementById('search-overlay-toggle'),
        searchClose = document.getElementById('close-search'),
        searchInput = document.getElementById('search-form');
    mobileToggle.onclick = toggleMenu;
    searchToggle.onclick = toggleSearch;
    searchClose.onclick = closeSearch;
    searchInput.onsubmit = preventRefresh;
    targetBlank();
}
//toggle mobile menu/global navigation
function toggleMenu() {
    var globalNav = document.querySelector('.global-navigation'),
        menuButton = document.getElementById('mobile-toggle');
    globalNav.classList.toggle('mobile-menu');
    menuButton.classList.toggle('active');
}
//add "target=_blank" attribute to all external links on page
function targetBlank() {
    // remove subdomain of current site's url and setup regex
    var internal = location.host.replace("www.", "");
    internal = new RegExp(internal, "i");

    var a = document.getElementsByTagName('a'); // then, grab every link on the page
    for (var i = 0; i < a.length; i++) {
        var href = a[i].host; // set the host of each link
        if (!internal.test(href)) { // make sure the href doesn't contain current site's host
            a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
        }
    }
}
//Toggle search overlay on all screen sizes
function toggleSearch() {
    var searchForm = document.querySelector("#search-form"),
        searchInput = document.getElementById('tipue_search_input'),
        searchFooter = document.getElementById('footer');
    if (searchForm.classList.contains('search-open')) {
        searchForm.classList.remove('search-open');
        searchFooter.classList.remove('search-open');
    } else {
        searchForm.classList.add('search-open');
        searchFooter.classList.add('search-open');
        searchInput.focus();
        searchInput.style.outline = "none";
    }
}
//Close search overlay (specially used for the close icon in the upper-right corner when the search overlay is open)
function closeSearch() {
    var searchForm = document.querySelector("#search-form"),
        searchInput = document.getElementById('tipue_search_input'),
        searchFooter = document.getElementById('footer');
    if (searchForm.classList.contains('search-open')) {
        searchForm.classList.remove('search-open');
        searchFooter.classList.remove('search-open');
    }
}

//Prevents refreshing of page when the search item is entered into the tipue search input
function preventRefresh(enterTerm) {
    enterTerm.preventDefault();
}

function keyToggles(event) {
    var openSearchForm = document.getElementById('search-form'),
        openSearchInput = document.getElementById('tipue_search_input'),
        openSearchFooter = document.getElementById('footer');
    if (event.keyCode == 27 && openSearchForm.classList.contains('search-open')) {
        openSearchForm.classList.remove('search-open');
        openSearchFooter.classList.remove('search-open');
    } else if (event.keyCode == 83 && !(openSearchForm.classList.contains('search-open'))) {
        openSearchForm.classList.add('search-open');
        openSearchFooter.classList.add('search-open');
        openSearchInput.value = "";
        openSearchInput.focus();
    }
}



