export function playAudio(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

export function renderStyle(keyElement) {
  keyElement.classList.add("playing");
  setTimeout(() => {
    keyElement.classList.remove("playing");
  }, 75);
}
