import { render } from '@test/library';
import React from 'react';

import Link from './Link';

test('Link Test', () => {
  const { getByTestId, container } = render(<Link href="#">Hello</Link>);

  const linkNode = getByTestId('link');

  expect(linkNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
