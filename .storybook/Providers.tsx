import React from 'react';

import { globalStyles, darkTheme } from '../src/theme/config';
import '../src/theme//icons.css';
import { ThemeProvider } from 'next-themes';
import { IdProvider } from '@radix-ui/react-id';
import { QueryClient, QueryClientProvider } from 'react-query';

/**
 * Providers that the components uses, global decorator added to all stories.
 */
const Providers = ({ children }) => {
  globalStyles();
  const queryClientRef = React.useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <ThemeProvider
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <QueryClientProvider client={queryClientRef.current}>
        <IdProvider>{children}</IdProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const providersDecorator = (storyFn) => <Providers>{storyFn()}</Providers>;

export default providersDecorator;
