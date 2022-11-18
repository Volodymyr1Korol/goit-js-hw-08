import Player from '@vimeo/player';
import throttle from 'lodash.throttle'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';


function getVideoTime(e) {
    localStorage.setItem(LOCALSTORAGE_KEY, e.seconds);
}

player.on('timeupdate', throttle(getVideoTime, 1000));
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0);