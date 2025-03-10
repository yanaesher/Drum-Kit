const drumKit = document.getElementById("drum-kit");
const drumPads = drumKit.querySelectorAll(".drum-kit__pad");
drumKit.focus();
isWebp();

function playPads(e) {
  const key = e.code;
  const audio = document.querySelector(`audio[data-key ="${key}"]`);
  const pad = document.querySelector(`button[data-key ="${key}"]`);
  if (!audio) return 0;
  if (!pad.classList.contains("playing")) {
    audio.currentTime = 0;
    audio.play();
    pad.classList.add("playing");
  }
}

function removeTransition(e) {
  if (e.propertyName != "transform") return 0;
  this.classList.remove("playing");
}

function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    let className = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(className);
  });
}

drumPads.forEach((pad) =>
  pad.addEventListener("transitionend", removeTransition)
);

drumKit.addEventListener("keydown", playPads);
