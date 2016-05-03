var shareButton = document.getElementById('share-button');
if (shareButton) {
    shareButton.onclick = toggleShare;
}

function toggleShare(event) {
    event.preventDefault();
    document.querySelector('.share-menu').classList.toggle('share-open');
    document.getElementById('share-button').classList.toggle('share-open');
}


