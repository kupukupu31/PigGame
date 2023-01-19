'use strict';
const score0P1 = document.querySelector('#score--0');
const score1P2 = document.querySelector('#score--1');

const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScoreP1 = document.getElementById('current--0');
const currentScoreP2 = document.getElementById('current--1');

let currentScore = 0;
let activePlayer = 0;

const dice1 = document.querySelector('.dice');
dice1.classList.add('hidden');

score0P1.textContent = 0;
score1P2.textContent = 0;

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  dice1.classList.remove('hidden');
  dice1.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    currentScore = 0;
    currentScoreP2.textContent = currentScore;
  }
});
