import { styled } from '@theme/config';

export const StyledLink = styled('a', {
  color: '$text',
  fontSize: '$normal',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    type: {
      primary: {
        color: '$text',
      },
      secondary: {
        color: '$hiContrast',
      },
    },
  },
});
