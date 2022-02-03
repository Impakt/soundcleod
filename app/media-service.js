'use strict'

const MediaService = require('electron-media-service')

module.exports = function mediaService(window, soundcloud) {

  const myService = new MediaService();

  myService.startService();
  myService.on('play', () => soundcloud.play());
  myService.on('pause', () => soundcloud.pause());
  soundcloud.on('play-new-track',
    ({title, subtitle}) => {
      console.log('media service updating')
      myService.setMetaData({
        id: 0,
        currentTime: 0,
        duration: 600000,
        'title': title,
        artist: 'Daren',
        album: subtitle,
        state: 'playing'
      })
      console.log('media service updated')
    })
}
