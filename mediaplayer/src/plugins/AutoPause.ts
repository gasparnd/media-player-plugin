import MediaPlayer from '../MediaPlayer';

class AutoPause {
	private threshold: number;
	player: MediaPlayer;

	constructor() {
		this.threshold = 0.25;
		this.handlerIntersection = this.handlerIntersection.bind(this);
		this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this);
	};

	run(player) {
		this.player = player;

		const observer = new IntersectionObserver(this.handlerIntersection, { threshold: this.threshold });  // DOM API
		observer.observe(this.player.media);  // DOM API

		document.addEventListener('visibilitychange', this.handlerVisibilityChange);  // DOM API
	};

	private handlerIntersection(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];
		
		const isVisible = entry.intersectionRatio >= this.threshold;

		if(isVisible) {
			this.player.playVideo();
		} else {
			this.player.pauseVideo();
		};

	}

	private handlerVisibilityChange() {
		const isVisible = document.visibilityState === 'visible';

		if(isVisible) {
			this.player.playVideo();
		} else {
			this.player.pauseVideo();
		};
	};
};

export default AutoPause;