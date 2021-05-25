import { styled } from '@theme/config';

export const ThemeSwitchContainer = styled('button', {
  backgroundColor: '$text',
  color: '$background',
  padding: '$0',
  size: '$32',
  br: '$sizes$half',
  center: 'row',
  position: 'fixed',
  bottom: '$24',
  right: '$24',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  transition: 'all 200ms ease',
  '&:hover, &:focus': {
    boxShadow: '0 0 0 $sizes$2 $colors$success',
  },
});
