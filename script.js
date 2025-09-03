/* 
- Timer (15%): Develop a timer functionality that tracks the time since the start button 
was pressed. When the timer reaches 0, display an alert to take a break. Pressing the stop 
button resets the timer, which only starts again when the start button is clicked.

- Pause Button (15%): Implement functionality to pause the timer instead of resetting it. 
When the pause button is clicked, the text should switch to "Resume", and clicking it again 
should return to "Pause" while the timer continues running.
*/

var countDownDate, x;
var running = false;
var time = 25 * 60 * 1000;
var remainingTime = time;

function start() {
  if (running) return;
  running = true;

  countDownDate = new Date().getTime() + remainingTime;

  x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    if (distance <= 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "TIME'S UP!";
      running = false;
      return;
    }

    var minutes = Math.floor(distance / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    remainingTime = distance;

    if (distance <= 60 * 1000) {
      document.getElementById("timer").style.background = "rgb(168, 0, 0)";
      document.getElementById("timer").style.color = "white";
    }
  }, 1000);
}

function pause() {
  if (!running) {
    start();
    document.getElementById("pause").innerHTML = "Pause";
  } else {
    clearInterval(x);
    running = false;
    document.getElementById("pause").innerHTML = "Resume";
  }
}

function reset() {
  clearInterval(x);
  running = false;
  remainingTime = time; // Reset to 25 minutes
  document.getElementById("timer").innerHTML = "25:00";
  document.getElementById("pause").innerHTML = "Pause";
  document.getElementById("timer").style.background = "white";
  document.getElementById("timer").style.color = "black";
}
