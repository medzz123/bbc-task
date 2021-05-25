import { render } from '@test/library';
import React from 'react';

import MessageBox from './MessageBox';

test('MessageBox Test', () => {
  const { getByTestId, container } = render(<MessageBox>Hello</MessageBox>);

  const messageBoxNode = getByTestId('messageBox');

  expect(messageBoxNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
