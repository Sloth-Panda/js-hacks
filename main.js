//take an arrayof objects or fetch api whichever u want to use
'use strict';

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

const quizDb = [
	{
		question: 'Q1: What is MLH?',
		a: 'Major Low Hacking',
		b: 'Major Leauge Hacking',
		c: 'Major Low Hacking',
		d: 'Major Low Hacking',
		ans: 'ans2',
	},
	{
		question: 'Q2: What is MLH?',
		a: 'Major Low Hacking',
		b: 'Major Low Hacking',
		c: 'Major Low Hacking',
		d: 'Major League Hacking',
		ans: 'ans4',
	},
	{
		question: 'Q3: What is MLH?',
		a: 'Major Low Hacking',
		b: 'Major Low Hacking',
		c: 'Major League Hacking',
		d: 'Major Low Hacking',
		ans: 'ans3',
	},
	{
		question: 'Q4: What is MLH?',
		a: 'Major League Hacking',
		b: 'Major Low Hacking',
		c: 'Major Low Hacking',
		d: 'Major Low Hacking',
		ans: 'ans1',
	},
	{
		question: 'Q5: What is MLH?',
		a: 'Major Low Hacking',
		b: 'Major Low Hacking',
		c: 'Major Low Hacking',
		d: 'Major League Hacking',
		ans: 'ans4', // " control + D " -> For multiple selection
	},
];

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
	question.textContent = quizDb[questionCount].question;
	option1.textContent = quizDb[questionCount].a;
	option2.textContent = quizDb[questionCount].b;
	option3.textContent = quizDb[questionCount].c;
	option4.textContent = quizDb[questionCount].d;
};

loadQuestion();

const getCheckAnswer = () => {
	let answer;
	answers.forEach((curAnsElem) => {
		if (curAnsElem.checked) {
			answer = curAnsElem.id;
		}
	});
	return answer;
};

const deselectAll = () => {
	answers.forEach((ans) => (ans.checked = false));
};

submit.addEventListener('click', () => {
	const checkAnswer = getCheckAnswer();
	//console.log(checkanswer);
	if (checkAnswer == quizDb[questionCount].ans) {
		score++;
	}
	questionCount++;
	deselectAll();
	if (questionCount < quizDb.length) {
		loadQuestion();
	} else {
		showScore.innerHTML = `<h3>You Scored ${score} out of ${quizDb.length} ✌
        </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`; //reload() used to reload the whole document and so you can use location.reload();
		showScore.classList.remove('scoreArea');
	}
});
