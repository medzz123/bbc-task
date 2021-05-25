import { render } from '@test/library';
import { Formik } from 'formik';
import React from 'react';

import FormikInput from './FormikInput';

test('FormikInput → Renders Correctly', () => {
  const { container } = render(
    <Formik<{ test: string }>
      initialValues={{ test: 'hu' }}
      onSubmit={() => {
        jest.fn();
      }}
    >
      <FormikInput name="test" />
    </Formik>
  );

  expect(container).toMatchSnapshot();
});
