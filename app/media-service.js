'use strict'

const MediaService = require('electron-media-service')

module.exports = function mediaService(window, soundcloud) {

  console.log('media service starting')
  const myService = new MediaService();

  myService.startService();
  console.log('media service started')

  myService.on('play', () => {
    console.log('media service play')
    soundcloud.play()
  });
  myService.on('pause', () => {
    console.log('media service pause')
    soundcloud.pause()
  });
  soundcloud.on('play-new-track',
    ({title, subtitle}) => {
      updateMediaService(title, subtitle)
    }
  );

  function updateMediaService(trackTitle, albumTitle) {
    console.log('media service updating')
    myService.setMetaData({
      id: 1234,
      currentTime: 0,
      duration: 600,
      title: trackTitle,
      artist: 'Daren',
      album: albumTitle,
      state: 'playing'
    })
    console.log('media service updated')

  }
}
