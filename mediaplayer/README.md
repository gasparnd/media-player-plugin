# Media Player Plugin

An extensible media player plugin. Allows mute, autoplay and auto pause videos

## Install

```
npm i @gasparnd/mediaplayer
```

## Build 🛠️

The project was created with TypeScript

## Start 🚀

For includes the plugin in your project, you should:

- Import

```
import MediaPlayer from '@gasparnd/mediaplayer';
import AutoPlay from '@gasparnd/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@gasparnd/mediaplayer/lib/plugins/AutoPause';
import Ads from '@gasparnd/mediaplayer/lib/plugins/Ads/index';
});
```

- Instance the Class, the video and his plugins how parrams

```
const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()]})
```

- Create the events

```
video.onclick = () => player.playToggle();
const muteBTN: HTMLElement = document.querySelector('#muteButton');
muteBTN.onclick = () => player.muteToggle();
```
