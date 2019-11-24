import { MediaPlayer } from "./src/MediaPlayer.js"
import { AutoPlay } from "./src/plugins/AutoPlay.js"
import { BasicControls } from "./src/plugins/BasicControls.js"

const video = document.querySelector('video')

const playButton = document.querySelector('.play-button')
const stopButton = document.querySelector('.stop-button')
const playIcon = '▶'
const pauseIcon = '⏸'
playButton.innerText = playIcon

const videoPlayer = new MediaPlayer({
  el: video,
  initTime: 30,
  plugins: [
    // new AutoPlay
    new BasicControls
  ]
})

playButton.onclick = () => videoPlayer.handlePlay()
stopButton.onclick = () => videoPlayer.nuevaFuncion()
