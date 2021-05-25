import { render } from '@test/library';
import React from 'react';

import List from './List';

test('List Test', () => {
  const { getByTestId, container } = render(<List>Hello</List>);

  const listNode = getByTestId('list');

  expect(listNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
