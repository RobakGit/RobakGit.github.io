var vid = document.getElementById('video');
var btn = document.getElementById('play-btn');

function playVideo() {
    btn.style.display = 'none';
    vid.play();
}

document.getElementById("video").addEventListener('pause', () => {
    btn.style.display = 'block';
});