// stopwatch only with seconds

const root = document.getElementById("root");

let sec = 0;
let timerStarted = false;

const timerContainer = document.createElement("div");
timerContainer.className = "timerContainer";

const seconds = document.createElement("p");
seconds.className = "seconds";
seconds.innerText = sec;

const playBtn = document.createElement("button");
playBtn.className = "btn";
playBtn.innerText = "Start/Stop";

playBtn.addEventListener("click", () => {
  timerStarted = !timerStarted;
  refreshDisplay();
});

const pauseBtn = document.createElement("button");
pauseBtn.className = "btn";
pauseBtn.innerText = "Pause";

pauseBtn.addEventListener("click", () => {
  timerStarted = false;
});

const resetBtn = document.createElement("button");
resetBtn.className = "btn";
resetBtn.innerText = "Reset";

resetBtn.addEventListener("click", () => {
  sec = 0;
  refreshDisplay();
});

timerContainer.appendChild(seconds);
timerContainer.appendChild(playBtn);
timerContainer.appendChild(pauseBtn);
timerContainer.appendChild(resetBtn);

root.appendChild(timerContainer);

const refreshDisplay = function () {
  seconds.innerText = sec;
};

setInterval(() => {
  if (timerStarted) {
    sec++;
    refreshDisplay();
  }
}, 1000);
