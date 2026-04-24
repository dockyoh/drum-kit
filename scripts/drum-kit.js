export function playAudio(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

export function renderStyle(keyElement) {
  keyElement.classList.add("playing");
  keyElement.addEventListener("transitionend", (event) => {
    keyElement.classList.remove("playing");
  });
}
