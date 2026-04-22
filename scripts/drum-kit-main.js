window.addEventListener("keydown", (event) => {
  if (event.repeat) return;

  const keyElement = document.querySelector(`.key[data-key="${event.key}"]`);
  const audioElement = document.querySelector(`audio[data-key="${event.key}"]`);

  playAudio(audioElement);
  renderStyle(keyElement);
});

function playAudio(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

function renderStyle(keyElement) {
  console.log(keyElement);
  keyElement.classList.add("playing");
}
