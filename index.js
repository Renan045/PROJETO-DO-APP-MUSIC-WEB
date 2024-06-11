const image = document.getElementById('cover'),
titulo = document.getElementById('musica-titulo'),
artist = document.getElementById('musica-artista'),
currentTimeEl = document.getElementById('atual-tempo'),
durationEl = document.getElementById('duração'),
progress = document.getElementById('progresso'),
playerProgress = document.getElementById('player-progresso'),
prevBtn = document.getElementById('anterior'),
nextBtn = document.getElementById('próxima'),
playBtn = document.getElementById('play'),
background = document.getElementById('bg-img');

const musica = new Audio();

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'The Charmer\'s Call',
        cover: 'assets/1.jpg',
        artista: 'Hanu Dixit',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'You Will Never See Me Coming',
        cover: 'assets/2.jpg',
        artista: 'NEFFEX',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Intellect',
        cover: 'assets/3.jpg',
        artista: 'Yung Logos',
    }
];

let musicaIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusica();
    } else {
        playMusica();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('titulo', 'Pause');
    musica.play();
}

function pauseMusica() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('titulo', 'Play');
    musica.pause();
}

function loadMusic(song) {
    musica.src = song.path;
    titulo.textContent = song.displayName;
    artista.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);