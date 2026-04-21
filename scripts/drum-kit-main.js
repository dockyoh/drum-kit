window.addEventListener("keydown", (event) => {
  const keyElement = document.querySelector(`.key[data-key="${event.key}"]`);
  const audioElement = document.querySelector(`audio[data-key="${event.key}"]`);

  playAudio(audioElement);
});

function playAudio(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}
