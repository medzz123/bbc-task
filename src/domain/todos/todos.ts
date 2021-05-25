import { fetchQuery } from '../../lib/fetcher';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const getTodos = () => {
  return fetchQuery<Todo[]>({ url: 'https://jsonplaceholder.typicode.com/todos' });
};
