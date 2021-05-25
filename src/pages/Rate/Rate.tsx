import { getHeadlines } from '@domain/articles';
import { NextPage } from 'next';
import React from 'react';

import { RateContainer, RateContent } from './Rate.styles';

const Rate: NextPage = () => {
  const { data } = getHeadlines();

  console.log('data', data);

  return (
    <RateContainer>
      <RateContent>
        <p>Hello, this page us Rate</p>
      </RateContent>
    </RateContainer>
  );
};

export default Rate;
