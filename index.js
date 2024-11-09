const image = document.getElementById('cover'),                                                                   // Seleciona a imagem da capa
    title = document.getElementById('music-title'),                                                             // Seleciona o título da música
    artist = document.getElementById('music-artist'),                                                            // Seleciona o nome do artista
    currentTimeEl = document.getElementById('current-time'),                                             // Seleciona o elemento de tempo atual
    durationEl = document.getElementById('duration'),                                              // Seleciona o elemento de duração da música
    progress = document.getElementById('progress'),                                                           // Seleciona a barra de progresso
    playerProgress = document.getElementById('player-progress'),                                 // Seleciona o contêiner da barra de progresso
    prevBtn = document.getElementById('prev'),                                                          // Seleciona o botão de música anterior
    nextBtn = document.getElementById('next'),                                                           // Seleciona o botão de próxima música
    playBtn = document.getElementById('play'),                                                               // Seleciona o botão de play/pause
    background = document.getElementById('bg-img');                                                              // Seleciona a imagem de fundo

const music = new Audio();                                                                                     // Cria um novo objeto de áudio
const nuberImg = 1;                                                                                               // Define o número da imagem
const rotaImg = `./images/images ${nuberImg}.jpeg`;                                                              // Define o caminho da imagem

const Img = 23;                                                                                                    // Define o número da imagem
const rotaImgg = `./images/images ${Img}.jpg`;                                                                    // Define o caminho da imagem

const Imgg = 24;                                                                                                   // Define o número da imagem
const rotaImggg = `./images/images ${Imgg}.jpg`;                                                                  // Define o caminho da imagem

const Imggg = 25;                                                                                                  // Define o número da imagem
const rotaImgggg = `./images/images ${Imggg}.jpg`;                                                                // Define o caminho da imagem

const Imgggg = 26;                                                                                                 // Define o número da imagem
const rotaImggggg = `./images/images ${Imgggg}.jpg`;                                                              // Define o caminho da imagem

const songs = [                                                                                                           // Define a lista de músicas
    { path: "music/1.mp3", displayName: 'Vc quer PIX ou Precente misterioso', cover: rotaImg, artist: 'FLUXOS &&&' },                             // Primeira música
    { path: 'music/2.mp3', displayName: 'Digo ou Não Digo', cover: rotaImg, artist: 'João Gomes & L7NNON &&&' },                                  // Segunda música
                                                                                                                        // (continua para todas as músicas)
];

let musicIndex = 0;                                                                                                       // Define o índice inicial da música
let isPlaying = false;                                                                                                      // Define o estado de reprodução inicial

function togglePlay() {                                                                                                       // Função para alternar play/pause
    if (isPlaying) {                                                                                                            // Se estiver tocando
        pauseMusic();                                                                                                       // Pausa a música
    } else {                                                                                                                      // Se estiver pausado
        playMusic();                                                                                                                 // Toca a música
    }
}

function playMusic() {                                                                                                          // Função para tocar a música
    isPlaying = true;                                                                                                               // Atualiza o estado para tocando
    playBtn.classList.replace('fa-play', 'fa-pause');                                                                                    // Altera o ícone para pause
    playBtn.setAttribute('title', 'Pause');                                                                                             // Altera o título do botão para Pause
    music.play();                                                                                                                        // Toca a música
}

function pauseMusic() {                                                                                                                    // Função para pausar a música
    isPlaying = false;                                                                                                                   // Atualiza o estado para pausado
    playBtn.classList.replace('fa-pause', 'fa-play');                                                                                         // Altera o ícone para play
    playBtn.setAttribute('title', 'Play');                                                                                                   // Altera o título do botão para Play
    music.pause();                                                                                                                              // Pausa a música
}

function loadMusic(song) {                                                                                                                // Função para carregar uma música
    music.src = song.path;                                                                                                                // Define o caminho da música
    title.textContent = song.displayName;                                                                                                   // Define o título da música
    artist.textContent = song.artist;                                                                                                              // Define o nome do artista
    image.src = song.cover;                                                                                                                    // Define a imagem da capa
    background.src = song.cover;                                                                                                                 // Define a imagem de fundo
}

function changeMusic(direction) {                                                                                                           // Função para mudar de música
    musicIndex = (musicIndex + direction + songs.length) % songs.length;                                                                     // Atualiza o índice da música
    loadMusic(songs[musicIndex]);                                                                                                                      // Carrega a nova música
    playMusic();                                                                                                                                // Toca a nova música
}

function updateProgressBar() {                                                                                                                    // Função para atualizar a barra de progresso
    const { duration, currentTime } = music;                                                                                                      // Obtém a duração e o tempo atual da música
    const progressPercent = (currentTime / duration) * 100;                                                                                            // Calcula a porcentagem do progresso
    progress.style.width = `${progressPercent}%`;                                                                                                  // Atualiza a largura da barra de progresso

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');                                                                         // Formata o tempo em mm:ss
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;                                                            // Atualiza a duração total
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;                                                    // Atualiza o tempo atual
}

function setProgressBar(e) {                                                                                                                                   // Função para definir o progresso da música ao clicar na barra
    const width = playerProgress.clientWidth;                                                                                                            // Obtém a largura do contêiner da barra de progresso
    const clickX = e.offsetX;                                                                                                                              // Obtém a posição do clique
    music.currentTime = (clickX / width) * music.duration;                                                                                                       // Atualiza o tempo atual da música
}

playBtn.addEventListener('click', togglePlay);                                                                                                          // Adiciona o event listener para o botão de play/pause
prevBtn.addEventListener('click', () => changeMusic(-1));                                                                                                     // Adiciona o event listener para o botão de música anterior
nextBtn.addEventListener('click', () => changeMusic(1));                                                                                                 // Adiciona o event listener para o botão de próxima música
music.addEventListener('ended', () => changeMusic(1));                                                                                                         // Adiciona o event listener para quando a música termina
music.addEventListener('timeupdate', updateProgressBar);                                                                                                  // Adiciona o event listener para atualizar a barra de progresso
playerProgress.addEventListener('click', setProgressBar);                                                                                                   // Adiciona o event listener para definir o progresso ao clicar na barra

loadMusic(songs[musicIndex]);                                                                                                                          // Carrega a música inicial