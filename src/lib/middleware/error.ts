import { NextApiRequest } from 'next';

export const errorOut = (request: NextApiRequest) => {
  if (request.headers['x-fail'] === 'true') {
    throw new Error('Failed');
  }

  return undefined;
};
