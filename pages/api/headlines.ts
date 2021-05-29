import { articleList } from '@lib/articles';
import { delay } from '@lib/delay';
import { errorOut } from '@lib/middleware/error';
import { NextApiRequest, NextApiResponse } from 'next';

const objectMap = (obj: Record<string, any>, fn: (value: any, key: string, index: number) => any) =>
  Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

const headlines = async (request: NextApiRequest, response: NextApiResponse) => {
  await delay(500);

  try {
    errorOut(request);
  } catch (err) {
    return response.status(500).send({ message: 'Error' });
  }

  const titles = objectMap(articleList, (article) => article.title);

  return response.send({ titles });
};

export default headlines;
