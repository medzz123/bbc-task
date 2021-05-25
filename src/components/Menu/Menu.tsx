import Icon from '@components/Icon';
import { Root } from '@radix-ui/react-dropdown-menu';
import React, { FunctionComponent } from 'react';

import { MenuProps } from './Menu.models';
import { StyledContent, StyledItem, StyledTrigger } from './Menu.styles';

const Menu: FunctionComponent<MenuProps> = (props) => {
  const { label, items } = props;

  return (
    <Root>
      <StyledTrigger>
        {label} <Icon size={0.6} name="chevron-down" />
      </StyledTrigger>
      <StyledContent>
        {items.map((item) => (
          <StyledItem key={item.label} onSelect={item.onClick}>
            {item.label}
          </StyledItem>
        ))}
      </StyledContent>
    </Root>
  );
};

export default Menu;
