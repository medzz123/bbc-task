import { render } from '@test/library';
import React from 'react';

import Icon from './Icon';

test('Icon Test', () => {
  const { container } = render(<Icon name="enter" />);

  expect(container).toMatchSnapshot();
});
