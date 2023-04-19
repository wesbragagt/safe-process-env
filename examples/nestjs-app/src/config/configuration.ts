import { Envs } from 'src/env';
import { z } from 'zod';

export const configurationSchema: z.ZodType<Envs> = z.object({
  APP_ENV: z.string(),
  DATABASE_URL: z.string(),
  NODE_ENV: z.string(),
  QUEUE_URL: z.string(),
  SNS_TODO_PUBLISH: z.string(),
});

const configuration = {
  appEnv: process.env.APP_ENV,
  database: process.env.DATABASE_URL,
};

export default () => {
  const parsed = configurationSchema.safeParse(process.env);

  if (parsed.success === false) {
    console.log('Env parse failed', parsed.error);
  }

  return configuration;
};
