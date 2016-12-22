function playSound(e) {
    const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
    console.log(audio);
    if (!audio) { //stop function from running altogether
        return;
    }
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.toggle('playing');

}

window.addEventListener('keyup', function(e) {
    const key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
    key.classList.remove('playing');
});


window.addEventListener('keydown', playSound);
