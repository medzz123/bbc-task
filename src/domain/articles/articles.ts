import axios from '@lib/axios';
import { ArticleResponse } from '@typings/articles';

import { fetchQuery } from '../../lib/fetcher';

export const fetchArticles = async (id = 0) => {
  const response = await axios.get<ArticleResponse>('/articles?id=' + id);

  return response.data;
};

export const getTitles = () => {
  return fetchQuery<{
    titles: {
      [article: string]: string;
    };
  }>({ url: `/headlines`, key: 'titles' });
};
