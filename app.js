'use strict';

const minio = require('./lib/minio');

module.exports = app => {
  app.addSingleton('minio', minio);
  app.coreLogger.info('[egg-minio] is ready');
};
