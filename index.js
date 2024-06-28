const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();
const nuberImg = 4;
const rotaImg = `./images/images ${nuberImg}.jpeg`;

const Img = 22;
const rotaImgg= `./images/images ${Img}.jpg`;

const Imgg = 23;
const rotaImggg= `./images/images ${Imgg}.jpg`;

const Imggg = 24;
const rotaImgggg= `./images/images ${Imggg}.jpg`;

const Imgggg = 25;
const rotaImggggg= `./images/images ${Imgggg}.jpg`;

const songs = [
    {
        path:"music/1.mp3",
        displayName: 'Sem Direitos autorais',
        cover: rotaImg,
        artist: 'MUSIC NC &&&',
    },
    {
        path: 'music/21.mp3',
        displayName: 'FORRO E DESMANTELO',
        cover: rotaImg,
        artist: 'MTG &&&',
    },
    {
        path: 'music/22.mp3',
        displayName: 'SONHO DELA',
        cover: rotaImg,
        artist: 'Country &&&',
    },
    {
        path: 'music/23.mp3',
        displayName: 'FALTA DO QUE',
        cover: rotaImggg,
        artist: 'LUAN PEREIRA & MURILORUF &&&',
    },
    {
        path: 'music/24.mp3',
        displayName: 'CORTANDO AS BR',
        cover: rotaImgg,
        artist: 'FIDUMA & JECA &&&',
    },
    {
        path: 'music/25.mp3',
        displayName: 'AI EU CHOREI',
        cover: rotaImgggg,
        artist: 'Cleito & Romario &&&',
    },
    {
        path: 'music/26.mp3',
        displayName: 'MAGICA',
        cover: rotaImggggg,
        artist: 'GUILHERME & BENUTO &&&',
    },
    
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    
    playBtn.classList.replace('fa-play', 'fa-pause');
    
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
   
    playBtn.classList.replace('fa-pause', 'fa-play');
    
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
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