import { Box } from '@components/Box';
import Button from '@components/Button';
import Link from '@components/Link';
import Spinner from '@components/Spinner';
import Text from '@components/Text';
import { getTitles } from '@domain/articles';
import axios from '@lib/axios';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
// @ts-ignore
import ReactStars from 'react-rating-stars-component';

import { RatingValues } from './Rate.models';
import { RateContainer, RateContent } from './Rate.styles';

const Rate: NextPage = () => {
  const { data, isError, isLoading } = getTitles();

  const [ratings, setRatings] = useState({});

  const ratingMutation = useMutation((rating: RatingValues) => {
    return axios.post<{ message: string }, RatingValues>('/rate', rating);
  });

  return (
    <RateContainer>
      <RateContent>
        <Box css={{ height: '$148' }} />

        <Text variant="h1" align="center">
          Rate Articles
        </Text>

        <Box css={{ height: '$40' }} />
        {isError ? (
          <Box css={{ margin: 'auto', mb: '$20' }}>
            <Text variant="h2" align="center">
              Something has gone wrong.
            </Text>

            <Box css={{ center: 'row' }}>
              <Link href="/rate">Reload</Link>
            </Box>
          </Box>
        ) : isLoading || !data?.titles ? (
          <Box css={{ size: '$50', margin: 'auto' }}>
            <Spinner />
          </Box>
        ) : (
          <>
            <Box css={{ maxWidth: '65ch', margin: 'auto' }}>
              {Object.entries(data.titles).map(([key, value]) => (
                <Box
                  css={{ display: 'flex', justifyContent: 'space-between', marginBottom: '$24' }}
                  key={`title-${key}`}
                >
                  <Box css={{ marginRight: '$24' }}>
                    <Text variant="h3">{value}</Text>
                  </Box>

                  <Box css={{ minWidth: '$80' }}>
                    <ReactStars
                      onChange={(rating: string) => {
                        setRatings((p) => ({ ...p, [key]: Number(rating) }));
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}

        <Box css={{ height: '$40' }} />

        {ratingMutation.isError ? (
          <Box css={{ mb: '$24' }}>
            <Text variant="p" align="center">
              Something went wrong please, try again
            </Text>
          </Box>
        ) : null}

        {ratingMutation.isSuccess ? (
          <Box css={{ center: 'column' }}>
            <Text variant="p" align="center">
              Thanks for rating the articles
            </Text>

            <Button
              busy={ratingMutation.isLoading}
              onClick={() => {
                ratingMutation.mutate({ ratings });
              }}
            >
              Rate Again
            </Button>
          </Box>
        ) : (
          <Box css={{ center: 'row' }}>
            <Button
              busy={ratingMutation.isLoading}
              onClick={() => {
                ratingMutation.mutate({ ratings });
              }}
            >
              Send Ratings
            </Button>
          </Box>
        )}
      </RateContent>
    </RateContainer>
  );
};

export default Rate;
