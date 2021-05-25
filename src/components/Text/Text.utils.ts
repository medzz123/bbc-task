import { FontSizes } from '@theme/font';

import { TextVariant } from './Text.models';

export const mapSize: {
  [key in TextVariant]: FontSizes;
} = {
  p: 'normal',
  span: 'normal',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
};
