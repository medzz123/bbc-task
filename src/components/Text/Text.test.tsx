import { render } from '@test/library';
import React from 'react';

import Text from './Text';

test('Text Test', () => {
  const { getByTestId, container } = render(<Text>Hello</Text>);

  const textNode = getByTestId('text');

  expect(textNode.textContent).toBe('Hello');

  expect(container).toMatchSnapshot();
});
