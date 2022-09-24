'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.btn-check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.Guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please enter a number between 1 to 20!!';
  } else if (guess === randomNumber) {
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.message').textContent = 'Yay You Won!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess < randomNumber && score > 1) {
    document.querySelector('.message').textContent = 'Oops too low!!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > randomNumber && score > 1) {
    document.querySelector('.message').textContent = 'Oops too high!!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Oops You Lost!!';
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 5;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.Guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
});
