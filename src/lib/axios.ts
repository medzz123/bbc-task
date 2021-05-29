import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

const makeHeaders = async () => ({
  'Content-Type': 'application/json',
  'x-fail': `${localStorage.getItem('x-fail')}`,
});

instance.interceptors.request.use(async (config) => ({
  ...config,
  headers: {
    ...config.headers,
    ...(await makeHeaders()),
  },
}));

export default instance;
