const play = document.querySelector('.fa-play');
const audio = document.querySelector('audio');
const image = document.querySelector('img');
const song = document.querySelector('#song');
const artist = document.querySelector('#artist');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let progress = document.querySelector('#progress');
const length_audio = document.querySelector('#duration');
let current_time = document.querySelector('#current-time');
const progressDiv = document.querySelector('#progress-div');
const audios = [
	{
		name: 'audio-1',
		song: 'Kowfi',
		artist: 'New Found',
	},
	{
		name: 'audio-2',
		song: 'Satire',
		artist: 'The Munchkins',
	},
	{
		name: 'audio-3',
		song: 'Go Far Away',
		artist: 'Unknown Singer',
	},
];

let audioPlaying = false;

//for playing audio
const playAudio = () => {
	audioPlaying = true;
	audio.play();
	play.classList.replace('fa-play', 'fa-pause');
	image.classList.add('rotate');
};

//for pausing audio
const pauseAudio = () => {
	audioPlaying = false;
	audio.pause();
	play.classList.replace('fa-pause', 'fa-play');
	image.classList.remove('rotate');
};

play.addEventListener('click', () => {
	audioPlaying ? pauseAudio() : playAudio();
});

//Changing audios
const loadAudio = (audios) => {
	song.textContent = audios.song;
	artist.textContent = audios.artist;
	audio.src = 'audio/' + audios.name + '.mp3';
	let random = Math.trunc(Math.random() * 3) + 1;
	image.src = 'image/img-' + random + '.jpg';
};

//loadAudio(audios[2]);
let audioIndex = 0;

const nextAudio = () => {
	audioIndex = (audioIndex + 1) % audios.length;
	loadAudio(audios[audioIndex]);
	playAudio();
};

const prevAudio = () => {
	audioIndex = (audioIndex - 1 + audios.length) % audios.length;
	loadAudio(audios[audioIndex]);
	playAudio();
};

//progress button
audio.addEventListener('timeupdate', (e) => {
	//object desctructuring
	const { currentTime, duration } = e.srcElement;

	let progressTimePercentage = (currentTime / duration) * 100;
	progress.style.width = `${progressTimePercentage}%`;

	//updating time for the playing audio
	let duration_min = Math.floor(duration / 60);
	let duration_sec = Math.floor(duration % 60);
	if (duration_sec < 10) {
		duration_sec = `0${duration_sec}`;
	}

	if (duration) {
		length_audio.textContent = `${duration_min}:${duration_sec}`;
	}

	//current time
	let current_min = Math.floor(currentTime / 60);
	let current_sec = Math.floor(currentTime % 60);
	if (current_sec < 10) {
		current_sec = `0${current_sec}`;
	}
	current_time.textContent = `${current_min}:${current_sec}`;
});

progressDiv.addEventListener('click', (e) => {
	const { duration } = audio;
	let shift_progress = (e.offsetX / e.srcElement.clientWidth) * duration;
	audio.currentTime = shift_progress;
});

//playing next audio when first audio get's over
audio.addEventListener('ended', nextAudio);

next.addEventListener('click', nextAudio);
prev.addEventListener('click', prevAudio);
