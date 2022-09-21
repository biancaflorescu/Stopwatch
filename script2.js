// stopwatch with minutes, seconds and hundredths seconds

const root = document.getElementById("root");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const hsecEl = document.getElementById("hsec");

let min = 0;
let sec = 0;
let hsec = 0;

const btnContainer = document.createElement("div");
btnContainer.className = "btn-container";

const playBtn = document.createElement("button");
playBtn.className = "btn";
playBtn.innerText = "Start";

let interval;

playBtn.addEventListener("click", () => {
  interval = setInterval(() => {
    hsec++;

    if (hsec < 10) {
      hsecEl.innerText = `0${hsec}`;
    } else if (hsec >= 10 && hsec < 100) {
      hsecEl.innerText = hsec;
    } else {
      sec++;
      hsec = 0;

      if (sec < 10) {
        secEl.innerText = `0${sec}`;
      } else if (sec >= 10 && sec < 60) {
        secEl.innerText = sec;
      } else {
        min++;
        sec = 0;
        hsec = 0;

        secEl.innerText = `0${sec}`;

        if (min < 10) {
          minEl.innerText = `0${min}`;
        } else if (min >= 10 && min < 60) {
          minEl.innerText = min;
        }
      }
    }

    console.log("hello");
  }, 10);
});

const stopBtn = document.createElement("button");
stopBtn.className = "btn";
stopBtn.innerText = "Stop";

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

const resetBtn = document.createElement("button");
resetBtn.className = "btn";
resetBtn.innerText = "Reset";

resetBtn.addEventListener("click", () => {
  min = 0;
  sec = 0;
  hsec = 0;
  minEl.innerText = "00";
  secEl.innerText = "00";
  hsecEl.innerText = "00";
  clearInterval(interval);
});

btnContainer.appendChild(playBtn);
btnContainer.appendChild(stopBtn);
btnContainer.appendChild(resetBtn);

root.appendChild(btnContainer);
