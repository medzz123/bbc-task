import { styled } from '@theme/config';

export const StyledLink = styled('a', {
  color: '$background',
  background: '$main',
  padding: '$8 $12',
  borderRadius: '$sizes$12',
  fontSize: '$normal',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    type: {
      primary: {
        color: '$background',
      },
      secondary: {
        color: '$background',
      },
    },
  },
});
