const MIN_WIN_RANGE = 0;
const MAX_WIN_RANGE = 1000;
const MIN_DRAW_NUMBER = 0;
const MAX_DRAW_NUMBER = 7000;
const MAX_DRAWS = 5;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetDisplayNumber() {
  document.getElementById("displayNumber").innerText = "0";
}

let trackDraws = 0;

function winOrLose(randomNumber, maxDraw, minWin, maxWin) {
  trackDraws++;
  if (randomNumber >= minWin && randomNumber <= maxWin) {
    alert("You're awesome! You won!");
    trackDraws = 0;
    resetDisplayNumber();
  } else if (trackDraws == maxDraw) {
    alert("Too bad. You lost!");
    trackDraws = 0;
    resetDisplayNumber();
  }
}

const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  playButton.style.background = "torquoise";
  let randomNumber = generateRandomNumber(MIN_DRAW_NUMBER, MAX_DRAW_NUMBER);
  document.getElementById("displayNumber").innerText = randomNumber;
  winOrLose(randomNumber, MAX_DRAWS, MIN_WIN_RANGE, MAX_WIN_RANGE);
});
