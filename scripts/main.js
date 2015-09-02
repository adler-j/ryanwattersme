$('iframe').wrap('<section class="article-video"></section>');

$(document).ready(function() {
    //Add animate.css class to hero/header/site-intro
    $('.site-title-container').addClass('fadeIn');
    //mobile navigation toggling
    $('#mobile-toggle').on('click', function() {
        if (window.outerWidth < 641) {
            $('.global-navigation').toggleClass('mobile-menu');
            $('#mobile-toggle').toggleClass('active');
        }
    });
    //Add current year to copyright in footer
    var date = new Date();
    var thisYear = date.getFullYear();
    var yearSpan = document.querySelector('.this-year');
    yearSpan.innerHTML = thisYear;
});

$(window).scroll(function() {
    var headerHeight = $('.site-title-container').height(),
        scrollLength = $(window).scrollTop(),
        mobileToggle = $('#mobile-toggle'),
        globalNav = $('.global-navigation');
    if (scrollLength >= headerHeight && window.outerWidth > 640) {
        globalNav.addClass('sticky-nav');
    } else if (scrollLength < headerHeight && window.outerWidth > 640) {
        globalNav.removeClass('sticky-nav');
    }
});

//UNCOMME THE FOLLOWING to open up all external links in a new window
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

$("#close-search").on('click',function(){
    var searchForm = document.querySelector("#search-form");
    var searchInput = document.getElementById('tipue_search_input');
    if(searchForm.classList.contains('search-open')){
        searchForm.classList.remove('search-open');
    }
});

$(document).ready(function() {
    $(window).keyup(function(event) {
        var openSearchForm = document.getElementById('search-form'),
        openSearchInput = document.getElementById('tipue_search_input');
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }else if(event.keyCode == 27 && openSearchForm.classList.contains('search-open')){
            openSearchForm.classList.remove('search-open');
        }else if(event.keyCode == 83 && !(openSearchForm.classList.contains('search-open'))){
            openSearchForm.classList.add('search-open');
            openSearchInput.value = "";
            openSearchInput.focus();
        }
    });
});
