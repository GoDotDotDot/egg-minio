# Egg plugin for MinIO

# This repo is not under maintenance, please go to [https://github.com/mete-work/egg-minio](https://github.com/mete-work/egg-minio)

### Config

```js
// {app_root}/config/plugin.js
  minio: {
    enable: true,
    package: '@godotdotdot/egg-minio',
  },
```

```js
// {app_root}/config/config.ts
  config.minio = {
    client: {
      endPoint: 'osd.mete.work',
      accessKey: 'accessKey',
      secretKey: 'secretKey',
      useSSL: true,
      port: 443,
    },
  };
```

### Usage

You can access MinIO object with `this.app.minio`.
