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

const images = [];
for (let i = 1; i <= 28; i++) {
    images.push(`./images/images ${i}.jpeg`);
}

const songs = [
    { path: "music/1.mp3", displayName: 'Vc quer PIX ou Precente misterioso', cover: rotaImg, artist: 'FLUXOS &&&' },
    { path: 'music/2.mp3', displayName: 'Digo ou Não Digo', cover: rotaImg, artist: 'João Gomes & L7NNON &&&' },
    { path: 'music/3.mp3', displayName: 'Namorando SEM Namorar', cover: rotaImg, artist: 'Fiorella & Guilherme e Benuto' },
    { path: 'music/4.mp3', displayName: 'Sextou com S', cover: rotaImg, artist: 'Luiza & Zé Neto e Cristiano' },
    { path: 'music/5.mp3', displayName: 'Algumas Frases ', cover: rotaImg, artist: 'L7nnon' },
    { path: 'music/6.mp3', displayName: 'Gosta de Rua', cover: rotaImg, artist: 'Felipe & Rodrigo' },
    { path: 'music/7.mp3', displayName: 'Meu Lençol Dobrado', cover: rotaImg, artist: '&&&' },
    { path: 'music/8.mp3', displayName: 'Locos de Brasilia', cover: rotaImg, artist: '&&&&' },
    { path: 'music/9.mp3', displayName: 'Moleton', cover: rotaImg, artist: 'LP & Gustavo Mito' },
    { path: 'music/10.mp3', displayName: 'Estranho', cover: rotaImg, artist: 'Marilia e Mendonça' },
    { path: 'music/11.mp3', displayName: 'Morena Tropicana', cover: rotaImg, artist: 'MTG &' },
    { path: 'music/12.mp3', displayName: 'Nosso Quadro', cover: rotaImg, artist: 'Ana Castelo' },
    { path: 'music/13.mp3', displayName: 'Do Mato Pro Mundo', cover: rotaImg, artist: 'LP' },
    { path: 'music/14.mp3', displayName: 'Yellowstone', cover: rotaImg, artist: 'Léo & Rafael e LP' },
    { path: 'music/15.mp3', displayName: 'Foi Intenso', cover: rotaImg, artist: 'Zé neto e Cristiano & Ana Castelo' },
    { path: 'music/16.mp3', displayName: 'Amor na Praia', cover: rotaImg, artist: 'Natanzinho' },
    { path: 'music/17.mp3', displayName: 'Troca de Calçada', cover: rotaImg, artist: 'Marilia Mendonça' },
    { path: 'music/18.mp3', displayName: 'Relógi Parado', cover: rotaImg, artist: 'Diego e Arnaldo' },
    { path: 'music/19.mp3', displayName: 'Pra Sempre Sem Ser', cover: rotaImg, artist: 'Ana CAstelo' },
    { path: 'music/20.mp3', displayName: '&&&7', cover: rotaImg, artist: '&&&&7' },
    { path: 'music/21.mp3', displayName: 'Forró & Desmandelo', cover: rotaImg, artist: 'Mini Vaqueiro' },
    { path: 'music/22.mp3', displayName: 'Sonho Dela', cover: rotaImg, artist: 'CowBoy' },
    { path: 'music/23.mp3', displayName: 'Falta do Quê', cover: rotaImg, artist: 'LP & Muliro Huff' },
    { path: 'music/24.mp3', displayName: 'Cortando as BR', cover: rotaImg, artist: 'Fiduma e Jeca & Fernando e Sorocaba' },
    { path: 'music/25.mp3', displayName: 'Ai Eu Chorei', cover: rotaImg, artist: 'Clayto e Romario' },
    { path: 'music/26.mp3', displayName: 'Mágica', cover: rotaImg, artist: 'Matheus e Kauan' },
    { path: 'music/27.mp3', displayName: 'Vamos de Pagodin', cover: rotaImg, artist: 'MC Daniel' },
    { path: 'music/28.mp3', displayName: 'Chinelo de Prego', cover: rotaImg, artist: 'Antony & Gabriel' },

];

loadMusic(songs[musicIndex]);

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

loadMusic(songs[musicIndex]);                                                                                                                      // Carrega a música inicial