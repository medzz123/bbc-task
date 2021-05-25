import { IdProvider } from '@radix-ui/react-id';
import { render, RenderOptions } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const AllTheProviders: FC = ({ children }) => {
  const queryClientRef = React.useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <IdProvider>
      <QueryClientProvider client={queryClientRef.current}>{children}</QueryClientProvider>
    </IdProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
