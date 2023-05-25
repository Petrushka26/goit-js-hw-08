import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

checkLocalStorage();

player.on('timeupdate', throttle(timeUpdateHandler, 1000));

function checkLocalStorage() {
  const seconds = localStorage.getItem(STORAGE_KEY);

  if (seconds) {
    player.setCurrentTime(seconds);
  }
}

function timeUpdateHandler(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
