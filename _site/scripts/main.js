window.onload = init;
function init () {
    var mobileToggle = document.getElementById('mobile-toggle');
    mobileToggle.onclick = toggleMenu;
}
//toggle mobile menu/global navigation
function toggleMenu () {
    var globalNav = document.querySelector('.global-navigation'),
    menuButton = document.getElementById('mobile-toggle');
    globalNav.classList.toggle('mobile-menu');
    menuButton.classList.toggle('active');
}

$(document).ready(function() {
    //Add current year to copyright in footer
    var date = new Date();
    var thisYear = date.getFullYear();
    var yearSpan = document.querySelector('.this-year');
    yearSpan.innerHTML = thisYear;
});
//UNCOMMENT THE FOLLOWING to open up all external links in a new window
$('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if (!a.test(this.href)) {
        $(this).attr('target', '_blank');
    }
});
$("#search-overlay-toggle").on("click", function() {
    var searchForm = document.querySelector("#search-form");
    var searchInput = document.getElementById('tipue_search_input');
    if (searchForm.classList.contains('search-open')) {
        searchForm.classList.remove('search-open');

    } else {
        searchForm.classList.add('search-open');
        searchInput.focus();
    }
});
$("#close-search").on('click', function() {
    var searchForm = document.querySelector("#search-form");
    var searchInput = document.getElementById('tipue_search_input');
    if (searchForm.classList.contains('search-open')) {
        searchForm.classList.remove('search-open');
    }
});
$(document).ready(function() {
    $(window).keyup(function(event) {
        var openSearchForm = document.getElementById('search-form'),
            openSearchInput = document.getElementById('tipue_search_input');
        if (event.keyCode == 27 && openSearchForm.classList.contains('search-open')) {
            openSearchForm.classList.remove('search-open');
        } else if (event.keyCode == 83 && !(openSearchForm.classList.contains('search-open'))) {
            openSearchForm.classList.add('search-open');
            openSearchInput.value = "";
            openSearchInput.focus();
        }
    });
    $('#search-form').submit(function(event){
        event.preventDefault();
    });
});