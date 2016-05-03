var headerToggle = document.getElementById('site-header-toggle');
var headerCancel = document.getElementById('close-menu');
var mainContent = document.querySelector('main');
mainContent.addEventListener('click', toggleHeader, false);
headerToggle.addEventListener('click', toggleHeader, false);
headerCancel.addEventListener('click', closeHeader, false);

function closeHeader(event) {
    event.preventDefault();
    document.querySelector('body > header').classList.remove('open');
    document.querySelector('main').classList.remove('open');
    document.querySelector('body > footer').classList.remove('open');
    document.querySelector('.site-logo.overlay.animatedSlow').classList.remove('fadeInSlow');
    document.querySelector('.top-bar').classList.remove('open');
}

function toggleHeader(event) {
    var header = document.querySelector('header.site-header');
    var mainContent = document.querySelector('main');
    var siteLogoInOverlay = document.querySelector('.site-logo.overlay.animatedSlow');
    var siteFooter = document.querySelector('footer.site-footer');
    var topBar = document.querySelector('.top-bar');
    if (header.classList.contains('open')) {
        event.preventDefault();
        header.classList.remove('open');
        mainContent.classList.remove('open');
        siteFooter.classList.remove('open');
        siteLogoInOverlay.classList.remove('fadeInSlow');
        topBar.classList.remove('open');
    } else if ((event.target.id === "site-header-toggle") && !(header.classList.contains('open'))) {
        event.preventDefault();
        header.classList.add('open');
        mainContent.classList.add('open');
        siteFooter.classList.add('open');
        siteLogoInOverlay.classList.add('fadeInSlow');
        topBar.classList.add('open');
    }

}