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

const songs = [
    {
        path:"music/1.mp3",
        displayName: 'Sem Direitos autorais',
        cover: 'music/1.jpg',
        artist: 'MUSIC NC &&&',
    },
    {
        path: 'music/2.mp3',
        displayName: 'No limits',
        cover: 'music/2.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/3.mp3',
        displayName: 'Spectre',
        cover: 'assets/3.jpg',
        artist: 'Alan Walker &&&',
    },
    {
        path: 'music/4.mp3',
        displayName: 'Yellow',
        cover: 'assets/4.jpg',
        artist: 'Horusiiii &&&',
    },
    {
        path: 'music/5.mp3',
        displayName: 'DISTO & Todd Helder',
        cover: 'assets/5.jpg',
        artist: 'DISTO &&&',
    },
    {
        path: 'music/6.mp3',
        displayName: 'LITE & FLOW',
        cover: 'assets/6.jpg',
        artist: 'SUBODH &&&',
    },
    {
        path: 'music/7.mp3',
        displayName: 'MUSICA ELETRONICA REMIX ',
        cover: 'assets/7.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/8.mp3',
        displayName: 'DEEP',
        cover: 'assets/8.jpg',
        artist: 'Ennio Marak &&&',
    },
    {
        path: 'music/9.mp3',
        displayName: 'Force',
        cover: 'assets/9.jpg',
        artist: 'Alan Walker &&&',
    },
    {
        path: 'music/10.mp3',
        displayName: 'Together',
        cover: 'assets/10.jpg',
        artist: 'TULE &&&',
    },
    {
        path: 'music/11.mp3',
        displayName: 'Neghtcore',
        cover: 'assets/11.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/12.mp3',
        displayName: 'New Era',
        cover: 'assets/12.jpg',
        artist: 'Crusadope &&&',
    },
    {
        path: 'music/13.mp3',
        displayName: 'Close',
        cover: 'assets/13.jpg',
        artist: 'TheFatRat & Anjulie &&&',
    },
    {
        path: 'music/14.mp3',
        displayName: 'Father',
        cover: 'assets/14.jpg',
        artist:'Diamond Eyess &&&',
    },
    {
        path: 'music/15.mp3',
        displayName: 'MAGIC ',
        cover: 'assets/15.jpg',
        artist: 'Jack Spenser & Axell 4X &&&',
    },
    {
        path: 'music/16.mp3',
        displayName: 'RISE Up',
        cover: 'assets/16.jpg',
        artist: 'TheFatRat &&&',
    },
    {
        path: 'music/17.mp3',
        displayName: 'Dubstep',
        cover: 'assets/17.jpg',
        artist: 'Benjamin tissot &&&',
    },
    {
        path: 'music/18.mp3',
        displayName: 'Mortals',
        cover: 'assets/18.jpg',
        artist: 'Warriyo &&&',
    },
    {
        path: 'music/19.mp3',
        displayNa: 'Stream',
        cover: 'assets/19.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/20.mp3',
        displayName: 'Awkward',
        cover: 'assets/20.jpg',
        artist: 'Chrystal Colors &&&',
    },
    {
        path: 'music/21.mp3',
        displayName: 'Moetales',
        cover: 'assets/21.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/22.mp3',
        displayName: 'Evasiver',
        cover: 'assets/22.jpg',
        artist: 'YESTER &&&',
    },
    {
        path: 'music/23.mp3',
        displayName: 'Rhythm',
        cover: 'assets/23.jpg',
        artist: 'YungCloudz &&&',
    },
    {
        path: 'music/24.mp3',
        displayName: 'Love Me Bette',
        cover: 'assets/24.jpg',
        artist: 'Wiguez & Vizzen &&&',
    },
    {
        path: 'music/25.mp3',
        displayName: 'Iris',
        cover: 'assets/25.jpg',
        artist: 'EDEN &&&',
    },
    {
        path: 'music/26.mp3',
        displayName: 'REMIX',
        cover: 'assets/26.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/27.mp3',
        displayName: 'Dioma',
        cover: 'assets/27.jpg',
        artist: 'JNATHYN &&&',
    },
    {
        path: 'music/28.mp3',
        displayName: 'Heroes Tonight',
        cover: 'assets/28.jpg',
        artist: 'janji &&&',
    },
    {
        path: 'music/29.mp3',
        displayName: 'heroes',
        cover: 'assets/29.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/30.mp3',
        displayName: 'Incendiun',
        cover: 'assets/30.jpg',
        artist: 'Aevi &&&',
    },
    {
        path: 'music/31.mp3',
        displayName: 'Reggae',
        cover: 'assets/31.jpg',
        artist: 'Internacional &&&',
    },
    {
        path: 'music/32.mp3',
        displayName: 'WE',
        cover: 'assets/32.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/34.mp3',
        displayName: 'Paradise',
        cover: 'assets/34.jpg',
        artist: 'Ikson &&&',
    },
    {
        path: 'music/35.mp3',
        displayName: 'HIP HOP',
        cover: 'assets/35.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'mjsic/36.mp3',
        displayName: 'Night',
        cover: 'assets/36.jpg',
        artist: '2nd life &&&',
    },
    {
        path: 'music/37.mp3',
        displayName: 'Sunshine',
        cover: 'assets/37.jpg',
        artist: 'T&III &&&',
    },
    {
        path: 'music/38.mp3',
        displayName: 'Who',
        cover: 'assets/38.jpg',
        artist: 'Zeus X Crona &&&',
    },
    {
        path: 'music/39.mp3',
        displayName: 'Lost',
        cover: 'assets/39.jpg',
        artist: 'Naron &&&',
    },
    {
        path: 'music/40.mp3',
        displayName: 'Invencible',
        cover: 'assets/40.jpg',
        artist: 'DEAF KEV &&&',
    },
    {
        path: 'music/41.mp3',
        displayName: 'ELETRONICA &&',
        cover: 'assets/41.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/42.mp3',
        displayName: 'LOve Is Go',
        cover: 'assets/42.jpg',
        artist: 'Whales & Jo Cohen &&&',
    },
    {
        path: 'music/43.mp3',
        displayName: '&&&',
        cover: 'assets/43.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/44.mp3',
        displayName: 'Shy High',
        cover: 'assets/44.jpg',
        artist: 'Elektronomia &&&',
    },
    {
        path: 'music/45.mp3',
        displayName: 'Voyage...',
        cover: 'assets/45.jpg',
        artist: 'Mendum & Abandond &&&',
    },
    {
        path: 'music/46.mp3',
        displayName: 'Dance',
        cover: 'assets/46.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/47.mp3',
        displayName: 'King',
        cover: 'assets/47.jpg',
        artist: 'Satara &&&',
    },
    {
        path: 'music/48.mp3',
        displayName: 'Long Way',
        cover: 'assets/48.jpg',
        artist: 'F3eno & stfa &&&',
    },
    {
        path: 'music/49.mp3',
        displayName: 'Faded',
        cover: 'assets/49.jpg',
        artist: 'ALAN Walker &&&',
    },
    {
        path: 'music/50.mp3',
        displayName: 'Spirit',
        cover: 'assets/50.jpg',
        artist: 'AltroX &&&',
    },
    {
        path: 'music/51.mp3',
        displayName: 'Sybolism',
        cover: 'assets/51.jpg',
        artist: 'Electro-Light &&&',
    },
    {
        path: 'music/52.mp3',
        displayName: 'Lose',
        cover: 'assets/52.jpg',
        artist: 'Cartoon &&&',
    },
    {
        path: 'msic/53.mp3',
        displayName: 'Anjulei',
        cover: 'assets/53.jpg',
        artist: 'CN MUSICAs &&&',
    },
    {
        path: 'music/54.mp3',
        displayName: 'On & On',
        cover: 'assets/54.jpg',
        artist: 'Cartoon &&& ',
    },
    {
        path: 'music/55.mp3',
        displayName: 'Epic',
        cover: 'assets/55.jpg',
        artist: 'AltroX &&&',
    },
    {
        path: 'music/56.mp3',
        displayName: 'House',
        cover: 'assets/56.jpg',
        artist: 'On My Mind &&&',
    },
    {
        path: 'music/57.mp3',
        displayName: 'Time travel',
        cover: 'assets/57.jpg',
        artist: 'Tonyz &&&',
    },
    {
        path: 'music/58.mp3',
        displayName: 'Back Agein',
        cover: 'assets/58.jpg',
        artist: 'Thomas Gresen &&&',
    },
    {
        path: 'music/59.mp3',
        displayName: 'Pretty Lies',
        cover: 'assets/59.jpg',
        artist: 'Thomas Gresen &&&',
    },
    {
        path: 'music/60.mp3',
        displayName: 'Imagination',
        cover: 'assets/60.jpg',
        artist: 'Naron &&&',
    },
    {
        path: 'music/61.mp3',
        displayName: 'Reggea &&',
        cover: 'assets/61.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/62.mp3',
        displayName: 'Eletric',
        cover: 'assets/62.jpg',
        artist: 'Sk-Hall &&&',
    },
    {
        path: 'music/63.mp3',
        displayName: 'SUBDHOCK EVANGELOS ...',
        cover: 'assets/63.jpg',
        artist: 'CN MUSICAS &&&',
    },
    {
        path: 'music/64.mp3',
        displayName: 'gO F*CK YOURSELF',
        cover: 'assets/64.jpg',
        artist: 'TWO Feet &&&',
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