import { render } from '@test/library';
import React from 'react';

import Menu from './Menu';

test('Menu Test', () => {
  const { container } = render(
    <Menu label="hello" items={[{ label: 'item-one', onClick: jest.fn }]} />
  );

  expect(container).toMatchSnapshot();
});
