export interface FetcherProps {
  url: string;
  method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
  auth?: boolean;
  authToken?: string;
  body?: Record<string, unknown>;
  headers?: Record<string, unknown>;
}
