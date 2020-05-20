# Egg plugin for MinIO

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