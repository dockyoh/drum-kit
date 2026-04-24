function playAudio(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

function renderStyle(keyElement) {
  keyElement.classList.add("playing");
  keyElement.addEventListener("transitionend", (event) => {
    keyElement.classList.remove("playing");
  });
}

export function Play(event) {
  if (event.repeat) return;

  const keyElement = document.querySelector(`.key[data-key="${event.key}"]`);
  const audioElement = document.querySelector(`audio[data-key="${event.key}"]`);

  if (keyElement) {
    playAudio(audioElement);
    renderStyle(keyElement);
  }
}
