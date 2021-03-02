class MediaPlayer {
	constructor(config) {
		this.media = config.el
		this.plugins = config.plugins || []

		this._initPlugins()
	}

	_initPlugins = function() {
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

	muteVideo = function() {
		this.media.muted = true
	}

	unMuteVideo = function() {
		this.media.muted = false
	}

	muteToggle = function() {
		( this.media.muted ? this.unMuteVideo() : this.muteVideo() )
	}

	pauseVideo = function() {
		this.media.pause()
	}

	playVideo = function() {
		this.media.play() 	
	}

	playToggle = function() {
		(this.media.paused ? this.playVideo() : this.pauseVideo())  	
	}
}

export default MediaPlayer