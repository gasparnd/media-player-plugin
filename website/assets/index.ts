import MediaPlayer from '@gasparnd/mediaplayer';
import AutoPlay from '@gasparnd/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@gasparnd/mediaplayer/lib/plugins/AutoPause';
import Ads from '@gasparnd/mediaplayer/lib/plugins/Ads/index';

const video = document.querySelector('video');
const controllBTN: HTMLElement = document.querySelector('#playButton');
const muteBTN: HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });

controllBTN.onclick = () => player.playToggle();
video.onclick = () => player.playToggle();
muteBTN.onclick = () => player.muteToggle();

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(error => console.log(error.message));
};