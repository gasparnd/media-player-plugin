class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
  }

  private initPlugins = function () {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  };

  muteVideo = function () {
    this.media.muted = true; // DOM API
  };

  unMuteVideo = function () {
    this.media.muted = false; // DOM API
  };

  muteToggle = function () {
    this.media.muted ? this.unMuteVideo() : this.muteVideo();
  };

  pauseVideo = function () {
    this.media.pause(); // DOM API
  };

  playVideo = function () {
    this.media.play(); // DOM API
  };

  playToggle = function () {
    this.media.paused ? this.playVideo() : this.pauseVideo();
  };
}

export default MediaPlayer;
