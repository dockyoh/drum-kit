window.addEventListener("keydown", (event) => {
  const keyElement = document.querySelector(`.key[data-key="${event.key}"]`);
  const audioElement = document.querySelector(`audio[data-key="${event.key}"]`);
  console.log(audioElement);
  audioElement.play();
});
