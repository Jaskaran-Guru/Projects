// Selecting the DOM elements
const timeDisplay = document.getElementById('timeDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const lapResetBtn = document.getElementById('lapResetBtn');
const lapsList = document.getElementById('lapsList');

let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

// Function to format the time
function formatTime(time) {
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

  return (
    (hours < 10 ? '0' + hours : hours) +
    ':' +
    (minutes < 10 ? '0' + minutes : minutes) +
    ':' +
    (seconds < 10 ? '0' + seconds : seconds)
  );
}

// Function to start the timer
function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 10);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(timerInterval);
}

// User Story 5 & 7: Start/Stop button functionality
startStopBtn.addEventListener('click', function () {
  if (!isRunning) {
    startTimer();
    isRunning = true;
    startStopBtn.textContent = 'Stop';
    startStopBtn.classList.add('stop');
    lapResetBtn.textContent = 'Lap'; // Reset the button to Lap
  } else {
    stopTimer();
    isRunning = false;
    startStopBtn.textContent = 'Start';
    startStopBtn.classList.remove('stop');
    lapResetBtn.textContent = 'Reset'; // Change Lap to Reset when stopped
  }
});

// User Story 6 & 8: Lap/Reset button functionality
lapResetBtn.addEventListener('click', function () {
  if (isRunning) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.prepend(lapItem); // Prepend the lap time
  } else {
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00'; // Reset the stopwatch display
    lapsList.innerHTML = ''; // Clear all the lap times
  }
});
