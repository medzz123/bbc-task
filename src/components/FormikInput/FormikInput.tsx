import TextInput from '@components/TextInput';
import { useField } from 'formik';
import React, { FunctionComponent } from 'react';

import { FormikInputProps } from './FormikInput.models';

const FormikInput: FunctionComponent<FormikInputProps> = (props) => {
  const { name, ...rest } = props;
  const [field, meta, helpers] = useField(name);

  const error = meta.touched && Boolean(meta.error);

  return (
    <TextInput
      error={error}
      errorMessage={meta.error}
      placeholder={rest.placeholder}
      value={field.value}
      onChange={(event) => {
        helpers.setValue(event.target.value);
      }}
      onBlur={() => {
        helpers.setTouched(true);
      }}
      name={name}
      {...rest}
    />
  );
};

export default FormikInput;
