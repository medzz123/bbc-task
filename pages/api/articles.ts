import { articleList, Articles } from '@lib/articles';
import { delay } from '@lib/delay';
import { NextApiRequest, NextApiResponse } from 'next';

const articles = async (request: NextApiRequest, response: NextApiResponse) => {
  const { id } = request.query;

  await delay(500);

  const parsedId = (Array.isArray(id) ? id.join('') : id) as Articles;

  const article = articleList[parsedId];

  if (!article) {
    return response.status(404).send({ message: 'Article not found' });
  }

  return response.send({ article, hasMore: Number(id) < 5 ? true : false });
};

export default articles;
