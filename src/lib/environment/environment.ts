import { Environment, VercelEnvironment } from './environment.models';

export const environment: Environment = {
  isDebugBuild: process.env.NODE_ENV === 'development',
  vercelEnvironment: process.env.VERCEL_ENV as VercelEnvironment,
  commitReference: process.env.VERCEL_GIT_COMMIT_REF ?? process.env.GIT_SHA,
};
