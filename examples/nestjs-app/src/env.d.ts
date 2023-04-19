export type EnvKeys =
  | 'DATABASE_URL'
  | 'NODE_ENV'
  | 'APP_ENV'
  | 'QUEUE_URL'
  | 'SNS_TODO_PUBLISH';
export type Envs = { [K in EnvKeys]?: string };

declare global {
  namespace NodeJS {
    // eslint-disable-next-line
    interface ProcessEnv extends Envs {}
  }
}
