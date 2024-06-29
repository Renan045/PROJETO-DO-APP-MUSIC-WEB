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
const nuberImg = 1;
const rotaImg = `./images/images ${nuberImg}.jpeg`;

const Img = 23;
const rotaImgg= `./images/images ${Img}.jpg`;

const Imgg = 24;
const rotaImggg= `./images/images ${Imgg}.jpg`;

const Imggg = 25;
const rotaImgggg= `./images/images ${Imggg}.jpg`;

const Imgggg = 26;
const rotaImggggg= `./images/images ${Imgggg}.jpg`;

const songs = [
    {
        path:"music/1.mp3",
        displayName: 'Vc quer PIX ou Precente misterioso',
        cover: rotaImg,
        artist: 'FLUXOS &&&',
    },
    {
        path: 'music/2.mp3',
        displayName: 'Digo ou Não Digo',
        cover: rotaImg,
        artist: 'João Gomes & L7NNON &&&',
    },
    {
        path: 'music/3.mp3',
        displayName: 'Namorando Sem Namorar',
        cover: rotaImg,
        artist: 'Fiorella & Guilherme e Benuto &&&',
    },
    {
        path: 'music/4.mp3',
        displayName: 'Sextou com S de Saudade',
        cover: rotaImg,
        artist: 'Luiza & Maurilio e Zé neto e cristiano &&&',
    },
    {
        path: 'music/5.mp3',
        displayName: 'Algumas Frases',
        cover: rotaImg,
        artist: 'L7NNON &&&',
    },
    {
        path: 'music/6.mp3',
        displayName: 'Já que vc Gosta tanto de RUA',
        cover: rotaImg,
        artist: 'Djay L Beats &&&',
    },
    {
        path: 'music/7.mp3',
        displayName: 'Meu lençol Dobrado',
        cover: rotaImg,
        artist: 'DJ GR Beats &&&',
    },
    {
        path: 'music/8.mp3',
        displayName: 'Loucos de Brasilia',
        cover: rotaImg,
        artist: 'Keniano &&&',
    },
    {
        path: 'music/9.mp3',
        displayName: 'Moletom',
        cover: rotaImg,
        artist: 'LP & Gustavo mioto &&&',
    },
    {
        path: 'music/10.mp3',
        displayName: 'Estranho',
        cover: rotaImg,
        artist: 'Marilia mendonça &&&',
    },
    {
        path: 'music/11.mp3',
        displayName: 'Morena Tropical',
        cover: rotaImg,
        artist: 'Véi da midia &&&',
    },
    {
        path: 'music/12.mp3',
        displayName: 'Agora nosso Quadro',
        cover: rotaImg,
        artist: 'Ana Castelo &&&',
    },
    {
        path: 'music/13.mp3',
        displayName: 'Do mato pro Mundo',
        cover: rotaImg,
        artist: 'LP &&&',
    },
    {
        path: 'music/14.mp3',
        displayName: 'Yellowstone',
        cover: rotaImg,
        artist: 'Leó e Raphael & LP &&&',
    },
    {
        path: 'music/15.mp3',
        displayName: 'Foi Intenso',
        cover: rotaImg,
        artist: 'Zé neto e Cristiano & Aan Castelo &&&',
    },
    {
        path: 'music/16.mp3',
        displayName: 'Eu quero te Amar na Praia',
        cover: rotaImg,
        artist: 'Natanzin &&&',
    },
    {
        path: 'music/17.mp3',
        displayName: 'Troca de Calçada',
        cover: rotaImg,
        artist: 'Marilia Mendonça &&&',
    },
    {
        path: 'music/18.mp3',
        displayName: 'Relógio Parado',
        cover: rotaImg,
        artist: 'Diogo & Arnaldo &&&',
    },
    {
        path: 'music/19.mp3',
        displayName: 'Pra sempre se Ser',
        cover: rotaImg,
        artist: 'Ana Castelo &&&',
    },
    {
        path: 'music/20.mp3',
        displayName: 'FREE FIRE',
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
        cover: rotaImgg,
        artist: 'LUAN PEREIRA & MURILORUF &&&',
    },
    {
        path: 'music/24.mp3',
        displayName: 'CORTANDO AS BR',
        cover: rotaImggg,
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
    {
        path: 'music/27.mp3',
        displayName: 'Vamo de Pagodin',
        cover: rotaImg,
        artist: 'MC Daniel &&&',
    },
    {
        path: 'music/28.mp3',
        displayName: 'Chinelo de Prego',
        cover: rotaImg,
        artist: 'Antony & Gabriel &&&',
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