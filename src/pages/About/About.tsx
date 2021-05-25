import Button from '@components/Button';
import Text from '@components/Text';
import { getUsers } from '@domain/users';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { AboutContainer, AboutContent } from './About.styles';

const About: NextPage = () => {
  const router = useRouter();

  const { data: users } = getUsers();

  return (
    <AboutContainer>
      <AboutContent>
        <Text variant="h1">About page</Text>

        <Button
          onClick={() => {
            router.push('/');
          }}
        >
          Back to home
        </Button>

        {JSON.stringify(users || '')}
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
