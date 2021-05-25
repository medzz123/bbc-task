import { styled } from '@theme/config';

export const HomeContainer = styled('main', {
  flexDirection: 'column',
});

export const TodoCard = styled('div', {
  backgroundColor: '$loContrast',
  boxShadow: '$colors$shadow',
  p: '$12',
  m: '$12',
  width: 'fit-content',
});
