import { ClientOptions, Client } from 'minio';

declare module 'egg' {
  interface Application {
    minio: Client;
  }

  interface EggAppConfig {
    minio: {
      client: ClientOptions;
      clients?: {
        [key: string]: ClientOptions;
      };
    };
  }
}
