import { NextApiRequest, NextApiResponse } from 'next';

const helloApi = (request: NextApiRequest, response: NextApiResponse) => {
  const { t } = request.query;

  return response.send({ t: `Your request was ${t}` });
};

export default helloApi;
