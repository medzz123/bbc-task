import { render } from '@test/library';
import React from 'react';

import ThemeSwitch from './ThemeSwitch';

test('ThemeSwitch Test', () => {
  const { container } = render(<ThemeSwitch />);

  expect(container).toMatchSnapshot();
});
