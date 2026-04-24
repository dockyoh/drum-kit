import { Play } from "./drum-kit.js";

window.addEventListener("keydown", (event) => {
  Play(event);
});

// function Play(event) {
//   if (event.repeat) return;

//   const keyElement = document.querySelector(`.key[data-key="${event.key}"]`);
//   const audioElement = document.querySelector(`audio[data-key="${event.key}"]`);

//   if (keyElement) {
//     playAudio(audioElement);
//     renderStyle(keyElement);
//   }
// }
