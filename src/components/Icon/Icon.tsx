import React, { FunctionComponent } from 'react';

import { IconProps } from './Icon.models';
import { IconContainer } from './Icon.styles';

const Icon: FunctionComponent<IconProps> = (props) => {
  const { name, size = 1 } = props;

  return <IconContainer css={{ '--ggs': size }} className={`gg-${name}`} />;
};

export default Icon;
