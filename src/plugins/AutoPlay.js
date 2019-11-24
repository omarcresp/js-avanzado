export function AutoPlay() {

}

AutoPlay.prototype.run = function () {
  this.media.volume = 0
  this.media.play()
}
