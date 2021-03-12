'strict mode';

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

function message(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  // let Score = document.querySelector('.score').textContent;

  if (!guess) {
    message('Give some input!!');
  } else if (guess == secretNumber) {
    if (score > 1) {
      message('You Won!!');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '22rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > highScore) {
        document.querySelector('.highscore').textContent = score;
      }
    } else {
      message('You Lose!!');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('h1').textContent = 'Better Luck Next Time';
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      guess > secretNumber ? message('Go Low') : message('Go High!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You Lose!!');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('h1').textContent = 'Better Luck Next Time';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  message('Start guessing...');
  document.querySelector('.highscore').textContent = score;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
});
