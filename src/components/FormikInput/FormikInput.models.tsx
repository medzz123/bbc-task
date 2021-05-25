import { TextInputProps } from '@components/TextInput/TextInput.models';

export interface FormikInputProps extends TextInputProps {
  /**
   * Name will be used to lookup the values tree in Formik
   * . notation such as address.postcode works
   */
  name: string;
}
