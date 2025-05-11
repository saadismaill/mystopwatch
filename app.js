let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

startBtn.addEventListener("click", function () {
  timer = true;
  stopwatch();
});

stopBtn.addEventListener("click", function () {
  timer = false;
});

resetBtn.addEventListener("click", function () {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("hr").innerText = " 00";
  document.getElementById("min").innerText = " 00";
  document.getElementById("sec").innerText = " 00";
  document.getElementById("count").innerText = " 00";
});

function stopwatch() {
  if (timer) {
    count++;

    if (count == 100) {
      sec++;
      count = 0;
    }

    if (sec == 60) {
      min++;
      sec = 0;
    }

    if (min == 60) {
      hr++;
      min = 0;
      sec = 0;
    }

    let hrStr = hr < 10 ? " 0" + hr : " " + hr;
    let minStr = min < 10 ? " 0" + min : " " + min;
    let secStr = sec < 10 ? " 0" + sec : " " + sec;
    let countStr = count < 10 ? " 0" + count : " " + count;

    document.getElementById("hr").innerText = hrStr;
    document.getElementById("min").innerText = minStr;
    document.getElementById("sec").innerText = secStr;
    document.getElementById("count").innerText = countStr;

    setTimeout(stopwatch, 10); // Run every 10ms (centisecond)
  }
}

let lapBtn = document.getElementById("lap");
let lapList = document.getElementById("lapList");

lapBtn.addEventListener("click", function () {
  if (!timer) return;

  const lapTime = `${hr < 10 ? "0" + hr : hr} : ${
    min < 10 ? "0" + min : min
  } : ${sec < 10 ? "0" + sec : sec} : ${count < 10 ? "0" + count : count}`;
  const lapItem = document.createElement("li");
  lapItem.innerText = "Lap: " + lapTime;
  lapList.appendChild(lapItem);
});
