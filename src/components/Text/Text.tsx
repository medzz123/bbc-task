import React, { FunctionComponent } from 'react';

import { TextProps } from './Text.models';
import { TextContainer } from './Text.styles';
import { mapColor, mapSize, mapWeight } from './Text.utils';

const Text: FunctionComponent<TextProps> = (props) => {
  const { children, level, weight, color, mb = 'small', align = 'left', variant = 'p' } = props;

  const mappedLevel = level || mapSize[variant];

  const mappedColor = color || mapColor[variant];

  const mappedWeight = weight || mapWeight[variant];

  return (
    <TextContainer
      as={variant}
      spacing={mb}
      align={align}
      weight={mappedWeight}
      color={mappedColor}
      level={mappedLevel}
      data-testid="text"
    >
      {children}
    </TextContainer>
  );
};

export default Text;
