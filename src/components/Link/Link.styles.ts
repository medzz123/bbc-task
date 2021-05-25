import { styled } from '@theme/config';

export const StyledLink = styled('a', {
  color: '$primary',
  fontSize: '$info',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    type: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$hiContrast',
      },
    },
  },
});
