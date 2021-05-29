import { render } from '@test/library';
import React from 'react';

import List from './List';

test('List Test', () => {
  const { container } = render(<List items={[]} />);

  expect(container).toMatchSnapshot();
});
