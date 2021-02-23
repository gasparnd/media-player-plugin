import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const controllBTN = document.querySelector('#playButton')
const muteBTN = document.querySelector('#muteButton')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] })

controllBTN.onclick = () => player.playToggle()
video.onclick = () => player.playToggle()
muteBTN.onclick = () => player.muteToggle()