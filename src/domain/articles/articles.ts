import { ArticleResponse } from '@typings/articles';
import axios from 'axios';

import { fetchQuery } from '../../lib/fetcher';

export const fetchArticles = async (id = 0) => {
  const response = await axios.get<ArticleResponse>('/api/articles?id=' + id);

  return response.data;
};

export const getHeadlines = () => {
  return fetchQuery<{ headlines: string[] }>({ url: `/api/headlines`, key: 'headlines' });
};
