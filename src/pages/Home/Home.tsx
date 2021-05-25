import Button from '@components/Button';
import Text from '@components/Text';
import { getTodos } from '@domain/todos';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { HomeContainer, TodoCard } from './Home.styles';

const Home: NextPage = () => {
  const router = useRouter();

  const { data: todos } = getTodos();

  return (
    <HomeContainer>
      <Text variant="h1">Home Page</Text>

      <Button
        onClick={() => {
          router.push('/about');
        }}
      >
        About
      </Button>

      {todos &&
        todos.map((todo) => (
          <TodoCard key={`${todo.id}-${todo.userId}`}>
            <Text>Title: {todo.title}</Text>
            <Text>Completed: {String(todo.completed)}</Text>
            <Text>Id: {todo.id}</Text>
            <Text>UserId: {todo.userId}</Text>
          </TodoCard>
        ))}
    </HomeContainer>
  );
};

export default Home;
