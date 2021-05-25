import { InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  errorMessage?: string;
};
