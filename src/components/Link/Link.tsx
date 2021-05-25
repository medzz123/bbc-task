import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';

import { LinkProps } from './Link.models';
import { StyledLink } from './Link.styles';

const Link: FunctionComponent<LinkProps> = (props) => {
  const { children, href, variant = 'primary' } = props;

  return (
    <NextLink href={href}>
      <StyledLink data-testid="link" type={variant}>
        {children}
      </StyledLink>
    </NextLink>
  );
};

export default Link;
