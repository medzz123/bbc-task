import { Box } from '@components/Box';
import Link from '@components/Link';
import Spinner from '@components/Spinner';
import Text from '@components/Text';
import { fetchArticles } from '@domain/articles';
import { parseArticleBody } from '@lib/parseArticle';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';

import { ArticleContainer, HomeContainer, HomeContent } from './Home.styles';

const Home: NextPage = () => {
  const router = useRouter();

  const articleId = Number(router?.query?.id || 1);

  const { isLoading, isError, data, isFetching } = useQuery(
    ['articles', articleId],
    () => fetchArticles(articleId),
    {
      keepPreviousData: true,
    }
  );

  const parsed = parseArticleBody(data?.article?.body || []);

  return (
    <HomeContainer>
      <HomeContent>
        <Box css={{ height: '$148' }} />
        {isError ? (
          <Box css={{ margin: 'auto', mb: '$20' }}>
            <Text variant="h2" align="center">
              Something has gone wrong.
            </Text>

            <Box css={{ center: 'row' }}>
              <Link href="/">Reload</Link>
            </Box>
          </Box>
        ) : isLoading || isFetching || !data?.article ? (
          <Box css={{ size: '$50', margin: 'auto' }}>
            <Spinner />
          </Box>
        ) : (
          <>
            <Box css={{ maxWidth: '65ch', margin: 'auto' }}>
              <Text variant="h1" align="center">
                {data.article.title}
              </Text>
            </Box>
            <Box css={{ height: '$60' }} />
            <ArticleContainer>{parsed}</ArticleContainer>
            <Box css={{ height: '$60' }} />
            <Box css={{ center: 'row' }}>
              {data.hasMore ? (
                <Link
                  href={{
                    pathname: '/',
                    query: { id: articleId + 1 },
                  }}
                >
                  Read Next Article
                </Link>
              ) : (
                <Link href="/rate">Rate Articles</Link>
              )}
            </Box>
          </>
        )}
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
