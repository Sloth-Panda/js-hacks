'use strict';

const inner = document.querySelector('.inner');
const clickCount = document.querySelector('.clickCount');

let clickcount = 0;

const showHeart = () => {
	const heart = document.createElement('i');
	heart.classList.add('fa');
	heart.classList.add('fa-heart');
	inner.appendChild(heart);

	setTimeout(() => {
		heart.remove();
	}, 800);
};

inner.addEventListener('dblclick', () => {
	clickCount.textContent = ++clickcount;
	// inner.innerHTML = `<i class="fa fa-heart"></i>`;
	showHeart();
});

//P.S-: Whenever there is a click event and you want to add something dynamically
//you need to use "event / e" as parameter
