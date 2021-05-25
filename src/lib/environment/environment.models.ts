export enum VercelEnvironment {
  Production = 'production',
  Preview = 'preview',
  Development = 'development',
}

export interface Environment {
  /**
   * True if current environment is designed to help developers debug and never see the light of day for any actual users (e.g. NODE_ENV being development).
   */
  isDebugBuild: boolean;
  /**
   * If the project is deployed on Vercel, what kind of deployment it is.
   */
  vercelEnvironment?: VercelEnvironment;
  /**
   * If on a feature branch we use the branch name, in develop or production environments we use the commit hash, and undefined otherwise.
   */
  commitReference?: string;
}
