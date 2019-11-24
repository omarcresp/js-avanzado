const defaultVideo = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

/**
 *
 * @param {Object} config
 * @param {HTMLMediaElement} config.el
 * @param {number} [config.initTime]
 * @param {Object[]} [config.plugins]
 */
export function MediaPlayer(config) {
  // Comprobar parametros (IIFE)
  (()=>{
    console.assert(config, 'MediaPlayer -> You must to pass an config object')
    config = config || { el: document.createElement('video') }

    console.assert(config.el instanceof HTMLMediaElement, 'MediaPlayer -> You must to pass a valid HTMLMediaElement in the el property of the config')
    config.el = config.el instanceof HTMLMediaElement ? config.el : document.createElement('video')

    console.assert(config.el.src, 'MediaPlayer -> The video element must to have a source')
    config.el.volume = config.el.src ? config.el.volume : 0
    config.el.src = config.el.src || defaultVideo

    console.assert(config.plugins.every(d => typeof d.run === 'function'), 'MediaPlayer -> You must to pass valid plugins')
    config.plugins = config.plugins.filter(d => typeof d.run === 'function')
  })()

  this.media = config.el
  this.media.currentTime = config.initTime || 0
  this.initTime = config.initTime || 0

  config.plugins.forEach(d => d.run.call(this))
}

MediaPlayer.prototype.play = function () {
  this.media.play()
}

MediaPlayer.prototype.pause = function () {
  this.media.pause()
}

/**
 * Check if the video is paused and fire the correct play or pause function
 */
MediaPlayer.prototype.handlePlay = function () {
  if (this.media.paused)
    this.play()
  else
    this.pause()
}

/**
 * Pause the video and go to the setted init time
 */
MediaPlayer.prototype.stop = function () {
  this.pause()
  this.media.currentTime = this.initTime
}
