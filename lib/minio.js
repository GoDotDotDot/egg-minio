'use strict';

const Minio = require('minio');

module.exports = config => {
  const client = new Minio.Client({
    endPoint: config.endPoint,
    port: config.port,
    useSSL: config.useSSL,
    accessKey: config.accessKey,
    secretKey: config.secretKey,
  });

  return client;
};
