export const fontSizes = {
  /**
   * Normal - 16px
   */
  normal: '1rem',
  /**
   * Normal - 10px
   */
  small: '0.6rem',
  /**
   * Info Label - 13px;
   */
  info: '0.8125rem',
  /**
   * H1 - 36px
   */
  h1: '2.25rem',
  /**
   * H2 - 24px
   */
  h2: '1.5rem',
  /**
   * H3 - 18px
   */
  h3: '1.125rem',
};

export const fontWeights = {
  /**
   * Thin - 200
   */
  thin: 200,
  /**
   * Normal - 400
   */
  normal: 400,
  /**
   * SemiBold - 600
   */
  semiBold: 600,
  /**
   * Bold - 700
   */
  bold: 700,
  /**
   * Black - 900
   */
  black: 900,
};

export type FontSizes = keyof typeof fontSizes;
export type FontWeights = keyof typeof fontWeights;
