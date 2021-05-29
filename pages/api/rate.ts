import { delay } from '@lib/delay';
import { errorOut } from '@lib/middleware/error';
import { NextApiRequest, NextApiResponse } from 'next';

const rate = async (request: NextApiRequest, response: NextApiResponse) => {
  const { ratings } = request.body;

  await delay(1500);

  try {
    errorOut(request);
  } catch (err) {
    return response.status(500).send({ message: 'Error' });
  }

  if (!ratings) {
    return response
      .status(400)
      .send({ message: 'Did not find any ratings', headers: request.headers });
  }

  if (request.method === 'POST') {
    return response.status(200).send({ message: 'OK', headers: request.headers });
  }
};

export default rate;
