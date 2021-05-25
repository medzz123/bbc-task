import '@theme/icons.css';

import ThemeSwitch from '@components/ThemeSwitch';
import environment from '@lib/environment';
import { pageView } from '@lib/gtag';
import { IdProvider } from '@radix-ui/react-id';
import { darkTheme, globalStyles } from '@theme/config';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import React, { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';

if (!environment.isDebugBuild) {
  Router.events.on('routeChangeComplete', (url: string) => pageView(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles();
  const queryClientRef = React.useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <Fragment>
      <Head>
        <title>Template</title>
        <meta name="description" content="Template Generator" />
      </Head>
      <IdProvider>
        <ThemeProvider
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="system"
        >
          <QueryClientProvider client={queryClientRef.current}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </Hydrate>
          </QueryClientProvider>
          <ThemeSwitch />
        </ThemeProvider>
      </IdProvider>
    </Fragment>
  );
};

export default MyApp;
