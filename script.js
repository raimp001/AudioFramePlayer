function playAudio() {
    const audio = document.getElementById('udioPlayer');
    audio.play();
}

function pauseAudio() {
    const audio = document.getElementById('udioPlayer');
    audio.pause();
}

function volumeUp() {
    const audio = document.getElementById('udioPlayer');
    if (audio.volume < 1) audio.volume += 0.1;
}

function volumeDown() {
    const audio = document.getElementById('udioPlayer');
    if (audio.volume > 0) audio.volume -= 0.1;
}
