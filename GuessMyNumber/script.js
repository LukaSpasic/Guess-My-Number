'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function secretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function changeScore(score) {
  document.querySelector('.score').textContent = score;
}

let number = secretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('🤨 Where is your number?!');
    // Player win
  } else if (number === guess) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Guess is wrong
  } else if (number != guess) {
    displayMessage(guess > number ? '📈 Too high...' : '📉 Too low...');
    if (score > 1) {
      score--;
      changeScore(score);
    } else {
      displayMessage('😒 You lost the game...');
      changeScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = secretNumber();
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  changeScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
