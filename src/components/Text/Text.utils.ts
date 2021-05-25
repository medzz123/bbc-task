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

export const mapColor: {
  [key in TextVariant]: 'main' | 'text';
} = {
  p: 'text',
  span: 'text',
  h1: 'main',
  h2: 'main',
  h3: 'main',
};

export const mapWeight: {
  [key in TextVariant]: 'bold' | 'black' | 'normal';
} = {
  p: 'normal',
  span: 'normal',
  h1: 'black',
  h2: 'black',
  h3: 'black',
};
