'use strict'

import MediaService from 'electron-media-service'

module.exports = function mediaService(window, soundcloud) {

  const myService = new MediaService();

  myService.startService();
  myService.on('play', () => soundcloud.play());
  myService.on('pause', () => soundcloud.pause());
  myService.setMetaData({
    title: 'Never Gonna Give You Up',
    // Other track meta data here
  });

}
