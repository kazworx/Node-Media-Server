const NodeMediaServer = require('node-media-server');

const config = {
   auth: {
    api : true,
    api_user: 'admin',
    api_pass: 'changeme',
  },
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  relay: {
    ffmpeg: '/usr/bin/ffmpeg'
  }
};

var nms = new NodeMediaServer(config)
nms.run();

