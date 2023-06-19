const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const songs = [
  {
    title: 'Song 1',
    src: 'Ashe - Moral of the Story (Official Audio).mp3'
  },
  {
    title: 'Song 2',
    src: 'song2.mp3'
  },
  {
    title: 'Song 3',
    src: 'Song3.mp3'
  },

];

let currentSongIndex = 0;


function loadSong() {
  const currentSong = songs[currentSongIndex];
  audioPlayer.src = currentSong.src;
  audioPlayer.play();
}


function updatePlayButton() {
  if (audioPlayer.paused) {
    playBtn.textContent = 'Play';
  } else {
    playBtn.textContent = 'Pause';
  }
}


playBtn.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
  updatePlayButton();
});

prevBtn.addEventListener('click', function() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong();
  updatePlayButton();
});

nextBtn.addEventListener('click', function() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
  updatePlayButton();
});


audioPlayer.addEventListener('ended', function() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
  updatePlayButton();
});


loadSong();
updatePlayButton();
