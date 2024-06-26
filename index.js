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

const songs = [
    {
        path:"music/1.mp3",
        displayName: 'Sem Direitos autorais',
        cover: rotaImg,
        artist: 'MUSIC NC &&&',
    },
    {
        path: 'music/2.mp3',
        displayName: 'No limits',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/3.mp3',
        displayName: 'Spectre',
        cover: rotaImg,
        artist: 'Alan Walker &&&',
    },
    {
        path: 'music/4.mp3',
        displayName: 'YELLWO LOVE',
        cover: rotaImg,
        artist: 'Horusiiii &&&',
    },
    {
        path: 'music/5.mp3',
        displayName: 'DISTO & Todd Helder',
        cover: rotaImg,
        artist: 'DISTO &&&',
    },
    {
        path: 'music/6.mp3',
        displayName: 'LITE & FLOW',
        cover: rotaImg,
        artist: 'SUBODH &&&',
    },
    {
        path: 'music/7.mp3',
        displayName: 'MUSICA ELETRONICA REMIX ',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/8.mp3',
        displayName: 'DEEP',
        cover: rotaImg,
        artist: 'Ennio Marak &&&',
    },
    {
        path: 'music/9.mp3',
        displayName: 'Force',
        cover: rotaImg,
        artist: 'Alan Walker &&&',
    },
    {
        path: 'music/10.mp3',
        displayName: 'Together',
        cover: rotaImg,
        artist: 'TULE &&&',
    },
    {
        path: 'music/11.mp3',
        displayName: 'Neghtcore',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/12.mp3',
        displayName: 'New Era',
        cover: rotaImg,
        artist:'Crusadope',
    },    
    {
        path:'music/13.mp3',
        artist: 'Crusadope &&&',
        cover: rotaImg,
        artist: 'TheFatRat & Anjulie &&&',
    },
    {
        path: 'music/14.mp3',
        displayName: 'Dubstep',
        cover: rotaImg,
        artist:'Diamond Eyess &&&',
    },
    {
        path: 'music/15.mp3',
        displayName: 'MAGIC ',
        cover: rotaImg,
        artist: 'Jack Spenser & Axell 4X &&&',
    },
    { 
        path:'music/16.mp3',
        displayName: 'Dimond Eyes',
        cover:rotaImg,
        artist:'MUSIC CN &&&'    
    },
    {
        path: 'music/18.mp3',
        displayName: 'Mortals',
        cover: rotaImg,
        artist: 'Warriyo &&&',
    },
    {
        path: 'music/19.mp3',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/20.mp3',
        displayName: 'Awkward',
        cover: rotaImg,
        artist: 'Chrystal Colors &&&',
    },
    {
        path: 'music/21.mp3',
        displayName: 'Moetales',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/22.mp3',
        displayName: 'Evasiver',
        cover: rotaImg,
        artist: 'YESTER &&&',
    },
    {
        path: 'music/23.mp3',
        displayName: 'Rhythm',
        cover: rotaImg,
        artist: 'YungCloudz &&&',
    },
    {
        path: 'music/24.mp3',
        displayName: 'Love Me Bette',
        cover: rotaImg,
        artist: 'Wiguez & Vizzen &&&',
    },
    {
        path: 'music/25.mp3',
        displayName: 'Iris',
        cover: rotaImg,
        artist: 'EDEN &&&',
    },
    {
        path: 'music/26.mp3',
        displayName: 'REMIX',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/27.mp3',
        displayName: 'Dioma',
        cover: rotaImg,
        artist: 'JNATHYN &&&',
    },
    {
        path: 'music/28.mp3',
        displayName: 'Heroes Tonight',
        cover: rotaImg,
        artist: 'janji &&&',
    },
    {
        path: 'music/29.mp3',
        displayName: 'heroes',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/30.mp3',
        displayName: 'Incendiun',
        cover: rotaImg,
        artist: 'Aevi &&&',
    },
    {
        path: 'music/31.mp3',
        displayName: 'Reggae',
        cover: rotaImg,
        artist: 'Internacional &&&',
    },
    {
        path: 'music/32.mp3',
        displayName: 'WE',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/34.mp3',
        displayName: 'Paradise',
        cover: rotaImg,
        artist: 'Ikson &&&',
    },
    {
        path: 'music/35.mp3',
        displayName: 'HIP HOP',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'mjsic/36.mp3',
        displayName: 'Night',
        cover: rotaImg,
        artist: '2nd life &&&',
    },
    {
        path: 'music/37.mp3',
        displayName: 'Sunshine',
        cover: rotaImg,
        artist: 'T&III &&&',
    },
    {
        path: 'music/38.mp3',
        displayName: 'Who',
        cover: rotaImg,
        artist: 'Zeus X Crona &&&',
    },
    {
        path: 'music/39.mp3',
        displayName: 'Lost',
        cover: rotaImg,
        artist: 'Naron &&&',
    },
    {
        path: 'music/40.mp3',
        displayName: 'Invencible',
        cover: rotaImg,
        artist: 'DEAF KEV &&&',
    },
    {
        path: 'music/41.mp3',
        displayName: 'ELETRONICA &&',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/42.mp3',
        displayName: 'LOve Is Go',
        cover: rotaImg,
        artist: 'Whales & Jo Cohen &&&',
    },
    {
        path: 'music/43.mp3',
        displayName: '&&&',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/44.mp3',
        displayName: 'Shy High',
        cover: rotaImg,
        artist: 'Elektronomia &&&',
    },
    {
        path: 'music/45.mp3',
        displayName: 'Voyage...',
        cover: rotaImg,
        artist: 'Mendum & Abandond &&&',
    },
    {
        path: 'music/46.mp3',
        displayName: 'Dance',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/47.mp3',
        displayName: 'King',
        cover: rotaImg,
        artist: 'Satara &&&',
    },
    {
        path: 'music/48.mp3',
        displayName: 'Long Way',
        cover: rotaImg,
        artist: 'F3eno & stfa &&&',
    },
    {
        path: 'music/49.mp3',
        displayName: 'Faded',
        cover: rotaImg,
        artist: 'ALAN Walker &&&',
    },
    {
        path: 'music/50.mp3',
        displayName: 'Spirit',
        cover: rotaImg,
        artist: 'AltroX &&&',
    },
    {
        path: 'music/51.mp3',
        displayName: 'Sybolism',
        cover: rotaImg,
        artist: 'Electro-Light &&&',
    },
    {
        path: 'music/52.mp3',
        displayName: 'Lose',
        cover: rotaImg,
        artist: 'Cartoon &&&',
    },
    {
        path: 'msic/53.mp3',
        displayName: 'Anjulei',
        cover: rotaImg,
        artist: 'CN MUSICAs &&&',
    },
    {
        path: 'music/54.mp3',
        displayName: 'On & On',
        cover: rotaImg,
        artist: 'Cartoon &&& ',
    },
    {
        path: 'music/55.mp3',
        displayName: 'Epic',
        cover: rotaImg,
        artist: 'AltroX &&&',
    },
    {
        path: 'music/56.mp3',
        displayName: 'House',
        cover: rotaImg,
        artist: 'On My Mind &&&',
    },
    {
        path: 'music/57.mp3',
        displayName: 'Time travel',
        cover: rotaImg,
        artist: 'Tonyz &&&',
    },
    {
        path: 'music/58.mp3',
        displayName: 'Back Agein',
        cover: rotaImg,
        artist: 'Thomas Gresen &&&',
    },
    {
        path: 'music/59.mp3',
        displayName: 'Pretty Lies',
        cover: rotaImg,
        artist: 'Thomas Gresen &&&',
    },
    {
        path: 'music/60.mp3',
        displayName: 'Imagination',
        cover: rotaImg,
        artist: 'Naron &&&',
    },
    {
        path: 'music/61.mp3',
        displayName: 'Reggea &&',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/62.mp3',
        displayName: 'Eletric',
        cover: rotaImg,
        artist: 'Sk-Hall &&&',
    },
    {
        path: 'music/63.mp3',
        displayName: 'SUBDHOCK EVANGELOS ...',
        cover: rotaImg,
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/64.mp3',
        displayName: 'gO F*CK YOURSELF',
        cover: rotaImg,
        artist: 'TWO Feet &&&',
    },
    {
        path: 'music/65.mp3',
        displayName: 'FORRO E DESMANTELO',
        cover: rotaImg,
        artist: 'MTG &&&',
    },
    {
        path: 'music/66.mp3',
        displayName: 'SONHO DELA',
        cover: rotaImg,
        artist: 'Country &&&',
    },
    {
        path: 'music/67.mp3',
        displayName: 'FALTA DO QUE',
        cover: rotaImg,
        artist: 'LUAN PEREIRA & MURILORUF &&&',
    },
    {
        path: 'music/68.mp3',
        displayName: 'CORTANDO AS BR',
        cover: rotaImg,
        artist: 'FIDUMA & JECA &&&',
    },
    {
        path: 'music/69.mp3',
        displayName: 'AI EU CHOREI',
        cover: rotaImg,
        artist: 'Cleito & Romario &&&',
    },
    {
        path: 'music/70.mp3',
        displayName: 'MAGICA',
        cover: rotaImg,
        artist: 'GUILHERME & BENUTO &&&',
    },
    {
        path: 'music/71.mp3',
        displayName:'OS KEP',
        cover: rotaImg,
        artist: 'KAKA &&&',
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