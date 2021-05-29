import { styled } from '@theme/config';

export const ErrorStubContainer = styled('button', {
  backgroundColor: '$main',
  color: '$background',
  padding: '$0',
  size: '$32',
  br: '$sizes$half',
  center: 'row',
  position: 'fixed',
  top: '$24',
  right: '$24',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  transition: 'all 200ms ease',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 $sizes$2 $colors$error',
  },

  variants: {
    isError: {
      error: {
        backgroundColor: '$error',
        '&:hover, &:focus': {
          boxShadow: '0 0 0 $sizes$2 $colors$success',
        },
      },
      success: {
        backgroundColor: '$success',
        '&:hover, &:focus': {
          boxShadow: '0 0 0 $sizes$2 $colors$error',
        },
      },
    },
  },
});
