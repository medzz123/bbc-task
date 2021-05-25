import { Content, Item, Trigger } from '@radix-ui/react-dropdown-menu';
import { styled } from '@theme/config';

export const StyledContent = styled(Content, {
  minWidth: '$3xs',
  backgroundColor: '$loContrast',
  borderRadius: '$sizes$6',
  padding: '$5',
  boxShadow: '$colors$shadow',
  mt: '$16',
});

export const StyledItem = styled(Item, {
  fontSize: '$info',
  color: '$hiContrast',
  padding: '$5 $10',
  borderRadius: '$sizes$3',
  cursor: 'default',

  '&:focus': {
    outline: 'none',
    backgroundColor: '$primary',
    color: '$loContrast',
  },
});

export const StyledTrigger = styled(Trigger, {
  fontSize: '$info',
  backgroundColor: 'transparent',
  color: '$hiContrast',
  border: 'none',
  boxShadow: 'none',
  padding: '$0',
  cursor: 'pointer',
  textDecoration: 'underline',
  display: 'flex',
  alignItems: 'center',
});
