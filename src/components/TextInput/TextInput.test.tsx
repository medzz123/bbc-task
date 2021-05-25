import { render } from '@test/library';
import React from 'react';

import TextInput from './TextInput';

test('TextInput Test', () => {
  const { container } = render(<TextInput />);

  expect(container).toMatchSnapshot();
});
