var shareButton = document.getElementById('share-button');
shareButton.onclick = toggleShare;

function toggleShare(event) {
	event.preventDefault();
	document.querySelector('.share-menu').classList.toggle('share-open');
	document.getElementById('share-button').classList.toggle('share-open');
}