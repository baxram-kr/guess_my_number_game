let randomNumber = generateRandomNumber();
let attempts = 0;
let score = 100;
let highScore = localStorage.getItem('highScore') || 0; 
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessField').value);
  const messageElement = document.getElementById('message');
  const attemptsElement = document.getElementById('attempts');
  const scoreElement = document.getElementById('score');
  const highScoreElement = document.getElementById('highScore');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    messageElement.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;
  attemptsElement.textContent = attempts;

  if (guess === randomNumber) {
    messageElement.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;

    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
      localStorage.setItem('highScore', highScore);
    }
  } else if (guess < randomNumber) {
    messageElement.textContent = 'Try a higher number.';
  } else {
    messageElement.textContent = 'Try a lower number.';
  }


  score --;
  if (score < 0) {
    score = 0;
  }
  scoreElement.textContent = score;
}

function playAgain() {
  attempts = 0;
  score = 100;
  document.getElementById('guessField').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('attempts').textContent = attempts;
  document.getElementById('score').textContent = score;
  randomNumber = generateRandomNumber();
}
