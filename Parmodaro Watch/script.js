const timeDisplay = document.getElementById('time');
const sessionLengthDisplay = document.getElementById('session-length');
const breakLengthDisplay = document.getElementById('break-length');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const sessionDecrementButton = document.getElementById('session-decrement');
const sessionIncrementButton = document.getElementById('session-increment');
const breakDecrementButton = document.getElementById('break-decrement');
const breakIncrementButton = document.getElementById('break-increment');

let sessionLength = 25;
let breakLength = 5;
let timerRunning = false;
let isSession = true;
let timeRemaining = sessionLength * 60;
let timerInterval;

// Update the displayed session and break time
function updateDisplay() {
  timeDisplay.textContent = formatTime(timeRemaining);
  sessionLengthDisplay.textContent = sessionLength;
  breakLengthDisplay.textContent = breakLength;
}

// Format time as mm:ss
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Start the timer
function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateDisplay();

    if (timeRemaining === 0) {
      // Toggle between session and break
      isSession = !isSession;
      timeRemaining = (isSession ? sessionLength : breakLength) * 60;
    }
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// Toggle start/stop
startStopButton.addEventListener('click', () => {
  if (!timerRunning) {
    startTimer();
    timerRunning = true;
    startStopButton.textContent = 'Stop';
    sessionDecrementButton.disabled = true;
    sessionIncrementButton.disabled = true;
    breakDecrementButton.disabled = true;
    breakIncrementButton.disabled = true;
  } else {
    stopTimer();
    timerRunning = false;
    startStopButton.textContent = 'Start';
  }
});

// Reset the timer
resetButton.addEventListener('click', () => {
  stopTimer();
  timerRunning = false;
  isSession = true;
  sessionLength = 25;
  breakLength = 5;
  timeRemaining = sessionLength * 60;
  updateDisplay();
  startStopButton.textContent = 'Start';
  sessionDecrementButton.disabled = false;
  sessionIncrementButton.disabled = false;
  breakDecrementButton.disabled = false;
  breakIncrementButton.disabled = false;
});

// Adjust session length
sessionDecrementButton.addEventListener('click', () => {
  if (sessionLength > 1) {
    sessionLength--;
    timeRemaining = sessionLength * 60;
    updateDisplay();
  }
});

sessionIncrementButton.addEventListener('click', () => {
  sessionLength++;
  timeRemaining = sessionLength * 60;
  updateDisplay();
});

// Adjust break length
breakDecrementButton.addEventListener('click', () => {
  if (breakLength > 1) {
    breakLength--;
    updateDisplay();
  }
});

breakIncrementButton.addEventListener('click', () => {
  breakLength++;
  updateDisplay();
});

// Initialize display
updateDisplay();
