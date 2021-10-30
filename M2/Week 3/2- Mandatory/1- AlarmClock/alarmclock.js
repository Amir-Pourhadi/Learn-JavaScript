function setAlarm() {
  const counter = document.querySelector("#timeRemaining");
  const input = document.querySelector("#alarmSet");
  let seconds = +input.value;
  input.value = "";

  if (seconds > 59 || seconds < 1) {
    alert("seconds should be between 1 to 59!");
    return;
  }

  const timer = setInterval(() => {
    if (seconds === 0) {
      playAlarm();
      document.body.style.backgroundColor = "rgba(255,0,0,0.7)";
      clearInterval(timer);
    }
    counter.innerHTML = `00:${(seconds--).toString().padStart(2, "0")}`;
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  const input = document.querySelector("#alarmSet");
  const setBtn = document.getElementById("set");

  setBtn.addEventListener("click", setAlarm);

  input.addEventListener("input", () => {
    input.value ? setBtn.removeAttribute("disabled") : setBtn.setAttribute("disabled", true);
  });

  input.addEventListener("keypress", (e) => {
    e.keyCode === 13 && setAlarm();
  });

  document.getElementById("stop").addEventListener("click", pauseAlarm);
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.addEventListener("load", setup);
