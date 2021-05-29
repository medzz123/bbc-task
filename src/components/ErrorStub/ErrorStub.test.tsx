import { render } from '@test/library';
import React from 'react';

import ErrorStub from './ErrorStub';

test('ErrorStub Test', () => {
  const { container } = render(<ErrorStub />);

  expect(container).toMatchSnapshot();
});
