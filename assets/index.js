const video = document.querySelector('video')
const controllBTN = document.querySelector('#playButton')

function MediaPlayer(config) {
	this.media = config.el
}

MediaPlayer.prototype.play = function () {
	(this.media.paused ? this.media.play() : this.media.pause())  	
}

const player = new MediaPlayer({ el: video })

controllBTN.onclick = () => player.play()
video.onclick = () => player.play()