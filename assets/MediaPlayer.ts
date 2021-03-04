class MediaPlayer {
	media: HTMLMediaElement
	plugins: Array <any>

	constructor(config) {
		this.media = config.el
		this.plugins = config.plugins || []

		this.initPlugins()
	};

	private initPlugins = function() {
		this.plugins.forEach(plugin => {
			plugin.run(this)
		})
	};

	muteVideo = function() {
		this.media.muted = true
	};

	unMuteVideo = function() {
		this.media.muted = false
	};

	muteToggle = function() {
		( this.media.muted ? this.unMuteVideo() : this.muteVideo() )
	}

	pauseVideo = function() {
		this.media.pause()
	};

	playVideo = function() {
		this.media.play() 	
	};

	playToggle = function() {
		(this.media.paused ? this.playVideo() : this.pauseVideo())  	
	};
}

export default MediaPlayer