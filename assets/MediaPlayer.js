function MediaPlayer (config) {
	this.media = config.el
	this.plugins = config.plugins || []

	this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function() {
	const player = {
		play: () => this.playVideo(),
		pause: () => this.pauseVideo(),
		media: this.media,
		get muted() {
			return this.media.muted
		},
		set muted(value) {
			this.media.muted = value
		}
	}
	this.plugins.forEach(plugin => {
		plugin.run(player)
	})
}

MediaPlayer.prototype.muteVideo = function() {
	this.media.muted = true
}

MediaPlayer.prototype.unMuteVideo = function() {
	this.media.muted = false
}

MediaPlayer.prototype.muteToggle = function() {
	( this.media.muted ? this.unMuteVideo() : this.muteVideo() )
}

MediaPlayer.prototype.pauseVideo = function() {
	this.media.pause()
}

MediaPlayer.prototype.playVideo = function() {
	this.media.play() 	
}

MediaPlayer.prototype.playToggle = function() {
	(this.media.paused ? this.playVideo() : this.pauseVideo())  	
}

export default MediaPlayer