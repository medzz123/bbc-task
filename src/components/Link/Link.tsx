import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';

import { LinkProps } from './Link.models';
import { StyledLink } from './Link.styles';

const Link: FunctionComponent<LinkProps> = (props) => {
  const { children, variant = 'primary', ...rest } = props;

  return (
    <NextLink {...rest}>
      <StyledLink data-testid="link" type={variant}>
        {children}
      </StyledLink>
    </NextLink>
  );
};

export default Link;
