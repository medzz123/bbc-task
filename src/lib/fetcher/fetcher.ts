import axios from 'axios';
import { useQuery } from 'react-query';

import { FetcherProps } from './fetcher.models';

export const fetchQuery = <D, E = unknown>(props: FetcherProps) => {
  const { url, method = 'GET', body, headers, key } = props;
  const info = useQuery<D, E>(key, async () => {
    const response = await axios.request<D>({
      url: url,
      method: method,
      data: body,
      headers: headers,
    });

    return response.data;
  });

  return info;
};
