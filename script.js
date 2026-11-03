// ============================================
//  Unit 8.8 – The Date Object
// ============================================
//  Complete each section below by following
//  the STEP comments.
//  IMPORTANT: Use addEventListener() for the button.
//  Do NOT add onclick in the HTML.
// ============================================

// ============================================
//  WARM-UP: Day Name
// ============================================
// Display today's day name (e.g., "Monday") in the
// element with ID "warmUpDate".

let now = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = days[now.getDay()];
document.getElementById("warmUpDate").innerHTML = dayName;

// ============================================
//  PART 1: Current Date Display
// ============================================
// Display the current date in the format: M/D/YYYY
// in the element with ID "myDate".
// Example: "4/2/2025" (no leading zeros)

let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();
document.getElementById("myDate").innerHTML = month + "/" + day + "/" + year;

// ============================================
//  PART 2: Elapsed Timer
// ============================================
// Build a timer that counts up from 0, updating every ~10ms.
// Display the elapsed time in seconds (e.g., "1.230") in
// the element with ID "myTimer".

let startTime = new Date().getTime();
let timerId;
let running = true;

function updateTimer() {
  let currentTime = new Date().getTime();
  let elapsedSeconds = (currentTime - startTime) / 1000;
  document.getElementById("myTimer").innerHTML = elapsedSeconds.toFixed(3);
}

// Start the timer immediately
timerId = setInterval(updateTimer, 10);

// ============================================
//  PART 3: Start/Stop Toggle Button
// ============================================
// The button starts as "Stop" (timer is running).
// Clicking it should:
//   - If timer is running: stop it (clearInterval) and
//     change button text to "Start"
//   - If timer is stopped: restart it from 0 and change
//     button text to "Stop"

let button = document.getElementById("myBtn");

button.addEventListener("click", function () {
  if (running) {
    clearInterval(timerId);
    button.innerHTML = "Start";
    running = false;
  } else {
    startTime = new Date().getTime();
    document.getElementById("myTimer").innerHTML = "0.000";
    timerId = setInterval(updateTimer, 10);
    button.innerHTML = "Stop";
    running = true;
  }
});