import { styled } from '@theme/config';

export const MessageBoxContainer = styled('div', {
  backgroundColor: '$error',
  borderRadius: '$sizes$12',
  padding: '$12',
  width: 'fit-content',

  variants: {
    type: {
      info: {
        backgroundColor: '$primary',
      },
      error: {
        backgroundColor: '$error',
      },
    },
  },
});
