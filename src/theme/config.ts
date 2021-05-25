import { createCss } from '@stitches/react';

import { fontSizes, fontWeights } from './font';
import { dark, light } from './palette';
import { sizes } from './sizes';
import { zIndices } from './zIndices';

export const { css, styled, global, theme, getCssString } = createCss({
  theme: {
    colors: light,
    sizes: sizes,
    space: sizes,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: {
      inter: 'Inter, sans-serif',
    },
    zIndices: zIndices,
  },
  utils: {
    m: () => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: () => (value) => ({
      marginTop: value,
    }),
    mr: () => (value) => ({
      marginRight: value,
    }),
    mb: () => (value) => ({
      marginBottom: value,
    }),
    ml: () => (value) => ({
      marginLeft: value,
    }),
    mx: () => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: () => (value) => ({
      paddingTop: value,
    }),
    pr: () => (value) => ({
      paddingRight: value,
    }),
    pb: () => (value) => ({
      paddingBottom: value,
    }),
    pl: () => (value) => ({
      paddingLeft: value,
    }),
    px: () => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: () => (value) => ({
      width: value,
      height: value,
    }),
    linearGradient: () => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    br: () => (value) => ({
      borderRadius: value,
    }),
    center: () => (value) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: value,
    }),
  },
  media: {
    bp375: '(min-width: 23.438rem)',
    bp480: '(min-width: 30rem)',
    bp768: '(min-width: 48rem)',
    bp992: '(min-width: 62rem)',
    bp1024: '(min-width: 64rem)',
    bp1280: '(min-width: 80rem)',
    bp1440: '(min-width: 90rem)',
    bp1680: '(min-width: 105rem)',
    bp1920: '(min-width: 120rem)',
    bp2560: '(min-width: 160rem)',
  },
});

export const globalStyles = global({
  '*, ::before, ::after': { boxSizing: 'border-box' },
  body: { margin: 0, backgroundColor: '$loContrast' },
  '*': {
    fontFamily: '$inter',
  },
  html: {
    display: 'flex',
    minHeight: '$full',
  },
  'body, #__next, main': {
    display: 'flex',
    flex: 1,
    height: 'auto',
    minHeight: 'auto',
  },
});

export const darkTheme = theme({
  colors: dark,
});
