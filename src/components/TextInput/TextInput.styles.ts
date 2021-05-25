import { styled } from '@theme/config';

export const StyledTextInput = styled('input', {
  borderRadius: '$sizes$12',
  border: '$sizes$1 solid $colors$grey100',
  color: '$hiContrast',
  backgroundColor: 'transparent',
  padding: '$12',
  outline: 'none',
  fontSize: '$sizes$14',
  fontFamily: '$inter',
  width: '$full',

  variants: {
    color: {
      error: {
        border: '$sizes$1 solid $colors$error',
      },
      normal: {
        border: '$sizes$1 solid $colors$grey100',
      },
    },
  },
});
