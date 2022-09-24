import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const playerRef = document.querySelector('iframe');
const player = new Player(playerRef);
const LOCALSTORAGE_KEY_PLAYER = 'videoplayer-current-time';
const savedTime = localStorage.getItem(LOCALSTORAGE_KEY_PLAYER);

if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(onSaveTime, 1000));

function onSaveTime(time) {
    localStorage.setItem(LOCALSTORAGE_KEY_PLAYER, time.seconds)
};