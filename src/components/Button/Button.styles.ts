import { styled } from '@theme/config';

export const ButtonContainer = styled('button', {
  padding: '$10 $28',
  boxShadow: '0 0 0 $sizes$2 $colors$main',
  border: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$sizes$12',
  color: '$main',
  fontSize: '$normal',
  fontWeight: '$normal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 $sizes$2 $colors$text',
    color: '$text',
  },
  '&:disabled': {
    backgroundColor: '$grey800',
    cursor: 'default',
  },
  position: 'relative',
});

export const TextContainer = styled('span', {
  transition: 'all 200ms ease',
  variants: {
    hide: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    },
  },
});

export const SpinnerContainer = styled('div', {
  position: 'absolute',
  left: '$half',
  top: '$half',
  transform: 'translate(-$sizes$half, -$sizes$half)',
  svg: {
    width: '$20',
    height: '$20',
  },
});
