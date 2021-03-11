'use strict';
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
	if (lockBoard) return;
	if (this == firstCard) return;
	this.classList.add('flip');

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;

		return;
	}
	//second click
	hasFlippedCard = false;
	secondCard = this;
	//do cards match?
	checkForMatch();
}

function checkForMatch() {
	//using a ternary operator
	let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

	isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
	firstCard.removeEventListener('click', flipCard);
	firstCard.removeEventListener('click', flipCard);
}

function unFlipCards() {
	lockBoard = true;
	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');

		lockBoard = false;
	}, 1000);
}

function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false]; //destructuring assignment
	[firstCard, secondCard] = [null, null];
}

//shuufling of cards
(function shuffle() {
	//immediatley invoked function
	cards.forEach((card) => {
		let random = Math.floor(Math.random() * 12);
		card.style.order = random;
	});
})();

cards.forEach((card) => card.addEventListener('click', flipCard));
