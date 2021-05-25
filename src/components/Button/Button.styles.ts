import { styled } from '@theme/config';

export const ButtonContainer = styled('button', {
  padding: '$10 $28',
  boxShadow: 'none',
  border: 'none',
  backgroundColor: '$primary',
  borderRadius: '$sizes$12',
  color: '$loContrast',
  fontSize: '$info',
  fontWeight: '$normal',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 $sizes$2 $colors$success',
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
