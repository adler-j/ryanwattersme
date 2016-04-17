var shareButton = document.getElementById('share-button');
if (shareButton) {
    shareButton.onclick = toggleShare;
}

function toggleShare(event) {
    event.preventDefault();
    document.querySelector('.share-menu').classList.toggle('share-open');
    document.getElementById('share-button').classList.toggle('share-open');
}

var catToggle = document.querySelector('#categories-toggle');
catToggle.onclick = showCategories;

function showCategories() {
	document.querySelector('.blog-categories').classList.toggle('show-categories');
	document.getElementById('categories-toggle').classList.toggle('categories-open');
}
