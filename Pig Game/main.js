'strict mode';

//taking the scores of players
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');

//storing the different buttons
const roll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');

//taking the current score
let current1 = document.querySelector('#current-0');
let current2 = document.querySelector('#current-1');

//selecting  the dice element
let dice = document.querySelector('.dice');
//making initial scores of playes zero
score0.textContent = 0;
score1.textContent = 0;

//currentscore value
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//making the dice disappear
document.querySelector('.dice').classList.add('hide');

//function for rolling dice
roll.addEventListener('click', function () {
  if (scores[0] < 20 && scores[1] < 20) {
    //displaying the dice
    diceValue = Math.trunc(Math.random() * 6) + 1;
    dice.src = `img/dice-${diceValue}.png`;
    dice.classList.remove('hide');

    //adding score to the current score
    if (diceValue !== 1) {
      currentScore += diceValue;
      document.querySelector(
        `#current-${activePlayer}`
      ).textContent = currentScore;
    } else {
      //if 1 comes out change the player and reset values
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      currentScore = 0;
      document.querySelector(
        `#current-${activePlayer}`
      ).textContent = currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
    }
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  } else {
    alert("Game's Over!!");
  }
});

//adding the functionalities to hold button
hold.addEventListener('click', function () {
  if (scores[0] < 20 && scores[1] < 20) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  } else {
    alert("Game's Over!!");
  }
});

//resetting the game
newGame.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;
  dice.classList.add('hide');
});
